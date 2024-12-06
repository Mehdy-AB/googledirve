import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const session = req.headers.get('authorization');
    const { searchParams } = new URL(req.url);
    const groupId = searchParams.get('groupId');

    if (!session) {
      return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });
    }

    if (!groupId) 
      return NextResponse.json({ error: 'groupid is missing' }, { status: 401 });

    const response = await fetch(process.env.Backend_URL+`/groups/${groupId}/members`, {
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
    const { searchParams } = new URL(req.url);
    const groupId = searchParams.get('groupId');
    const userId = searchParams.get('userId');
    const session = req.headers.get('authorization');

    if (!groupId || !userId || !session) 
      return NextResponse.json({ error: 'groupid is missing' }, { status: 401 });

    const response = await fetch(process.env.Backend_URL+`/groups/${groupId}/users/${userId}/save`, {
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
    const userId = searchParams.get('userId');
    // Validate required parameters and headers
    if (!groupId || !userId) {
      return NextResponse.json({ error: 'Missing parameter' }, { status: 400 });
    }

    if (!session) {
      return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });
    }

    const response = await fetch(`${process.env.Backend_URL}/groups/${groupId}/users/${userId}/delete`, {
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