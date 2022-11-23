export const getParsedFileName = (
  fileName: string,
  componentName: string,
  extension: string): string => {
  const parts = fileName.split(".");
  if (parts[0] == 'index') return 'index.tsx';
  if (parts.length == 2) return `${componentName}${extension}`
  return `${componentName}.${parts[1]}${extension}`;
}