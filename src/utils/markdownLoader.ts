
export const loadMarkdownFile = async (filePath: string): Promise<string[]> => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}`);
    }
    const text = await response.text();
    return parseMarkdownToLines(text);
  } catch (error) {
    console.error('Error loading markdown file:', error);
    return ['Ошибка загрузки файла'];
  }
};

const parseMarkdownToLines = (markdown: string): string[] => {
  const lines = markdown.split('\n');
  const result: string[] = [];
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    if (!trimmedLine) {
      result.push('');
      continue;
    }
    
    // Заголовок компании (H1)
    if (trimmedLine.startsWith('# ')) {
      result.push(`📍 ${trimmedLine.substring(2)}`);
      continue;
    }
    
    // Должность и период (H2)
    if (trimmedLine.startsWith('## ')) {
      result.push(`👤 ${trimmedLine.substring(3)}`);
      result.push('');
      continue;
    }
    
    // Секция (H3)
    if (trimmedLine.startsWith('### ')) {
      result.push(`▶ ${trimmedLine.substring(4)}:`);
      continue;
    }
    
    // Пункт списка
    if (trimmedLine.startsWith('- ')) {
      result.push(`  • ${trimmedLine.substring(2)}`);
      continue;
    }
    
    // Обычный текст
    result.push(trimmedLine);
  }
  
  return result;
};
