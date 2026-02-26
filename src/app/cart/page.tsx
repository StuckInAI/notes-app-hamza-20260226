"use client";

import { useState } from 'react';
import CartSummary from '@/components/CartSummary';
import { CartItem } from '@/lib/types';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { noteId: 1, title: 'Note 1', price: 10, quantity: 1 },
    { noteId: 2, title: 'Note 2', price: 20, quantity: 2 },
  ]);

  const handleCheckout = () => {
    alert('Proceeding to checkout! This is a simulation.');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <CartSummary items={cartItems} onCheckout={handleCheckout} />
    </div>
  );
}