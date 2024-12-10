import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {


  try {
    const session = req.headers.get('authorization');
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type'); // e.g., 'all', 'folder', 'workspaces'
    const folderId = searchParams.get('folderId'); // Required for type 'folder'
  
    if (!session) {
      return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });
    }
  
    let endpoint: string;
  
    switch (type) {
      case 'all':
        endpoint = `${process.env.Backend_URL}/folders`;
        break;
  
      case 'folder':
        if (!folderId) {
          return NextResponse.json({ error: 'folderId is required for type folder' }, { status: 400 });
        }
        endpoint = `${process.env.Backend_URL}/folders/${folderId}`;
        break;
  
      case 'workspaces':
        endpoint = `${process.env.Backend_URL}/folders/workspaces`;
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
      return NextResponse.json({ error: res.message || 'Failed to fetch data' }, { status: response.status });
    }

    return NextResponse.json(res);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function Post(req: NextRequest) {
    const jsonBody = await req.json();
    const { searchParams } = new URL(req.url);
    const data = JSON.stringify(jsonBody.data); 
    const type = searchParams.get('type');
    const folderId = searchParams.get('folderId');
    const ruleId = searchParams.get('ruleId');
    const metadata = searchParams.get('metadata');
    const session = req.headers.get('authorization');
  try {
    
    if(!session)
      return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });

    if(!data)
      return NextResponse.json({ error: 'data in body is missing' }, { status: 400 });

    if(type ==='upload'){
      const queryParams = new URLSearchParams({
        folderId,
        ruleId,
        metadata,
      });
      const response = await fetch(process.env.Backend_URL+`/documents/upload?${queryParams.toString()}`, {
        method: 'Post',
        headers: {
          'Authorization': session,
        },
        body: data,
      });
     const res =(await response.json())
      if(res.error)
        return NextResponse.json({ error: res.message }, { status: 500 });
      return NextResponse.json(res);

    }else if(type === 'favorite'){

    }else{
      return NextResponse.json({ error: 'Invalid or missing type parameter' }, { status: 400 });
    }
    
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to create folders!' }, { status: 500 });
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

    if (!type || !['rename', 'replace'].includes(type)) {
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

    if (res.error) {
      return NextResponse.json({ error: res.message }, { status: 400 });
    }

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
      return `${baseURL}/folders/rename`;
    case 'replace':
      return `${baseURL}/folders/move`;
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