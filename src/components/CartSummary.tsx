import { CartItem } from '@/lib/types';

interface CartSummaryProps {
  items: CartItem[];
  onCheckout: () => void;
}

export default function CartSummary({ items, onCheckout }: CartSummaryProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      {items.map(item => (
        <div key={item.noteId} className="flex justify-between mb-2">
          <span>{item.title} x {item.quantity}</span>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}
      <div className="border-t pt-4">
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button onClick={onCheckout} className="w-full bg-green-500 text-white py-2 rounded mt-4">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}