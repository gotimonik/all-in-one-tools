'use client';
import { EditorTool } from '@/components/editor-tool';
import { formatJSON } from '@/lib/formatters';

export default function JsonFormatter() {
  return (
    <EditorTool
      title="JSON Formatter"
      description="Format, validate, and beautify your JSON data."
      onTransform={formatJSON}
    />
  );
}
