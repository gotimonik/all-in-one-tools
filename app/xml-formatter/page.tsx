'use client';
import { EditorTool } from '@/components/editor-tool';
import { formatXML } from '@/lib/formatters';

export default function XmlFormatter() {
  return (
    <EditorTool
      title="XML Formatter"
      description="Format, validate, and beautify your XML data."
      onTransform={formatXML}
    />
  );
}
