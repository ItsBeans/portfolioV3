"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full py-4 px-8 flex justify-end space-x-8 font-bold text-sm">
      <Link
        href="/"
        className={`hover:text-black ${
          pathname === '/' ? 'text-black' : 'text-gray-400'
        }`}
      >
        welcome
      </Link>
      <Link
        href="/projects"
        className={`hover:text-black ${
          pathname === '/projects' ? 'text-black' : 'text-gray-400'
        }`}
      >
        projects 
      </Link>
      <Link
        href="/reading-list"
        className={`hover:text-black ${
          pathname === '/reading-list' ? 'text-black' : 'text-gray-400'
        }`}
      >
        books 
      </Link>
      <Link
        href="/food"
        className={`hover:text-black ${
          pathname === '/food' ? 'text-black' : 'text-gray-400'
        }`}
      >
        food 
      </Link>
    </header>
  );
}

