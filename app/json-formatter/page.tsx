'use client';
import { EditorTool } from '@/components/editor-tool';

export default function JsonFormatter() {
  return (
    <EditorTool
      title="JSON Formatter"
      description="Format your JSON data."
      onTransform={(input) => {
        try {
          return JSON.stringify(JSON.parse(input), null, 2);
        } catch {
          return 'Invalid JSON';
        }
      }}
    />
  );
}
