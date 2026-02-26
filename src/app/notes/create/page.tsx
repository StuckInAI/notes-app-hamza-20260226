"use client";

import NoteForm from '@/components/NoteForm';
import { useRouter } from 'next/navigation';

export default function CreateNotePage() {
  const router = useRouter();

  const handleSubmit = async (data: { title: string; content: string; price: number }) => {
    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      router.push('/');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create New Note</h1>
      <NoteForm onSubmit={handleSubmit} />
    </div>
  );
}