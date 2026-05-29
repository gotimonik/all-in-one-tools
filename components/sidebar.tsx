'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileJson, FileCode, Hash, Type } from 'lucide-react';
import { cn } from '@/lib/utils';

const tools = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'JSON Formatter', href: '/json-formatter', icon: FileJson },
  { name: 'Base64 Encoder/Decoder', href: '/base64', icon: Hash },
  { name: 'Text Diff Checker', href: '/diff', icon: Type },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="w-64 border-r bg-white h-screen p-4">
      <h1 className="text-xl font-bold mb-6">DevToolkit</h1>
      <div className="space-y-2">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors",
              pathname === tool.href
                ? "bg-gray-100 font-medium"
                : "text-gray-600 hover:bg-gray-50"
            )}
          >
            <tool.icon size={18} />
            {tool.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
