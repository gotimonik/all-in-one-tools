import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function ToolCard({ title, description, icon: Icon, href }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-shadow"
    >
      <div className="mb-4">
        <Icon className="text-blue-600" size={24} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </Link>
  );
}
