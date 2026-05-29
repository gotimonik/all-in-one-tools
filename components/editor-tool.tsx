'use client';
import { useState } from 'react';

interface EditorToolProps {
  title: string;
  description: string;
  onTransform: (input: string) => string;
}

export function EditorTool({ title, description, onTransform }: EditorToolProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea
          className="w-full h-96 p-4 border rounded-lg font-mono text-sm"
          placeholder="Enter input here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="w-full h-96 p-4 border rounded-lg bg-gray-50 font-mono text-sm overflow-auto">
          {output}
        </div>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={() => setOutput(onTransform(input))}
      >
        Transform
      </button>
    </div>
  );
}
