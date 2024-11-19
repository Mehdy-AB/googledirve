import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const files = formData.getAll('files');
    console.log("gg",files)
    try {
        // Save files to public/uploads
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        await fs.mkdir(uploadDir, { recursive: true });
    
        const fileSavePromises = files.map(async (file: any) => {
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          const filePath = path.join(uploadDir, `${Date.now()}_${file.name}`);
    
          await fs.writeFile(filePath, buffer);
          return `/uploads/${Date.now()}_${file.name}`;
        });
    
        const urls = await Promise.all(fileSavePromises);

        return NextResponse.json({ urls });
      } catch (error) {
        console.error('File upload error:', error);
        return NextResponse.json({ error: 'Failed to upload files!' }, { status: 500 });
      }
  
  }