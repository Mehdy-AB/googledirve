import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const session = req.headers.get('authorization');
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type'); 
    const userId = searchParams.get('userId');
    const username = searchParams.get('username'); 

    if (!session) {
      return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });
    }
  
    let endpoint: string;
  
    switch (type) {
      case 'all':
        endpoint = `${process.env.Backend_URL}/users`;
        break;
  
      case 'user':
        if (!userId) {
          return NextResponse.json({ error: 'userId is required for type folder' }, { status: 400 });
        }
        endpoint = `${process.env.Backend_URL}/users/${userId}`;
        break;
  
      case 'search':
        if (!username) {
          return NextResponse.json({ error: 'username is required for type folder' }, { status: 400 });
        }
        endpoint = `${process.env.Backend_URL}/users/search/${username}`;
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
// Parse JSON body
const jsonBody = await req.json();
// Extract data from JSON
const data = JSON.stringify(jsonBody.data); // Ensure data is stringified
const session = req.headers.get('authorization');
console.log(data,session);
  try {
    
    const response = await fetch(process.env.Backend_URL+`/users/save`, {
      method: 'POST',
      headers: {
        'Authorization': session,
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
    const userId = searchParams.get('userId');


    if (!session) 
      return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });
    if (!userId) 
      return NextResponse.json({ error: 'userid is missing' }, { status: 401 });

    const response = await fetch(process.env.Backend_URL+`/users/update/${userId}`, {
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

export async function DELETE(req: NextRequest) {
  try {
    const jsonBody = await req.json();
    const session = req.headers.get('authorization');
    const { searchParams } = new URL(req.url);

    const userId = searchParams.get('userId');

    // Validate required parameters and headers
    if (!userId) {
      return NextResponse.json({ error: 'Missing userId parameter' }, { status: 400 });
    }

    if (!session) {
      return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });
    }

    const response = await fetch(`${process.env.Backend_URL}/users/delete/${userId}`, {
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
        { error: data.error || 'Failed to delete the user' },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}