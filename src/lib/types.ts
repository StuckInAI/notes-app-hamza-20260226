export interface Note {
  id: number;
  title: string;
  content: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  noteId: number;
  title: string;
  price: number;
  quantity: number;
}