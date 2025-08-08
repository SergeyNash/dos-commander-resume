
import React from 'react';
import { FileItem } from '../types/FileTypes';

interface ContentPanelProps {
  selectedFile: FileItem | null;
}

const ContentPanel: React.FC<ContentPanelProps> = ({ selectedFile }) => {
  if (!selectedFile || !selectedFile.content) {
    return (
      <div className="content-panel">
        <div className="panel-header">
          <div className="panel-title">No File Selected</div>
          <div className="panel-info">Select a file to view content</div>
        </div>
        <div className="content-area">
          <div className="no-content">
            <pre>{`
  ┌─────────────────────────────────────────┐
  │                                         │
  │         NORTON COMMANDER v2.0           │
  │            Resume Explorer              │
  │                                         │
  │    Select a file from the left panel    │
  │         to view its contents            │
  │                                         │
  │                                         │
  │         [█] No file selected            │
  │                                         │
  └─────────────────────────────────────────┘
            `}</pre>
          </div>
        </div>
      </div>
    );
  }

  const { title, subtitle, items } = selectedFile.content;

  return (
    <div className="content-panel">
      <div className="panel-header">
        <div className="panel-title">{selectedFile.name.toUpperCase()}</div>
        <div className="panel-info">{selectedFile.type === 'file' ? 'ASCII' : 'DIR'} | {items.length} lines</div>
      </div>
      
      <div className="content-area">
        <div className="file-header">
          <div className="file-title">{title}</div>
          {subtitle && <div className="file-subtitle">{subtitle}</div>}
        </div>
        
        <div className="file-content">
          <pre>
            {items.map((line, index) => {
              const isImage = line.startsWith('IMG:');
              if (isImage) {
                const payload = line.substring(4).trim();
                const [srcRaw, altRaw] = payload.split('|');
                const src = (srcRaw || '').trim();
                const alt = ((altRaw || '').trim()) || 'Фото';
                return (
                  <div key={index} className="content-line">
                    <span className="line-number">{String(index + 1).padStart(3, '0')}:</span>
                    <img src={src} alt={alt} loading="lazy" />
                  </div>
                );
              }
              return (
                <div key={index} className="content-line">
                  <span className="line-number">{String(index + 1).padStart(3, '0')}:</span>
                  <span className="line-text">{line}</span>
                </div>
              );
            })}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ContentPanel;
