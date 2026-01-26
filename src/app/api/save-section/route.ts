import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { bookName, sectionId, content, title } = await request.json();

    if (!bookName || !sectionId || content === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Construct the file path
    const filePath = path.join(process.cwd(), 'nyayarepo', 'json_data', `${bookName}.json`);

    // Read the existing JSON file
    const fileContent = await readFile(filePath, 'utf-8');
    const bookData = JSON.parse(fileContent);

    // Find and update the section
    const sectionIndex = bookData.findIndex((section: any) => section.sectionId === sectionId);
    
    if (sectionIndex === -1) {
      return NextResponse.json(
        { error: 'Section not found' },
        { status: 404 }
      );
    }

    // Update the section
    bookData[sectionIndex].content = content;
    if (title !== undefined) {
      bookData[sectionIndex].title = title;
    }

    // Write back to file
    await writeFile(filePath, JSON.stringify(bookData, null, 2), 'utf-8');

    return NextResponse.json({ success: true, message: 'Section updated successfully' });
  } catch (error) {
    console.error('Error saving section:', error);
    return NextResponse.json(
      { error: 'Failed to save section', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
