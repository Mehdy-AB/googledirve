import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const session = req.headers.get('authorization');
    const response = await fetch(process.env.Backend_URL+`/folders`, {
      method: 'GET',
      headers: {
        'Authorization': session,
      },
    });
   const res =(await response.json())

    if(res.error)
      return NextResponse.json({ error: res.message }, { status: 500 });
    return NextResponse.json(res);
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to get folders!' }, { status: 500 });
  }
}

export async function Post(req: NextRequest) {
    // Parse JSON body
    const jsonBody = await req.json();
    // Extract data from JSON
    const data = JSON.stringify(jsonBody.data); // Ensure data is stringified
  try {
    const session = req.headers.get('authorization');
    const response = await fetch(process.env.Backend_URL+`/folders/save`, {
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
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to create folders!' }, { status: 500 });
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
  