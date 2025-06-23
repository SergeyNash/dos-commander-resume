
export interface FileContent {
  title: string;
  subtitle: string;
  items: string[];
}

export interface FileItem {
  name: string;
  type: 'file' | 'folder';
  isExpanded?: boolean;
  content?: FileContent;
  children?: FileItem[];
}
