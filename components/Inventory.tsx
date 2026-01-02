
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
  Zap,
  Info,
  CalendarDays,
  Tag
} from 'lucide-react';

interface StockItem {
  code: string;
  name: string;
  quantity: number;
  mfgDate: string;
  expDate: string;
  batchNo: string;
  gst: number;
  unitCost: number;
}

const STOCK_DATA: StockItem[] = [
  { 
    code: 'GUR-CH-001', 
    name: '70% Dark Himalayan Sea Salt Chocolate', 
    quantity: 125,
    mfgDate: '15 Jan 2024',
    expDate: '15 Jan 2025',
    batchNo: 'BCH-24A-01',
    gst: 18,
    unitCost: 450.00
  },
  { 
    code: 'GUR-OL-002', 
    name: 'Artisanal White Truffle Olive Oil', 
    quantity: 45,
    mfgDate: '10 Dec 2023',
    expDate: '10 Jun 2025',
    batchNo: 'BCH-23Z-42',
    gst: 12,
    unitCost: 1250.00
  },
  { 
    code: 'PRF-RS-003', 
    name: 'Midnight Rose Eau de Parfum (100ml)', 
    quantity: 32,
    mfgDate: '01 Nov 2023',
    expDate: '01 Nov 2028',
    batchNo: 'FRG-009-X',
    gst: 18,
    unitCost: 8900.00
  },
  { 
    code: 'GUR-CF-004', 
    name: 'Ethiopian Single Origin Cold Brew', 
    quantity: 210,
    mfgDate: '20 Jan 2024',
    expDate: '20 Jul 2024',
    batchNo: 'COF-24-BE',
    gst: 5,
    unitCost: 750.00
  },
  { 
    code: 'PRF-SD-005', 
    name: 'Sandalwood & Bergamot Oud Mist', 
    quantity: 18,
    mfgDate: '05 Jan 2024',
    expDate: '05 Jan 2027',
    batchNo: 'FRG-012-Y',
    gst: 18,
    unitCost: 5400.00
  },
];

const Inventory: React.FC = () => {
  const stats = [
    { label: 'Total Products', val: '42', icon: Package, color: 'brand' },
    { label: 'In Stock', val: '31', icon: CheckCircle2, color: 'emerald' },
    { label: 'Low Stock', val: '5', icon: AlertTriangle, color: 'amber' },
    { label: 'Out of Stock', val: '2', icon: XCircle, color: 'rose' },
    { label: 'Expired', val: '1', icon: Clock, color: 'slate' },
    { label: 'Expiring Soon', val: '3', icon: Calendar, color: 'orange' },
    { label: 'Critical', val: '4', icon: Zap, color: 'violet' },
    { label: 'Stock Value', val: '₹14.2L', icon: TrendingUp, color: 'brand' }
  ];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 px-2">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight font-display">Inventory Management</h1>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Live Warehouse Tracking & Audit</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:text-brand-600 hover:bg-brand-50 transition-all">
            <RefreshCcw size={14} /> Refresh
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-brand-600 text-white rounded-xl text-xs font-black hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20">
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
        <div className="bg-gray-50/50 px-8 py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-900">
            <Package size={18} className="text-brand-500" />
            <h2 className="text-sm font-black uppercase tracking-widest font-display">Stock Catalog Ledger</h2>
          </div>
          <div className="flex items-center gap-4">
             <span className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.2em]">Audit Status: Verified</span>
             <button className="text-[9px] font-black text-brand-600 uppercase tracking-[0.2em] hover:underline">Export Full Catalog</button>
          </div>
        </div>
        
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
                <th className="px-6 py-5">Code / Batch</th>
                <th className="px-6 py-5">Product Name</th>
                <th className="px-6 py-5 text-center">Quantity</th>
                <th className="px-6 py-5">Timeline (MFG - EXP)</th>
                <th className="px-6 py-5 text-center">GST %</th>
                <th className="px-6 py-5 text-right">Unit Cost</th>
                <th className="px-6 py-5 text-right">Total Cost</th>
                <th className="px-6 py-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {STOCK_DATA.map((item, idx) => {
                const totalCost = item.quantity * item.unitCost;
                return (
                  <tr key={idx} className="group hover:bg-brand-50/30 transition-colors">
                    <td className="px-6 py-6 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black text-brand-600 font-mono tracking-tight">{item.code}</span>
                        <div className="flex items-center gap-1 mt-1">
                          <Tag size={10} className="text-gray-300" />
                          <span className="text-[9px] font-bold text-gray-400 font-mono">{item.batchNo}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 min-w-[200px]">
                      <span className="text-xs font-bold text-gray-900 leading-snug block">{item.name}</span>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black ${item.quantity < 20 ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'bg-gray-50 text-gray-700'}`}>
                        {item.quantity} Units
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">M: {item.mfgDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">E: {item.expDate}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className="text-[10px] font-black text-gray-400 bg-gray-50 px-2 py-1 rounded-md">{item.gst}%</span>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <span className="text-xs font-bold text-gray-900">{formatCurrency(item.unitCost)}</span>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <span className="text-xs font-black text-brand-600 font-display">{formatCurrency(totalCost)}</span>
                    </td>
                    <td className="px-6 py-6 text-right">
                       <button className="p-2 text-gray-300 hover:text-brand-600 transition-colors">
                          <Info size={16} />
                       </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="p-5 bg-gray-50/30 border-t border-gray-50 flex justify-between items-center">
           <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Showing {STOCK_DATA.length} Active SKUs</p>
           <div className="flex gap-2">
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-[9px] font-black text-gray-600 uppercase hover:bg-gray-50">Prev</button>
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-[9px] font-black text-gray-600 uppercase hover:bg-gray-50">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
