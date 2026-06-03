export interface TOCItem {
  id: string;
  text: string;
  level: number;
}
export function generateTOCFromHTML(html: string) {
  const headingRegex = /<h2([^>]*)>(.*?)<\/h2>/gi;

  const headings: { id: string; text: string; level: number }[] = [];
  let index = 0;

  const modifiedHTML = html.replace(headingRegex, (match, attrs, text) => {
    const cleanText = text.replace(/<[^>]*>/g, "").trim();

    const id = `toc-${index++}`;

    headings.push({
      id,
      text: cleanText,
      level: 2,
    });

    return `<h2${attrs} id="${id}">${text}</h2>`;
  });

  return { html: modifiedHTML, headings };
}