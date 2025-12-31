
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import DashboardOverview from './components/DashboardOverview';
import TopBar from './components/TopBar';
import { Theme } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleTabSelect = (id: string) => {
    if (id === 'logout') {
      if (confirm("Are you sure you want to log out?")) {
        alert("Logged out successfully.");
      }
      return;
    }
    setActiveTab(id);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <div className={`flex min-h-screen transition-colors duration-500 ${theme === Theme.DARK ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <Sidebar 
        activeId={activeTab} 
        onSelect={handleTabSelect} 
        theme={theme} 
        onThemeToggle={toggleTheme}
        isCollapsed={isSidebarCollapsed}
        onToggle={toggleSidebar}
      />
      
      <main className="flex-1 relative h-screen overflow-hidden flex flex-col">
        <TopBar 
          title={activeTab} 
        />
        
        <div className="flex-1 overflow-y-auto no-scrollbar py-2 pr-4">
           <div className={`h-full w-full rounded-[3rem] transition-all duration-500 ${theme === Theme.DARK ? 'bg-slate-800/50' : 'bg-transparent'}`}>
            
            <div className="p-4 sm:p-6 h-full">
              {activeTab === 'dashboard' ? (
                <DashboardOverview />
              ) : activeTab === 'inventory' ? (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <DashboardContent />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center animate-in zoom-in duration-300">
                  <div className="w-28 h-28 bg-white shadow-2xl shadow-violet-100 text-violet-600 rounded-[2.5rem] flex items-center justify-center mb-8 border border-slate-50 hover:rotate-6 transition-transform">
                    <span className="text-5xl font-black uppercase">{activeTab.charAt(0)}</span>
                  </div>
                  <h2 className="text-4xl font-black text-slate-800 tracking-tight capitalize">{activeTab.replace('-', ' ')}</h2>
                  <p className="mt-4 text-slate-400 font-medium max-w-md text-lg">
                    We're currently architecting the {activeTab} engine to deliver enterprise-grade performance.
                  </p>
                  <div className="mt-10 flex gap-4">
                    <button 
                      onClick={() => setActiveTab('dashboard')}
                      className="px-8 py-3 bg-violet-600 text-white rounded-2xl hover:bg-violet-700 transition-all font-bold shadow-xl shadow-violet-100 active:scale-95"
                    >
                      Return to Hub
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
