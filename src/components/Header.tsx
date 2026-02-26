import Link from 'next/link';
import { FaHome, FaShoppingCart, FaPlus } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Notes App</Link>
        <div className="flex space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link href="/notes/create" className="flex items-center space-x-2">
            <FaPlus />
            <span>Create Note</span>
          </Link>
          <Link href="/cart" className="flex items-center space-x-2">
            <FaShoppingCart />
            <span>Cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}