import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Parse JSON body
    const jsonBody = await req.json();

    // Extract data from JSON
    const data = JSON.stringify(jsonBody.data); // Ensure data is stringified
    const session = req.headers.get('authorization');
    const webid = req.nextUrl.searchParams.get('webid');
    const deviceHeader = req.headers.get('device');
    

    const response = await fetch(process.env.Backend_URL+`/admin/products/add-prodacts/${webid}`, {
      method: 'POST',
      headers: {
        'Authorization': session,
        'device': deviceHeader, // Use the device header passed from the client
        'Content-Type': 'application/json', // Specify content type
      },
      body: data, // Send stringified JSON data
    });
   const res =(await response.json())

    if(res.error)
      return NextResponse.json({ error: res.message }, { status: 500 });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product!' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    // Parse JSON body
    const jsonBody = await req.json();

    // Extract data from JSON
    const data = JSON.stringify(jsonBody.data); // Ensure data is stringified
    const session = req.headers.get('authorization');
    const webid = req.nextUrl.searchParams.get('webid');
    const productId = req.nextUrl.searchParams.get('productId');
    const deviceHeader = req.headers.get('device');
    

    const response = await fetch(process.env.Backend_URL+`/admin/products/update-prodact/${webid}/${productId}`, {
      method: 'PUT',
      headers: {
        'Authorization': session,
        'device': deviceHeader, // Use the device header passed from the client
        'Content-Type': 'application/json', // Specify content type
      },
      body: data, // Send stringified JSON data
    });
   const res =(await response.json())

    if(res.error){console.log(res.message)
      return NextResponse.json({ error: res.message }, { status: 400 });}
    return NextResponse.json(res);
  } catch (error) {
    
    return NextResponse.json({ error: 'Failed to update product!' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  
  try {
    const session = req.headers.get('authorization');
    const webid = req.nextUrl.searchParams.get('webid');
    const deviceHeader = req.headers.get('device');

    const row = req.nextUrl.searchParams.get('row');
    const upDown = req.nextUrl.searchParams.get('upDown');
    const dateFilter = req.nextUrl.searchParams.get('sort');
    const outStock = req.nextUrl.searchParams.get('outStock');
    const title = req.nextUrl.searchParams.get('title');
    const category = req.nextUrl.searchParams.get('category');


    if (!webid || !session || !deviceHeader) {
      throw new Error('Missing required headers or parameters');
    }
    const params = new URLSearchParams();
    params.append('row', row);
    params.append('upDown', upDown);
    params.append('dateFilter', dateFilter);
    params.append('outStock', outStock);
    if (title) params.append('title', title);
    if (category) params.append('category', category);

    const response = await fetch(
      `${process.env.Backend_URL}/admin/products/getProducts/${webid}?${params.toString()}`,
      {
        method: 'GET',
        headers: {
          'Authorization': session, // Ensure the session is not null
          'device': deviceHeader,   // Ensure the deviceHeader is not null
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    if(data.error)
      return NextResponse.json({ error: 'Failed to get products!' }, { status: 400 });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get products!' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const jsonBody = await req.json();
  const session = req.headers.get('authorization');
  const dataJSON = JSON.stringify(jsonBody);
  const deviceHeader = req.headers.get('device');
  try {

    const webid = req.nextUrl.searchParams.get('webid');
    
    
    if (!webid || !session || !deviceHeader) {
      throw new Error('Missing required headers or parameters');
    }

    const response = await fetch(
      `${process.env.Backend_URL}/admin/products/delete-prodact/${webid}`,
      {
        method: 'DELETE',
        headers: {
          'Authorization': session, // Ensure the session is not null
          'device': deviceHeader,   // Ensure the deviceHeader is not null
          'Content-Type': 'application/json',
        },
        body:dataJSON
      }
    );
    const data = await response.json();
    if(data.error)
      return NextResponse.json({ error: 'Failed to delete products!' }, { status: 400 });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete products!' }, { status: 500 });
  }
}
