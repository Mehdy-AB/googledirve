import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {


  try {
    const session = req.headers.get('authorization');
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type'); // e.g., 'all', 'folder', 'workspaces'
    const documentId = searchParams.get('documentId'); // Required for type 'folder'
    const query = searchParams.get('content');
    if (!session) {
      return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });
    }
    let endpoint: string;
  
    switch (type) {
      case 'document':
        if (!documentId) {
          return NextResponse.json({ error: 'documentId is required for type document' }, { status: 400 });
        }
        endpoint = `${process.env.Backend_URL}/documents/${documentId}`;
        break;
      case 'metadata':
          endpoint = `${process.env.Backend_URL}/documents/search/metadata`;
        break;
      case 'content':
        if (!query) {
          return NextResponse.json({ error: 'content is required for type content' }, { status: 400 });
        }
          endpoint = `${process.env.Backend_URL}/documents/search/content?query=${query}`;
        break;
      case 'favorites':
          endpoint = `${process.env.Backend_URL}/documents/favorites`;
        break;
      case 'download':
        if (!documentId) {
          return NextResponse.json({ error: 'documentId is required for type download' }, { status: 400 });
        }
        endpoint = `${process.env.Backend_URL}/documents/`;
        break;
      default:
        return NextResponse.json({ error: 'Invalid or missing type parameter' }, { status: 400 });
    }

    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: session,
      },
    });

    const res = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: res || 'Failed to fetch data' }, { status: response.status });
    }

    return NextResponse.json(res);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');
    const fileId = searchParams.get('fileId');
    const session = req.headers.get('authorization');
    let formData ;

    if (!session) {
      return NextResponse.json(
        { error: 'Authorization header is missing' },
        { status: 401 }
      );
    }

    if (type === 'upload') {
      formData = await req.formData();
      const response = await fetch(
        `${process.env.Backend_URL}/documents/upload`,
        {
          method: 'POST',
          headers: {
            Authorization: session, // Add only Authorization, don't manually set Content-Type
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        return NextResponse.json(
          { error: errorResponse.message || 'Failed to upload' },
          { status: response.status }
        );
      }

      return NextResponse.json(response);
    } else if (type === 'favorite') {
      if (!fileId) {
        return NextResponse.json(
          { error: 'Missing required query parameters' },
          { status: 400 }
        );
      }

      const response = await fetch(
        `${process.env.Backend_URL}/documents/${fileId}/favorite`,
        {
          method: 'POST',
          headers: {
            Authorization: session, // Add only Authorization, don't manually set Content-Type
          },
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        return NextResponse.json(
          { error: errorResponse.message || 'Failed to upload' },
          { status: response.status }
        );
      }

      return NextResponse.json(response);
    } else {
      return NextResponse.json(
        { error: 'Invalid or missing type parameter' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type'); // e.g., ?type=rename or ?type=replace
    const jsonBody = await req.json();
    const data = JSON.stringify(jsonBody.data);
    const session = req.headers.get('authorization');

    if (!session) {
      return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });
    }

    if (!type || !['rename', 'move'].includes(type)) {
      console.log(type)
      return NextResponse.json({ error: 'Invalid or missing type parameter' }, { status: 400 });
    }

    const endpoint = getEndpoint(type);
    const response = await fetch(endpoint, {
      method: 'PUT',
      headers: {
        Authorization: session,
        'Content-Type': 'application/json',
      },
      body: data,
    });

    const res = await response.json();

    if (res.message) {
      return NextResponse.json({ error: res.message }, { status: 400 });
    }
    console.log(res)
    return NextResponse.json(res);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

function getEndpoint(type: string): string {
  const baseURL = process.env.Backend_URL || '';
  switch (type) {
    case 'rename':
      return `${baseURL}/documents/rename`;
    case 'move':
      return `${baseURL}/documents/move`;
    default:
      throw new Error('Invalid type parameter');
  }
}


export async function DELETE(req: NextRequest) {
  try {
    const jsonBody = await req.json();
    const session = req.headers.get('authorization');
    const { searchParams } = new URL(req.url);

    const folderId = searchParams.get('folderId');
    const webid = searchParams.get('webid');

    // Validate required parameters and headers
    if (!folderId) {
      return NextResponse.json({ error: 'Missing folderId parameter' }, { status: 400 });
    }

    if (!webid) {
      return NextResponse.json({ error: 'Missing webid parameter' }, { status: 400 });
    }

    if (!session) {
      return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });
    }

    const response = await fetch(`${process.env.Backend_URL}/folders/delete/${folderId}`, {
      method: 'DELETE',
      headers: {
        Authorization: session,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonBody),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json(
        { error: data.error || 'Failed to delete the folder' },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Error deleting folder:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}