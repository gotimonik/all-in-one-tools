'use client';
import { EditorTool } from '@/components/editor-tool';

export default function Base64Encoder() {
  return (
    <EditorTool
      title="Base64 Encoder"
      description="Encode string to Base64."
      onTransform={(input) => {
        try {
          return btoa(input);
        } catch {
          return 'Error encoding';
        }
      }}
    />
  );
}
