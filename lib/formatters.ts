export const formatJSON = (input: string, options: any): string => {
  try {
    return JSON.stringify(JSON.parse(input), null, options?.indent || 2);
  } catch {
    return 'Invalid JSON';
  }
};

export const formatXML = (input: string, options: any): string => {
  const indentSize = options?.indent || 2;
  const tab = ' '.repeat(indentSize);
  let formatted = '';
  let indent = 0;
  input.split(/>\s*</).forEach((node) => {
    if (node.match(/^\/\w/)) indent--;
    formatted += tab.repeat(indent) + '<' + node + '>\n';
    if (node.match(/^<?\w[^>]*[^\/]$/)) indent++;
  });
  return formatted.trim();
};

export const formatHTML = (input: string, options: any): string => {
  const indentSize = options?.indent || 2;
  const tab = ' '.repeat(indentSize);
  let formatted = '';
  let indent = 0;
  
  // Basic split to process tags
  input.replace(/>\s*</g, '>\n<').split('\n').forEach((line) => {
    line = line.trim();
    if (!line) return;
    
    if (line.match(/^<\/\w/)) indent--;
    formatted += tab.repeat(Math.max(0, indent)) + line + '\n';
    if (line.match(/^<\w[^>]*[^\/]>$/) && !line.match(/<\/\w/)) indent++;
  });
  return formatted.trim();
};

export const formatSQL = (input: string, options: any): string => {
  return input
    .replace(/\s+/g, ' ')
    .replace(/(SELECT|FROM|WHERE|AND|OR|JOIN|LEFT|RIGHT|INNER|OUTER|GROUP BY|ORDER BY|UPDATE|SET|DELETE)/gi, '\n$1')
    .split('\n')
    .map(line => line.trim())
    .join('\n')
    .trim();
};

export const formatCSS = (input: string, options: any): string => {
  const tab = ' '.repeat(options?.indent || 2);
  let formatted = input
    .replace(/\s*([\{\}:;])\s*/g, '$1')
    .replace(/([\{\}])/g, '\n$1\n')
    .replace(/;/g, ';\n');

  let indent = 0;
  return formatted.split('\n').map(line => {
    line = line.trim();
    if (!line) return '';
    if (line.includes('}')) indent--;
    const result = tab.repeat(Math.max(0, indent)) + line;
    if (line.includes('{')) indent++;
    return result;
  }).filter(line => line !== '').join('\n');
};
