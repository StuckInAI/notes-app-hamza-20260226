import { Note } from '@/lib/types';
import Link from 'next/link';

async function getNote(id: string): Promise<Note> {
  const res = await fetch(`/api/notes?id=${id}`);
  if (!res.ok) throw new Error('Note not found');
  return res.json();
}

export default async function NoteDetailPage({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{note.title}</h1>
      <p className="mt-4 text-gray-700">{note.content}</p>
      <p className="text-blue-500 font-bold text-2xl mt-4">${note.price}</p>
      <div className="mt-6 flex space-x-4">
        <Link href={`/notes/${note.id}/edit`} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</Link>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  );
}