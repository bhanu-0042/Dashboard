
import React from 'react';
import { Search, Bell } from 'lucide-react';

interface TopBarProps {
  title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
  return (
    <div className="px-4 pt-4 sticky top-0 z-30 pointer-events-none">
      <div className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-white/50 pointer-events-auto">
        <div className="flex items-center gap-6 flex-1">
          <div className="flex flex-col shrink-0">
            <h2 className="text-xl font-black text-slate-800 tracking-tight capitalize leading-none">
              {title.replace('-', ' ')}
            </h2>
            <span className="text-[10px] font-bold text-violet-500 uppercase tracking-widest mt-1">Management Hub</span>
          </div>
          
          {/* Extended Search Bar */}
          <div className="relative group hidden lg:block flex-1 max-w-2xl ml-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search products, batches, or analytics across the entire hub..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-50/50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-300 transition-all shadow-inner text-sm font-medium"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 ml-4">
          {/* Notifications */}
          <button className="p-3 bg-slate-50 text-slate-500 rounded-2xl hover:bg-violet-50 hover:text-violet-600 transition-all relative group">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>
          
          {/* Vertical Divider */}
          <div className="h-8 w-px bg-slate-100 mx-1"></div>

          {/* User Profile */}
          <button className="flex items-center gap-3 pl-3 pr-1 py-1 bg-slate-50/50 rounded-[1.5rem] border border-slate-100 hover:border-violet-200 transition-all group">
            <div className="text-right hidden sm:block">
              <p className="text-[11px] font-black text-slate-800 leading-none">Admin User</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5 group-hover:text-violet-500 transition-colors">Super Manager</p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 border-2 border-white shadow-sm flex items-center justify-center text-white font-black text-xs">
              AD
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
