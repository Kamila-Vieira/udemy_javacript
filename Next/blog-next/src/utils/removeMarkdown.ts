export const removeMarkdown = (html: string): string => {
  const stringFormatted = html.replace(/\w\s\W/gi, '');
  return stringFormatted;
};
