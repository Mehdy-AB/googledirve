import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const session = req.headers.get('authorization');
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type'); 
    const groupId = searchParams.get('groupId');

    if (!session) {
      return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });
    }
  
    let endpoint: string;
  
    switch (type) {
      case 'all':
        endpoint = `${process.env.Backend_URL}/groups`;
        break;
  
      case 'group':
        if (!groupId) {
          return NextResponse.json({ error: 'groupid is required for type group' }, { status: 400 });
        }
        endpoint = `${process.env.Backend_URL}/groups/${groupId}`;
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

export async function POST(req: NextRequest) {
  try {
    // Parse JSON body
    const jsonBody = await req.json();
    // Extract data from JSON
    const data = JSON.stringify(jsonBody.data); // Ensure data is stringified
    const session = req.headers.get('authorization');
    const response = await fetch(process.env.Backend_URL+`/groups/save`, {
      method: 'POST',
      headers: {
        'Authorization': session,
        'Content-Type': 'application/json',
      },
      body: data,
    });
    
   const res = await response.json();

    if(res.error)
      return NextResponse.json({ error: res.message }, { status: 500 });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to create user!' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const jsonBody = await req.json();
    const data = JSON.stringify(jsonBody.data);
    const session = req.headers.get('authorization');
    const groupId = searchParams.get('groupId');


    if (!session) 
      return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });
    if (!groupId) 
      return NextResponse.json({ error: 'groupid is missing' }, { status: 401 });

    const response = await fetch(process.env.Backend_URL+`/groups/update/${groupId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': session,
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

export async function DELETE(req: NextRequest) {
  try {
    const session = req.headers.get('authorization');
    const { searchParams } = new URL(req.url);

    const groupId = searchParams.get('groupId');

    // Validate required parameters and headers
    if (!groupId) {
      return NextResponse.json({ error: 'Missing groupId parameter' }, { status: 400 });
    }

    if (!session) {
      return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });
    }

    const response = await fetch(`${process.env.Backend_URL}/groups/delete/${groupId}`, {
      method: 'DELETE',
      headers: {
        Authorization: session,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json(
        { error: data.error || 'Failed to delete the group' },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Error deleting group:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}