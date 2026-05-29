'use client';
import { EditorTool } from '@/components/editor-tool';
import { formatSQL } from '@/lib/formatters';

export default function SqlFormatter() {
  return (
    <EditorTool
      title="SQL Formatter"
      description="Format and prettify your SQL queries."
      onTransform={formatSQL}
    />
  );
}
