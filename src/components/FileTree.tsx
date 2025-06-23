
import React from 'react';
import { FileItem } from '../types/FileTypes';

interface FileTreeProps {
  fileStructure: FileItem;
  onFileSelect: (file: FileItem) => void;
  selectedFile: FileItem | null;
}

const FileTree: React.FC<FileTreeProps> = ({ fileStructure, onFileSelect, selectedFile }) => {
  const [expandedFolders, setExpandedFolders] = React.useState<Set<string>>(new Set(['C:\\RESUME']));

  const toggleFolder = (folderName: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderName)) {
      newExpanded.delete(folderName);
    } else {
      newExpanded.add(folderName);
    }
    setExpandedFolders(newExpanded);
  };

  const renderFileItem = (item: FileItem, depth: number = 0): JSX.Element => {
    const isSelected = selectedFile?.name === item.name;
    const isExpanded = expandedFolders.has(item.name);
    
    const handleClick = () => {
      if (item.type === 'folder') {
        toggleFolder(item.name);
      } else {
        onFileSelect(item);
      }
    };

    return (
      <div key={item.name} className="file-tree-item">
        <div
          className={`file-item ${isSelected ? 'selected' : ''} ${item.type}`}
          style={{ paddingLeft: `${depth * 20 + 8}px` }}
          onClick={handleClick}
        >
          <span className="file-icon">
            {item.type === 'folder' ? (isExpanded ? '📂' : '📁') : '📄'}
          </span>
          <span className="file-name">{item.name}</span>
          {item.type === 'folder' && (
            <span className="folder-arrow">{isExpanded ? '▼' : '▶'}</span>
          )}
        </div>
        
        {item.type === 'folder' && isExpanded && item.children && (
          <div className="folder-children">
            {item.children.map(child => renderFileItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="file-tree-panel">
      <div className="panel-header">
        <div className="panel-title">C:\RESUME</div>
        <div className="panel-info">Directory Tree</div>
      </div>
      <div className="file-tree-content">
        {renderFileItem(fileStructure)}
      </div>
    </div>
  );
};

export default FileTree;
