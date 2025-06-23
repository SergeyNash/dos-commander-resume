
import React from 'react';
import { FileItem } from '../types/FileTypes';

interface FileTreeProps {
  fileStructure: FileItem;
  onFileSelect: (file: FileItem) => void;
  selectedFile: FileItem | null;
  focusedIndex: number;
  onFocusChange: (index: number) => void;
  flatFileList: FileItem[];
}

const FileTree: React.FC<FileTreeProps> = ({ 
  fileStructure, 
  onFileSelect, 
  selectedFile, 
  focusedIndex, 
  onFocusChange,
  flatFileList 
}) => {
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

  const renderFileItem = (item: FileItem, depth: number = 0, itemIndex: number): JSX.Element => {
    const isSelected = selectedFile?.name === item.name;
    const isFocused = focusedIndex === itemIndex;
    const isExpanded = expandedFolders.has(item.name);
    
    const handleClick = () => {
      onFocusChange(itemIndex);
      if (item.type === 'folder') {
        toggleFolder(item.name);
      } else {
        onFileSelect(item);
      }
    };

    return (
      <div key={item.name} className="file-tree-item">
        <div
          className={`file-item ${isSelected ? 'selected' : ''} ${isFocused ? 'focused' : ''} ${item.type}`}
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
            {item.children.map((child, childIndex) => {
              const childItemIndex = flatFileList.findIndex(flatItem => flatItem.name === child.name);
              return renderFileItem(child, depth + 1, childItemIndex);
            })}
          </div>
        )}
      </div>
    );
  };

  const rootItemIndex = flatFileList.findIndex(item => item.name === fileStructure.name);

  return (
    <div className="file-tree-panel">
      <div className="panel-header">
        <div className="panel-title">C:\RESUME</div>
        <div className="panel-info">Directory Tree</div>
      </div>
      <div className="file-tree-content">
        {renderFileItem(fileStructure, 0, rootItemIndex)}
      </div>
    </div>
  );
};

export default FileTree;
