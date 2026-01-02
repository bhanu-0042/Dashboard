import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/Inventory';
import OrdersContent from './components/OrdersContent';
import PurchaseOrdersContent from './components/PurchaseOrdersContent';
import BillingContent from './components/BillingContent';
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

  const showTopBar = !['inventory', 'orders', 'purchase-orders', 'billing'].includes(activeTab);

  return (
    <div className={`flex min-h-screen transition-colors duration-500 ${theme === Theme.DARK ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Sidebar 
        activeId={activeTab} 
        onSelect={handleTabSelect} 
        theme={theme} 
        onThemeToggle={toggleTheme}
        isCollapsed={isSidebarCollapsed}
        onToggle={toggleSidebar}
      />
      
      <main className="flex-1 relative h-screen overflow-hidden flex flex-col">
        {showTopBar && (
          <TopBar 
            title={activeTab} 
          />
        )}
        
        <div className={`flex-1 overflow-y-auto no-scrollbar px-6 ${!showTopBar ? 'pt-8' : 'pt-4'}`}>
           <div className={`h-full w-full transition-all duration-500`}>
            <div className="h-full">
              {activeTab === 'dashboard' ? (
                <DashboardOverview />
              ) : activeTab === 'inventory' ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <DashboardContent />
                </div>
              ) : activeTab === 'orders' ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <OrdersContent />
                </div>
              ) : activeTab === 'purchase-orders' ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <PurchaseOrdersContent />
                </div>
              ) : activeTab === 'billing' ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <BillingContent />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center animate-in zoom-in duration-300 pb-20">
                  <div className="w-32 h-32 bg-white shadow-2xl shadow-brand-100 text-brand-500 rounded-[3rem] flex items-center justify-center mb-8 border border-brand-50 transition-transform hover:scale-105">
                    <span className="text-5xl font-black uppercase">{activeTab.charAt(0)}</span>
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tighter capitalize">{activeTab.replace('-', ' ')}</h2>
                  <p className="mt-4 text-gray-500 font-bold max-w-sm text-sm uppercase tracking-widest">
                    Module Architecting in Progress
                  </p>
                  <div className="mt-10">
                    <button 
                      onClick={() => setActiveTab('dashboard')}
                      className="px-10 py-4 bg-brand-600 text-white rounded-2xl hover:bg-brand-700 transition-all font-black text-xs uppercase tracking-widest active:scale-95"
                    >
                      Return to Dashboard
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