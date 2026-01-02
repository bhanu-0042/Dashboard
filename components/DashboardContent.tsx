
import React from 'react';
import { 
  RefreshCcw, 
  Plus, 
  Package, 
  CheckCircle2, 
  Calendar, 
  TrendingUp,
  AlertTriangle,
  XCircle,
  Clock,
  Zap
} from 'lucide-react';

interface StockItem {
  code: string;
  name: string;
  batches: number;
}

const STOCK_DATA: StockItem[] = [
  { code: 'GUR-CH-001', name: '70% Dark Himalayan Sea Salt Chocolate', batches: 3 },
  { code: 'GUR-OL-002', name: 'Artisanal White Truffle Infused Olive Oil', batches: 2 },
  { code: 'PRF-RS-003', name: 'Midnight Rose Eau de Parfum (100ml)', batches: 4 },
  { code: 'GUR-CF-004', name: 'Ethiopian Single Origin Cold Brew Roast', batches: 2 },
  { code: 'PRF-SD-005', name: 'Sandalwood & Bergamot Oud Mist', batches: 1 },
];

const DashboardContent: React.FC = () => {
  const stats = [
    { label: 'Total Products', val: '42', icon: Package, color: 'brand' },
    { label: 'In Stock', val: '31', icon: CheckCircle2, color: 'emerald' },
    { label: 'Low Stock', val: '5', icon: AlertTriangle, color: 'amber' },
    { label: 'Out of Stock', val: '2', icon: XCircle, color: 'rose' },
    { label: 'Expired', val: '1', icon: Clock, color: 'slate' },
    { label: 'Expiring Soon', val: '3', icon: Calendar, color: 'orange' },
    { label: 'Critical', val: '4', icon: Zap, color: 'violet' },
    { label: 'Stock Value', val: '₹4.2L', icon: TrendingUp, color: 'brand' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 px-2">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight font-display">Inventory Management</h1>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Live Warehouse Tracking</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:text-brand-600 hover:bg-brand-50 transition-all">
            <RefreshCcw size={14} /> Refresh
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-brand-600 text-white rounded-xl text-xs font-black hover:bg-brand-700 transition-all">
            <Plus size={16} /> Add Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className={`bg-white p-5 rounded-[2.5rem] border shadow-sm flex items-center justify-between group hover:shadow-xl transition-all
              ${stat.color === 'brand' ? 'border-brand-100' : 
                stat.color === 'emerald' ? 'border-emerald-100' : 
                stat.color === 'amber' ? 'border-amber-100' : 
                stat.color === 'rose' ? 'border-rose-100' : 
                stat.color === 'slate' ? 'border-slate-200' : 
                stat.color === 'orange' ? 'border-orange-100' : 
                stat.color === 'violet' ? 'border-violet-100' : 
                'border-gray-100'}`}
          >
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 leading-none">{stat.label}</p>
              <h3 className="text-xl font-black text-gray-900 font-display">{stat.val}</h3>
            </div>
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center
              ${stat.color === 'brand' ? 'bg-brand-50 text-brand-500' : 
                stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-500' : 
                stat.color === 'amber' ? 'bg-amber-50 text-amber-500' : 
                stat.color === 'rose' ? 'bg-rose-50 text-rose-500' : 
                stat.color === 'slate' ? 'bg-slate-50 text-slate-500' : 
                stat.color === 'orange' ? 'bg-orange-50 text-orange-500' : 
                stat.color === 'violet' ? 'bg-violet-50 text-violet-500' : 
                'bg-gray-50 text-gray-500'}`}>
              <stat.icon size={20} />
            </div>
          </div>
        ))}
      </div>

      <div className="mx-2 overflow-hidden bg-white rounded-[2.5rem] border border-gray-100 shadow-sm">
        <div className="bg-gray-50/50 px-8 py-5 border-b border-gray-100 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-900">
            <Package size={18} className="text-brand-500" />
            <h2 className="text-sm font-black uppercase tracking-widest font-display">Stock Catalog</h2>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white border-b border-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                <th className="px-10 py-5">Product Code</th>
                <th className="px-10 py-5">Description</th>
                <th className="px-10 py-5 text-right">Batches</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {STOCK_DATA.map((item, idx) => (
                <tr key={idx} className="group hover:bg-brand-50/30 transition-colors">
                  <td className="px-10 py-6">
                    <span className="text-xs font-black text-brand-500 font-mono">{item.code}</span>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-xs font-bold text-gray-700">{item.name}</span>
                  </td>
                  <td className="px-10 py-6 text-right">
                    <button className="px-5 py-2 bg-gray-50 text-gray-900 rounded-xl text-[10px] font-black group-hover:bg-brand-600 group-hover:text-white transition-all">
                      {item.batches} Batches
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
