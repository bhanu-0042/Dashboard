
import React from 'react';
import { Search, Bell } from 'lucide-react';

interface TopBarProps {
  title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
  return (
    <div className="px-4 pt-4 sticky top-0 z-30 pointer-events-none">
      <div className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(93,138,168,0.15)] border border-white/50 pointer-events-auto">
        <div className="flex items-center gap-6 flex-1">
          <div className="flex flex-col shrink-0">
            <h2 className="text-xl font-black text-gray-900 tracking-tight capitalize leading-none">
              {title.replace('-', ' ')}
            </h2>
          </div>
          
          <div className="relative group hidden lg:block flex-1 max-w-2xl ml-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-600 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search products, orders, or partners..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-transparent rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-50 focus:border-brand-200 transition-all text-sm font-medium"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 ml-4">
          <button className="p-3 bg-gray-50 text-gray-400 rounded-2xl hover:bg-brand-50 hover:text-brand-600 transition-all relative group">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="h-8 w-px bg-gray-100 mx-1"></div>

          <button className="flex items-center gap-3 pl-3 pr-1 py-1 bg-white rounded-2xl border border-gray-100 hover:border-brand-200 transition-all group">
            <div className="text-right hidden sm:block">
              <p className="text-[11px] font-black text-gray-900 leading-none">Admin User</p>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter mt-1 group-hover:text-brand-600 transition-colors">Super Manager</p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 border-2 border-white shadow-sm flex items-center justify-center text-white font-black text-xs">
              AD
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
