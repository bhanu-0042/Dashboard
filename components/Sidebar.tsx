
import React from 'react';
import { 
  PanelLeftClose, 
  PanelLeftOpen, 
  Sun, 
  Moon
} from 'lucide-react';
import { MAIN_MENU_ITEMS, FOOTER_MENU_ITEMS } from '../constants';
import { Theme, MenuItem } from '../types';

interface SidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
  theme: Theme;
  onThemeToggle: () => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeId, onSelect, theme, onThemeToggle, isCollapsed, onToggle }) => {
  // Group items by section
  const sections = MAIN_MENU_ITEMS.reduce((acc, item) => {
    const section = item.section || 'General';
    if (!acc[section]) acc[section] = [];
    acc[section].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <aside className="p-4 h-screen sticky top-0 z-50 pointer-events-none">
      <div 
        className={`h-full flex flex-col bg-white transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] overflow-hidden rounded-[2.5rem] border border-white/50 pointer-events-auto
          ${isCollapsed ? 'w-20' : 'w-64'}`}
      >
        {/* Header Profile Section */}
        <div className={`p-4 transition-colors duration-300 ${isCollapsed ? '' : 'bg-slate-50/50'}`}>
          <div className="flex items-center gap-2">
            {/* Logo Section */}
            <div className="relative group shrink-0">
              <div className={`${isCollapsed ? 'w-9 h-9' : 'w-10 h-10'} rounded-2xl border-2 border-white shadow-sm bg-white flex items-center justify-center overflow-hidden transition-all group-hover:scale-110`}>
                 <img src="https://picsum.photos/seed/hamsaa/100/100" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            
            {!isCollapsed && (
              <div className="flex flex-col flex-1 min-w-0 animate-in fade-in slide-in-from-left-2 duration-300">
                <span className="text-lg font-black text-slate-800 tracking-tight leading-none truncate">HAMSAA</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-violet-500 truncate">Manager Pro</span>
                  <button 
                    onClick={onToggle}
                    className="p-1.5 rounded-lg hover:bg-violet-50 transition-all text-slate-400 hover:text-violet-600 ml-1"
                    title="Collapse Sidebar"
                  >
                    <PanelLeftClose size={16} />
                  </button>
                </div>
              </div>
            )}
            
            {isCollapsed && (
              <button 
                onClick={onToggle}
                className="p-1.5 rounded-lg hover:bg-violet-50 transition-all text-slate-400 hover:text-violet-600 ml-auto"
                title="Expand Sidebar"
              >
                <PanelLeftOpen size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Navigation Items - Scrollbar hidden visually */}
        <nav className="flex-1 overflow-y-auto no-scrollbar px-3 py-4 space-y-6">
          {Object.entries(sections).map(([sectionName, items]) => (
            <div key={sectionName} className="space-y-1">
              {!isCollapsed && (
                <div className="px-4 mb-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] animate-in fade-in duration-500">
                    {sectionName}
                  </span>
                </div>
              )}
              {items.map((item) => {
                const isActive = activeId === item.id;
                const Icon = item.icon;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelect(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all group relative
                      ${isActive 
                        ? 'bg-violet-600 text-white shadow-lg shadow-violet-200' 
                        : 'text-slate-500 hover:bg-violet-50/50 hover:text-violet-600'
                      }`}
                  >
                    <Icon size={20} className={`shrink-0 transition-transform duration-300 ${isActive ? 'text-white' : 'group-hover:scale-110'}`} />
                    {!isCollapsed && (
                      <span className="text-sm font-bold whitespace-nowrap animate-in fade-in duration-300">{item.label}</span>
                    )}
                    {isCollapsed && (
                      <div className="absolute left-20 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all translate-x-[-10px] group-hover:translate-x-0 z-50 whitespace-nowrap uppercase tracking-widest shadow-xl">
                        {item.label}
                      </div>
                    )}
                    {isActive && !isCollapsed && (
                      <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Footer Section */}
        <div className="px-3 py-4 border-t border-slate-100 space-y-1 bg-white/50 backdrop-blur-sm">
          {FOOTER_MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isLogout = item.id === 'logout';
            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all group relative
                  ${isLogout ? 'text-slate-400 hover:bg-rose-50 hover:text-rose-500' : 'text-slate-500 hover:bg-slate-50 hover:text-violet-600'}`}
              >
                <Icon size={20} className="shrink-0 transition-transform group-hover:rotate-12" />
                {!isCollapsed && <span className="text-sm font-bold">{item.label}</span>}
                {isCollapsed && (
                   <div className="absolute left-20 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all translate-x-[-10px] group-hover:translate-x-0 z-50 whitespace-nowrap uppercase tracking-widest shadow-xl">
                     {item.label}
                   </div>
                )}
              </button>
            );
          })}

          {/* Theme Toggle */}
          <div className={`mt-3 p-1.5 bg-slate-100/80 rounded-[1.2rem] flex items-center ${isCollapsed ? 'flex-col gap-1' : 'justify-between'}`}>
            <button 
              onClick={onThemeToggle}
              className={`p-2 rounded-xl transition-all flex-1 flex justify-center ${theme === Theme.LIGHT ? 'bg-white shadow-sm text-violet-600' : 'text-slate-500 hover:text-violet-400'}`}
            >
              <Sun size={18} />
            </button>
            <button 
              onClick={onThemeToggle}
              className={`p-2 rounded-xl transition-all flex-1 flex justify-center ${theme === Theme.DARK ? 'bg-white shadow-sm text-violet-600' : 'text-slate-500 hover:text-violet-400'}`}
            >
              <Moon size={18} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
