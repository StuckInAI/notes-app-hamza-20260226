import { Note } from '@/lib/types';
import Link from 'next/link';

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-2">
      <h2 className="text-xl font-semibold">{note.title}</h2>
      <p className="text-gray-600 truncate">{note.content}</p>
      <p className="text-blue-500 font-bold">${note.price}</p>
      <div className="mt-4 flex space-x-2">
        <Link href={`/notes/${note.id}`} className="bg-blue-500 text-white px-4 py-2 rounded">View</Link>
        <Link href={`/notes/${note.id}/edit`} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</Link>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  );
}