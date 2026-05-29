'use client';
import { EditorTool } from '@/components/editor-tool';
import { formatCSS } from '@/lib/formatters';

export default function CssFormatter() {
  return (
    <EditorTool
      title="CSS Formatter"
      description="Format and prettify your CSS code."
      onTransform={formatCSS}
    />
  );
}
