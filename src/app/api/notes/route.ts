import { NextResponse } from 'next/server';
import { AppDataSource, Note } from '@/lib/database';

const initializeDataSource = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  return AppDataSource;
};

export async function GET(request: Request) {
  await initializeDataSource();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const noteRepository = AppDataSource.getRepository(Note);
  
  if (id) {
    const note = await noteRepository.findOneBy({ id: parseInt(id) });
    if (!note) return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    return NextResponse.json(note);
  } else {
    const notes = await noteRepository.find();
    return NextResponse.json(notes);
  }
}

export async function POST(request: Request) {
  await initializeDataSource();
  const body = await request.json();
  const noteRepository = AppDataSource.getRepository(Note);
  const note = noteRepository.create(body);
  await noteRepository.save(note);
  return NextResponse.json(note, { status: 201 });
}

export async function PUT(request: Request) {
  await initializeDataSource();
  const body = await request.json();
  const { id, ...updateData } = body;
  if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  
  const noteRepository = AppDataSource.getRepository(Note);
  let note = await noteRepository.findOneBy({ id });
  if (!note) return NextResponse.json({ error: 'Note not found' }, { status: 404 });
  
  noteRepository.merge(note, updateData);
  await noteRepository.save(note);
  return NextResponse.json(note);
}

export async function DELETE(request: Request) {
  await initializeDataSource();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  
  const noteRepository = AppDataSource.getRepository(Note);
  const note = await noteRepository.findOneBy({ id: parseInt(id) });
  if (!note) return NextResponse.json({ error: 'Note not found' }, { status: 404 });
  
  await noteRepository.remove(note);
  return NextResponse.json({ message: 'Note deleted' });
}