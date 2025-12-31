
import React from 'react';
import { 
  Plus,
  Package,
  DollarSign,
  AlertTriangle,
  Truck,
  Search,
  ShoppingCart
} from 'lucide-react';

interface InventoryItem {
  id: string;
  image: string;
  name: string;
  batchId: string;
  category: string;
  mfgDate: string;
  expDate: string;
  stock: number;
  status: 'IN STOCK' | 'OUT OF STOCK' | 'EXPIRED';
  unitPrice: number;
  totalCost: number;
  categoryColor: string;
}

const MOCK_INVENTORY: InventoryItem[] = [
  { 
    id: '1', 
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=100&h=100', 
    name: 'Choco Chip Cookies', 
    batchId: 'CK-5001', 
    category: 'Bakery',
    categoryColor: 'bg-amber-50 text-amber-600',
    mfgDate: '2024-05-10', 
    expDate: '2024-11-10', 
    stock: 150,
    status: 'IN STOCK',
    unitPrice: 12.50, 
    totalCost: 1875.00 
  },
  { 
    id: '2', 
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=100&h=100', 
    name: 'Midnight Rose Perfume', 
    batchId: 'FR-1022', 
    category: 'Fragrances',
    categoryColor: 'bg-violet-50 text-violet-600',
    mfgDate: '2023-12-12', 
    expDate: '2026-12-12', 
    stock: 42,
    status: 'IN STOCK',
    unitPrice: 85.00, 
    totalCost: 3570.00 
  },
  { 
    id: '3', 
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=100&h=100', 
    name: 'Organic Sea Salt Chips', 
    batchId: 'SN-9921', 
    category: 'Snacks',
    categoryColor: 'bg-emerald-50 text-emerald-600',
    mfgDate: '2024-03-15', 
    expDate: '2024-09-15', 
    stock: 0,
    status: 'OUT OF STOCK',
    unitPrice: 4.99, 
    totalCost: 0.00 
  },
  { 
    id: '4', 
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&q=80&w=100&h=100', 
    name: 'Sparkling Berry Juice', 
    batchId: 'BV-3044', 
    category: 'Beverages',
    categoryColor: 'bg-rose-50 text-rose-600',
    mfgDate: '2024-01-20', 
    expDate: '2025-01-20', 
    stock: 85,
    status: 'IN STOCK',
    unitPrice: 3.50, 
    totalCost: 297.50 
  },
  { 
    id: '5', 
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=100&h=100', 
    name: 'Premium Beef Burger Patty', 
    batchId: 'ET-4412', 
    category: 'Frozen Foods',
    categoryColor: 'bg-blue-50 text-blue-600',
    mfgDate: '2023-11-20', 
    expDate: '2024-04-20', 
    stock: 20,
    status: 'EXPIRED',
    unitPrice: 15.00, 
    totalCost: 300.00 
  },
];

const DashboardContent: React.FC = () => {
  return (
    <div className="space-y-6 max-w-full pb-10">
      {/* Header with Title and Action Button */}
      <div className="flex items-center justify-between px-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Package className="text-violet-600" size={24} />
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Product Inventory</h1>
          </div>
          <div className="flex gap-6 mt-2">
            <button className="text-violet-600 font-bold border-b-2 border-violet-600 pb-1 text-sm transition-all">Active Stock</button>
            <button className="text-slate-400 font-bold hover:text-slate-600 text-sm pb-1 transition-all">Supply Orders</button>
          </div>
        </div>
        <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-2xl flex items-center gap-2 font-bold transition-all shadow-lg shadow-violet-100 active:scale-95">
          <Plus size={20} />
          Add Item
        </button>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col justify-between h-40 shadow-sm relative overflow-hidden group hover:border-violet-100 transition-all">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SKU Count</span>
            <div className="bg-slate-50 p-2.5 rounded-xl group-hover:bg-violet-50 transition-colors">
              <Package size={20} className="text-slate-400 group-hover:text-violet-500" />
            </div>
          </div>
          <span className="text-5xl font-black text-slate-800 tracking-tighter">248</span>
        </div>

        <div className="bg-violet-600 p-6 rounded-[2rem] flex flex-col justify-between h-40 shadow-xl shadow-violet-200 relative overflow-hidden group">
          <div className="flex justify-between items-start text-white/80">
            <span className="text-[10px] font-bold uppercase tracking-widest">Market Value</span>
            <div className="bg-white/20 p-2.5 rounded-xl group-hover:bg-white/30 transition-colors">
              <DollarSign size={20} className="text-white" />
            </div>
          </div>
          <span className="text-5xl font-black text-white tracking-tighter">$42.8k</span>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-rose-100 flex flex-col justify-between h-40 shadow-sm relative group hover:border-rose-200 transition-all">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Restock Alerts</span>
            <div className="bg-rose-50 p-2.5 rounded-xl group-hover:bg-rose-100 transition-colors">
              <AlertTriangle size={20} className="text-rose-400" />
            </div>
          </div>
          <span className="text-5xl font-black text-rose-500 tracking-tighter">12</span>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col justify-between h-40 shadow-sm relative group hover:border-violet-100 transition-all">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">In Transit</span>
            <div className="bg-violet-500 p-2.5 rounded-xl shadow-lg shadow-violet-100 group-hover:scale-110 transition-transform">
              <Truck size={20} className="text-white" />
            </div>
          </div>
          <span className="text-5xl font-black text-violet-600 tracking-tighter opacity-80">3</span>
        </div>
      </div>

      {/* Extended Search and Filters Section */}
      <div className="flex flex-col md:flex-row gap-3 px-2">
        <div className="relative flex-1 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search specific inventory products by name, batch ID, or category..." 
            className="w-full bg-white border border-slate-100 text-slate-800 pl-14 pr-6 py-5 rounded-[1.5rem] shadow-sm focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-300 placeholder:text-slate-400 text-sm font-semibold transition-all"
          />
        </div>
      </div>

      {/* Detailed Inventory Table Section */}
      <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm mx-2">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-6 w-20">Img</th>
                <th className="px-6 py-6">Product</th>
                <th className="px-6 py-6">Category</th>
                <th className="px-6 py-6">Mfg</th>
                <th className="px-6 py-6">Exp</th>
                <th className="px-6 py-6">Stock</th>
                <th className="px-6 py-6 text-right">Unit Price</th>
                <th className="px-6 py-6 text-right">Total Cost</th>
                <th className="px-6 py-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {MOCK_INVENTORY.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="w-12 h-12 rounded-2xl border border-slate-100 overflow-hidden bg-slate-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 capitalize">{item.name}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.batchId}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-1.5 w-fit ${item.categoryColor}`}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-current opacity-40`} />
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-xs font-bold text-slate-500">{item.mfgDate}</td>
                  <td className="px-6 py-5 text-xs font-bold text-slate-500">
                    <span className={item.status === 'EXPIRED' ? 'text-rose-500 font-black' : ''}>
                      {item.expDate}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <span className={`font-black text-sm ${item.status === 'OUT OF STOCK' ? 'text-rose-500' : 'text-slate-700'}`}>
                        {item.stock}
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className={`text-[9px] font-black px-2.5 py-1 rounded-lg uppercase tracking-tighter 
                          ${item.status === 'IN STOCK' ? 'bg-green-100 text-green-700' : ''}
                          ${item.status === 'OUT OF STOCK' ? 'bg-rose-100 text-rose-700' : ''}
                          ${item.status === 'EXPIRED' ? 'bg-slate-100 text-slate-600' : ''}
                        `}>
                          {item.status}
                        </span>
                        {item.status === 'OUT OF STOCK' && (
                          <button className="bg-violet-600 text-white text-[9px] font-black px-2 py-1 rounded-lg flex items-center gap-1 hover:bg-violet-700 transition-all w-fit shadow-lg shadow-violet-100 active:scale-90">
                            <ShoppingCart size={8} /> RESTOCK
                          </button>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-black text-slate-900 text-sm">
                    ${item.unitPrice.toFixed(2)}
                  </td>
                  <td className="px-6 py-5 text-right font-black text-violet-600 text-sm">
                    ${item.totalCost.toFixed(2)}
                  </td>
                  <td className="px-6 py-5">
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
