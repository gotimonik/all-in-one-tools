'use client';
import { EditorTool } from '@/components/editor-tool';
import { formatHTML } from '@/lib/formatters';

export default function HtmlFormatter() {
  return (
    <EditorTool
      title="HTML Formatter"
      description="Format and prettify your HTML code."
      onTransform={formatHTML}
    />
  );
}
