import NoteCard from '@/components/NoteCard';
import { Note } from '@/lib/types';

async function getNotes(): Promise<Note[]> {
  const res = await fetch('/api/notes');
  if (!res.ok) throw new Error('Failed to fetch notes');
  return res.json();
}

export default async function HomePage() {
  const notes = await getNotes();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}