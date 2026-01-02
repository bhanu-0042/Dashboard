
import React from 'react';
import { 
  PanelLeftClose, 
  PanelLeftOpen, 
  Sun, 
  Moon
} from 'lucide-react';
import { MAIN_MENU_ITEMS, FOOTER_MENU_ITEMS } from '../constants';
import { Theme } from '../types';

interface SidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
  theme: Theme;
  onThemeToggle: () => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeId, onSelect, theme, onThemeToggle, isCollapsed, onToggle }) => {
  const isDarkMode = theme === Theme.DARK;

  // Group items by section
  const sections = MAIN_MENU_ITEMS.reduce((acc, item) => {
    const section = item.section || 'MAIN NAVIGATION';
    if (!acc[section]) acc[section] = [];
    acc[section].push(item);
    return acc;
  }, {} as Record<string, typeof MAIN_MENU_ITEMS>);

  return (
    <aside className="p-4 h-screen sticky top-0 z-50 pointer-events-none">
      <div 
        className={`h-full flex flex-col transition-all duration-500 shadow-2xl overflow-hidden rounded-[2.5rem] border pointer-events-auto
          ${isCollapsed ? 'w-20' : 'w-64'}
          ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}
      >
        {/* Sidebar Header */}
        <div className={`p-6 flex flex-col ${isCollapsed ? 'items-center' : 'items-start'}`}>
          <div className={`flex items-center w-full ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
            {!isCollapsed && (
              <div className="flex flex-col animate-in fade-in slide-in-from-left-2 duration-300">
                <span className={`text-xl font-black font-display tracking-tighter leading-none ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>HAMSAA</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-black font-display text-brand-500 mt-0.5">Management</span>
              </div>
            )}

            <button 
              onClick={onToggle}
              className={`p-2.5 rounded-xl transition-all ${isDarkMode ? 'hover:bg-slate-800 text-slate-500' : 'hover:bg-gray-50 text-gray-400 hover:text-brand-600'}`}
            >
              {isCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={18} />}
            </button>
          </div>
        </div>

        {/* Navigation Items grouped by Sections */}
        <nav className="flex-1 overflow-y-auto no-scrollbar px-4 py-2">
          {Object.entries(sections).map(([sectionName, items]) => (
            <div key={sectionName} className="mb-6">
              {!isCollapsed && (
                <h3 className="px-4 mb-2 text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">
                  {sectionName}
                </h3>
              )}
              <div className="space-y-1">
                {items.map((item) => {
                  const isActive = activeId === item.id;
                  const Icon = item.icon;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSelect(item.id)}
                      className={`w-full flex items-center gap-3.5 p-3.5 rounded-2xl transition-all duration-300 group relative
                        ${isActive 
                          ? 'bg-brand-600 text-white' 
                          : isDarkMode 
                            ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                            : 'text-gray-400 hover:bg-brand-50 hover:text-brand-600'
                        } ${isCollapsed ? 'justify-center' : ''}`}
                    >
                      <Icon size={18} className={`shrink-0 ${isActive ? 'scale-110' : 'group-hover:scale-110 transition-transform'}`} />
                      {!isCollapsed && <span className="text-sm font-bold tracking-tight whitespace-nowrap">{item.label}</span>}
                      {isActive && !isCollapsed && (
                        <div className="absolute right-3 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                      )}
                      
                      {isCollapsed && (
                        <div className={`absolute left-full ml-4 px-3 py-1.5 bg-brand-950 text-white text-[10px] font-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap shadow-xl border border-white/10 uppercase tracking-widest`}>
                          {item.label}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer with Theme Toggle */}
        <div className="px-4 py-6 border-t border-gray-50 space-y-1.5">
          {FOOTER_MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`w-full flex items-center gap-3.5 p-3.5 rounded-2xl transition-all group
                   ${isDarkMode ? 'text-slate-500 hover:text-white' : 'text-gray-400 hover:text-brand-600 hover:bg-brand-50'} ${isCollapsed ? 'justify-center' : ''}`}
              >
                <Icon size={18} className="shrink-0" />
                {!isCollapsed && <span className="text-sm font-bold tracking-tight">{item.label}</span>}
              </button>
            );
          })}

          {/* Fixed: Completed missing JSX and added theme toggle buttons */}
          <div className={`mt-4 p-1.5 rounded-2xl flex items-center ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'} ${isCollapsed ? 'flex-col gap-1' : 'justify-between'}`}>
            <button 
              onClick={() => onThemeToggle()}
              className={`p-2 rounded-xl transition-all flex-1 flex items-center justify-center ${!isDarkMode 
                ? 'bg-white shadow-sm text-brand-600' 
                : 'text-gray-400 hover:text-gray-200'}`}
            >
              <Sun size={16} />
              {!isCollapsed && <span className="ml-2 text-[10px] font-black uppercase tracking-wider">Light</span>}
            </button>
            <button 
              onClick={() => onThemeToggle()}
              className={`p-2 rounded-xl transition-all flex-1 flex items-center justify-center ${isDarkMode 
                ? 'bg-slate-700 text-white shadow-sm' 
                : 'text-slate-500 hover:text-slate-700'}`}
            >
              <Moon size={16} />
              {!isCollapsed && <span className="ml-2 text-[10px] font-black uppercase tracking-wider">Dark</span>}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

// Fixed: Added missing default export
export default Sidebar;
