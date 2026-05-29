'use client';
import { useState, useRef } from 'react';
import { Clipboard, Trash2, Upload } from 'lucide-react';

interface EditorToolProps {
  title: string;
  description: string;
  onTransform: (input: string, options: any) => string;
  showFormatOptions?: boolean;
}

export function EditorTool({ title, description, onTransform, showFormatOptions = true }: EditorToolProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [indent, setIndent] = useState('2');
  const [fileEncoding, setFileEncoding] = useState('UTF-8');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setInput(e.target?.result as string);
      reader.readAsText(file, fileEncoding.toLowerCase());
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="space-y-4">
        <label className="block font-semibold">Option 1: Copy-paste your content here</label>
        <textarea
          className="w-full h-64 p-4 border rounded-xl font-mono text-sm shadow-sm"
          placeholder="Enter input here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-end">
        <div className='space-y-2'>
          <label className="block font-semibold">Option 2: Or upload your file</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 flex items-center gap-2"
            >
              <Upload size={16} /> Choose file
            </button>
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileUpload} />
            <span className="text-sm text-gray-500">No file chosen</span>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">File encoding</label>
          <select value={fileEncoding} onChange={(e) => setFileEncoding(e.target.value)} className="w-full p-2 border rounded-lg">
            <option>UTF-8</option>
            <option>ISO-8859-1</option>
          </select>
        </div>
      </div>

      {showFormatOptions && (
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block font-semibold mb-2">Indentation level</label>
            <select value={indent} onChange={(e) => setIndent(e.target.value)} className="w-full p-2 border rounded-lg">
              <option value="1">1 space</option>
              <option value="2">2 spaces</option>
              <option value="3">3 spaces</option>
              <option value="4">4 spaces</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2">Bracket style</label>
            <select className="w-full p-2 border rounded-lg">
              <option>Collapsed (braces on same line)</option>
              <option>Expanded (braces on new line)</option>
            </select>
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <button
          className="px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold"
          onClick={() => setOutput(onTransform(input, { indent: parseInt(indent) }))}
        >
          Transform
        </button>
        <button
          className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 font-semibold"
          onClick={handleClear}
        >
          <Trash2 size={18} className="inline mr-2" /> Clear
        </button>
      </div>

      <div className="relative w-full h-96 p-4 border rounded-xl bg-gray-50 font-mono text-sm overflow-auto shadow-sm">
        <pre className="whitespace-pre-wrap">{output}</pre>
        <div className="absolute top-2 right-2 flex gap-2">
          <button onClick={handleCopy} className="p-2 bg-white rounded-lg border shadow-sm hover:bg-gray-50">
            <Clipboard size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
