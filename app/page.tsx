import { ToolCard } from '@/components/tool-card';
import { FileJson, Hash } from 'lucide-react';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ToolCard
          title="JSON Formatter"
          description="Format, validate, and beautify your JSON data."
          icon={FileJson}
          href="/json-formatter"
        />
        <ToolCard
          title="Base64 Encoder/Decoder"
          description="Easily encode and decode Base64 strings."
          icon={Hash}
          href="/base64"
        />
      </div>
    </div>
  );
}
