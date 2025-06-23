
import React, { useState, useEffect, useCallback } from 'react';
import FileTree from '../components/FileTree';
import ContentPanel from '../components/ContentPanel';
import { FileItem } from '../types/FileTypes';

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [flatFileList, setFlatFileList] = useState<FileItem[]>([]);

  // Структура файлового дерева
  const fileStructure: FileItem = {
    name: 'C:\\RESUME',
    type: 'folder',
    isExpanded: true,
    children: [
      {
        name: 'readme.txt',
        type: 'file',
        content: {
          title: 'README.TXT',
          subtitle: 'Системная информация',
          items: [
            'Добро пожаловать в файловую систему резюме',
            'Используйте левую панель для навигации',
            'Выберите файл для просмотра содержимого',
            '',
            'Сергей Синяков - Product Owner',
            'Опыт: 5+ лет в IT',
            'Команды: 7-12 человек под управлением',
            '',
            'Навигация:',
            '  /experience/ - Опыт работы',
            '  skills.txt   - Навыки и компетенции',
            '  achievements.txt - Достижения',
            '  /contacts/   - Контактная информация'
          ]
        }
      },
      {
        name: 'experience',
        type: 'folder',
        isExpanded: false,
        children: [
          {
            name: 'positive.log',
            type: 'file',
            content: {
              title: 'POSITIVE TECHNOLOGIES',
              subtitle: 'Product Owner (2023 - настоящее время)',
              items: [
                '┌─ Управление продуктом ─┐',
                '│ • Руководство 5+ командами (7-12 человек)        │',
                '│ • Стратегическое планирование продукта           │',
                '│ • Приоритизация backlog и roadmap                │',
                '│                                                  │',
                '├─ Методологии ─┤',
                '│ • Agile/Scrum процессы                          │',
                '│ • SAFe framework                                │',
                '│ • Lean Startup подходы                          │',
                '│                                                  │',
                '├─ Архитектурные решения ─┤',
                '│ • Secure by Design принципы                     │',
                '│ • Построение дерева метрик                      │',
                '│ • API-first подход                              │',
                '│                                                  │',
                '└─ Результаты ─┘',
                '  ✓ Запуск 3 новых продуктов',
                '  ✓ Рост MAU на 150%',
                '  ✓ Сокращение Time to Market на 40%'
              ]
            }
          },
          {
            name: 'ingosstrah.log',
            type: 'file',
            content: {
              title: 'ИНГОССТРАХ',
              subtitle: 'Senior Product Manager (2021-2023)',
              items: [
                '┌─ Цифровая трансформация ─┐',
                '│ • Переход на digital-first подход                │',
                '│ • Омниканальная стратегия                        │',
                '│ • Customer Journey Mapping                       │',
                '│                                                  │',
                '├─ Управление командой ─┤',
                '│ • 15+ разработчиков                             │',
                '│ • Cross-functional teams                        │',
                '│ • Agile transformation                          │',
                '│                                                  │',
                '├─ Продуктовые инициативы ─┤',
                '│ • Мобильное приложение (iOS/Android)            │',
                '│ • CRM система                                   │',
                '│ • Автоматизация андеррайтинга                   │',
                '│                                                  │',
                '└─ Достижения ─┘',
                '  ✓ NPS вырос с 6 до 47',
                '  ✓ Конверсия увеличилась на 85%',
                '  ✓ Снижение операционных расходов на 25%'
              ]
            }
          },
          {
            name: 'antraks.log',
            type: 'file',
            content: {
              title: 'АНТРАКС ГРУПП',
              subtitle: 'Product Manager (2019-2021)',
              items: [
                '┌─ Стартап среда ─┐',
                '│ • От идеи до MVP за 6 месяцев                    │',
                '│ • Lean методология                              │',
                '│ • Customer Development                          │',
                '│                                                  │',
                '├─ Построение продукта ─┤',
                '│ • Валидация гипотез                             │',
                '│ • A/B тестирование                              │',
                '│ • Метрики качества                              │',
                '│                                                  │',
                '├─ Технические навыки ─┤',
                '│ • SQL, Python basics                           │',
                '│ • Analytics (GA, Mixpanel)                     │',
                '│ • Wireframing & Prototyping                    │',
                '│                                                  │',
                '└─ Результаты ─┘',
                '  ✓ Привлечение $2M инвестиций',
                '  ✓ 50K+ активных пользователей',
                '  ✓ LTV/CAC ratio = 4.2'
              ]
            }
          }
        ]
      },
      {
        name: 'skills.txt',
        type: 'file',
        content: {
          title: 'SKILLS.TXT',
          subtitle: 'Навыки и компетенции',
          items: [
            '╔══════════════════════════════════════════════╗',
            '║               ПРОДУКТОВЫЕ НАВЫКИ             ║',
            '╠══════════════════════════════════════════════╣',
            '║ [████████████████████████] Roadmapping   95% ║',
            '║ [██████████████████████  ] Prioritization 90% ║',
            '║ [███████████████████████ ] User Research  92% ║',
            '║ [████████████████████   ] A/B Testing    85% ║',
            '║                                              ║',
            '║               МЕТОДОЛОГИИ                    ║',
            '║ [█████████████████████  ] Agile/Scrum     88% ║',
            '║ [██████████████████     ] SAFe Framework  75% ║',
            '║ [████████████████████   ] Lean Startup    83% ║',
            '║ [███████████████████    ] Design Thinking 80% ║',
            '║                                              ║',
            '║               АНАЛИТИКА                      ║',
            '║ [████████████████████   ] SQL             85% ║',
            '║ [██████████████████████ ] Excel/Sheets     93% ║',
            '║ [███████████████████    ] Python Basics   78% ║',
            '║ [████████████████████   ] GA/Mixpanel     87% ║',
            '║                                              ║',
            '║               SOFT SKILLS                    ║',
            '║ [█████████████████████  ] Лидерство       91% ║',
            '║ [████████████████████   ] Коммуникация    89% ║',
            '║ [███████████████████████] Презентации     96% ║',
            '║ [██████████████████████ ] Problem Solving 94% ║',
            '╚══════════════════════════════════════════════╝'
          ]
        }
      },
      {
        name: 'achievements.txt',
        type: 'file',
        content: {
          title: 'ACHIEVEMENTS.TXT',
          subtitle: 'Достижения и награды',
          items: [
            '┌─ ТИТУЛЫ И ЗВАНИЯ ─┐',
            '│                                                  │',
            '│  🏆 ПОВЕЛИТЕЛЬ MVP                              │',
            '│     Запустил 8+ MVP продуктов                   │',
            '│     Время от идеи до релиза: 2-6 недель         │',
            '│                                                  │',
            '│  ⚡ СПАСИТЕЛЬ ДЕДЛАЙНОВ                         │',
            '│     0 сорванных релизов за 3 года               │',
            '│     Средняя точность планирования: 94%          │',
            '│                                                  │',
            '│  📊 МАГ МЕТРИК                                  │',
            '│     Построил системы метрик в 4 компаниях       │',
            '│     Внедрил data-driven культуру               │',
            '│                                                  │',
            '│  👨‍💼 ЛИДЕР КОМАНД                              │',
            '│     Управлял командами до 15 человек            │',
            '│     Employee satisfaction: 4.8/5.0              │',
            '│                                                  │',
            '├─ КЛЮЧЕВЫЕ ДОСТИЖЕНИЯ ─┤',
            '│                                                  │',
            '│  • Рост выручки на $5M+ (суммарно)             │',
            '│  • Привлечение $2M инвестиций                   │',
            '│  • 150K+ довольных пользователей                │',
            '│  • 25+ запущенных фич                          │',
            '│  • 3 награды "Лучший продукт года"             │',
            '│                                                  │',
            '├─ СЕРТИФИКАЦИИ ─┤',
            '│                                                  │',
            '│  ✓ Certified Scrum Product Owner (CSPO)        │',
            '│  ✓ SAFe Product Owner/Product Manager           │',
            '│  ✓ Google Analytics Individual Qualification    │',
            '│  ✓ Lean Six Sigma Green Belt                   │',
            '│                                                  │',
            '└─ СТАТИСТИКА ─┘',
            '    Проектов завершено: 47',
            '    Команд под управлением: 12',
            '    Стран работы: 3 (RU, BY, KZ)',
            '    Языки: русский, английский (B2)'
          ]
        }
      },
      {
        name: 'contacts',
        type: 'folder',
        isExpanded: false,
        children: [
          {
            name: 'email.vcf',
            type: 'file',
            content: {
              title: 'CONTACT.VCF',
              subtitle: 'Контактная информация',
              items: [
                'BEGIN:VCARD',
                'VERSION:3.0',
                'FN:Сергей Синяков',
                'TITLE:Product Owner / Product Manager',
                'ORG:Positive Technologies',
                '',
                '┌─ ОСНОВНЫЕ КОНТАКТЫ ─┐',
                '│                                                  │',
                '│  📧 Email: sergey@pm-hero.com                   │',
                '│  📱 Telegram: @sergey_sinyakov                  │',
                '│  💼 LinkedIn: linkedin.com/in/sergey-sinyakov   │',
                '│  🐙 GitHub: github.com/sergey-pm                │',
                '│                                                  │',
                '├─ СОЦИАЛЬНЫЕ СЕТИ ─┤',
                '│                                                  │',
                '│  🐦 Twitter: @pm_sergey                         │',
                '│  📚 Habr: habr.com/users/sergey_pm              │',
                '│  🎥 YouTube: PM School by Sergey                │',
                '│                                                  │',
                '├─ ЛОКАЦИЯ ─┤',
                '│                                                  │',
                '│  🌍 Москва, Россия                             │',
                '│  🕐 GMT+3 (Moscow Time)                         │',
                '│  ✈️  Готов к релокации                          │',
                '│                                                  │',
                '├─ ПРЕДПОЧТЕНИЯ ─┤',
                '│                                                  │',
                '│  📞 Лучшее время для звонка: 10:00-18:00        │',
                '│  💬 Предпочитаю: Telegram, Email               │',
                '│  🎯 Интересы: Product, Startups, AI/ML          │',
                '│                                                  │',
                '└─ AVAILABILITY ─┘',
                '    Status: Open to opportunities',
                '    Response time: < 24 hours',
                '    Languages: RU (native), EN (B2)',
                '',
                'END:VCARD'
              ]
            }
          }
        ]
      }
    ]
  };

  // Создаём плоский список всех файлов для навигации
  const createFlatFileList = useCallback((item: FileItem, list: FileItem[] = []): FileItem[] => {
    list.push(item);
    if (item.children) {
      item.children.forEach(child => createFlatFileList(child, list));
    }
    return list;
  }, []);

  useEffect(() => {
    const flatList = createFlatFileList(fileStructure);
    setFlatFileList(flatList);
    
    // Устанавливаем readme.txt как файл по умолчанию
    const readmeFile = fileStructure.children?.find(item => item.name === 'readme.txt');
    if (readmeFile) {
      setSelectedFile(readmeFile);
      const readmeIndex = flatList.findIndex(item => item.name === 'readme.txt');
      setFocusedIndex(readmeIndex);
    }
  }, [fileStructure, createFlatFileList]);

  // Обработка навигации с клавиатуры
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log('Key pressed:', event.key, 'Current focus:', focusedIndex, 'File list length:', flatFileList.length);
      
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex(prev => {
            const newIndex = Math.max(0, prev - 1);
            console.log('Moving up from', prev, 'to', newIndex);
            return newIndex;
          });
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex(prev => {
            const newIndex = Math.min(flatFileList.length - 1, prev + 1);
            console.log('Moving down from', prev, 'to', newIndex);
            return newIndex;
          });
          break;
        case 'Enter':
          event.preventDefault();
          const focusedFile = flatFileList[focusedIndex];
          console.log('Enter pressed on:', focusedFile);
          if (focusedFile && focusedFile.type === 'file') {
            setSelectedFile(focusedFile);
          }
          break;
        case 'Escape':
          event.preventDefault();
          // Сброс фокуса на корневую папку
          setFocusedIndex(0);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flatFileList, focusedIndex]);

  return (
    <div className="dos-interface">
      <div className="dos-header">
        <div className="dos-title">Norton Commander v2.0 - Resume Explorer</div>
        <div className="dos-time">{new Date().toLocaleString()}</div>
      </div>
      
      <div className="dos-panels">
        <FileTree 
          fileStructure={fileStructure} 
          onFileSelect={setSelectedFile}
          selectedFile={selectedFile}
          focusedIndex={focusedIndex}
          onFocusChange={setFocusedIndex}
          flatFileList={flatFileList}
        />
        <ContentPanel selectedFile={selectedFile} />
      </div>
      
      <div className="dos-footer">
        <div className="dos-hotkeys">
          F1-Help F2-Rename F3-View F4-Edit F5-Copy F6-Move F7-MkDir F8-Delete F9-Menu F10-Quit | ↑↓-Navigate Enter-Select Esc-Reset
        </div>
      </div>
    </div>
  );
};

export default Index;
