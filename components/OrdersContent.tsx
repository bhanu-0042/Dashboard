
import React from 'react';
import { 
  Search, 
  RefreshCcw, 
  Plus, 
  Calendar, 
  User, 
  Phone, 
  Package, 
  Eye, 
  Printer, 
  Copy, 
  CheckCircle2, 
  XCircle, 
  ShoppingCart, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  ChevronDown,
  Filter
} from 'lucide-react';

interface Order {
  sNo: number;
  id: string;
  date: string;
  customer: string;
  mobile: string;
  items: number;
  amount: number;
  status: 'Pending' | 'Confirmed' | 'Processing';
}

const MOCK_ORDERS: Order[] = [
  { sNo: 1, id: '#ORD-LXM-001', date: '28 Dec 25', customer: 'The Grand Deli & Wine', mobile: '+91 98200 11223', items: 12, amount: 24500.00, status: 'Pending' },
  { sNo: 2, id: '#ORD-LXM-002', date: '27 Dec 25', customer: 'Aura Perfume Boutique', mobile: '+91 99300 44556', items: 5, amount: 48900.50, status: 'Confirmed' },
  { sNo: 3, id: '#ORD-LXM-003', date: '26 Dec 25', customer: 'Heritage Club Lounge', mobile: '+91 98111 22334', items: 28, amount: 15400.00, status: 'Processing' },
  { sNo: 4, id: '#ORD-LXM-004', date: '25 Dec 25', customer: 'The Artisan Bakery Co.', mobile: '+91 98400 55667', items: 15, amount: 8200.25, status: 'Confirmed' },
  { sNo: 5, id: '#ORD-LXM-005', date: '25 Dec 25', customer: 'Luxe Hospitality Group', mobile: '+91 90000 88776', items: 42, amount: 125000.00, status: 'Confirmed' },
];

const OrdersContent: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
        <div>
          <h1 className="text-2xl font-black text-black tracking-tight font-display">Orders Management</h1>
          <p className="text-sm font-medium text-brand-600 mt-1">Track wholesale distribution to retail partners</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-brand-500 text-black rounded-xl text-sm font-bold hover:bg-brand-600 transition-all">
          <Plus size={18} /> New Sales Order
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        <div className="bg-white p-5 rounded-2xl flex items-center justify-between border border-brand-100 shadow-sm">
          <div>
            <p className="text-[10px] font-black text-brand-400 uppercase tracking-widest mb-1">Total Orders</p>
            <h3 className="text-2xl font-black text-black font-display">128</h3>
          </div>
          <div className="w-12 h-12 bg-brand-50 text-black rounded-xl flex items-center justify-center">
            <ShoppingCart size={22} />
          </div>
        </div>

        <div className="bg-amber-50/50 p-5 rounded-2xl flex items-center justify-between border border-amber-100 shadow-sm">
          <div>
            <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">Pending Orders</p>
            <h3 className="text-2xl font-black text-black font-display">14</h3>
          </div>
          <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-black">
            <Clock size={22} />
          </div>
        </div>

        <div className="bg-emerald-50/50 p-5 rounded-2xl flex items-center justify-between border border-emerald-100 shadow-sm">
          <div>
            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Confirmed Orders</p>
            <h3 className="text-2xl font-black text-black font-display">32</h3>
          </div>
          <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-black">
            <CheckCircle size={22} />
          </div>
        </div>

        <div className="bg-brand-50/50 p-5 rounded-2xl flex items-center justify-between border border-brand-100 shadow-sm">
          <div>
            <p className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-1">Total Revenue</p>
            <h3 className="text-2xl font-black text-black font-display">₹8.42L</h3>
          </div>
          <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center text-black">
            <TrendingUp size={22} />
          </div>
        </div>
      </div>

      <div className="px-2">
        <div className="bg-white p-3 rounded-2xl border border-brand-200 shadow-sm flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by Order ID, Partner, or SKU..." 
              className="w-full pl-12 pr-4 py-3 bg-brand-50/30 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-100 outline-none transition-all text-black"
            />
          </div>
          
          <button className="flex items-center gap-2 px-4 py-3 bg-white border border-brand-100 rounded-xl text-xs font-bold text-black hover:bg-brand-50 transition-all">
            <Filter size={14} className="text-brand-600" />
            Active Pipeline
            <ChevronDown size={14} />
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-brand-100 rounded-xl text-xs font-bold text-black hover:bg-brand-50 transition-all">
            <RefreshCcw size={14} className="text-brand-600" />
            Reload
          </button>
        </div>
      </div>

      <div className="mx-2 overflow-hidden bg-white rounded-3xl border border-brand-200 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-brand-50/50">
              <tr className="text-[10px] font-bold text-brand-500 uppercase tracking-widest border-b border-brand-100">
                <th className="px-6 py-5">S.No</th>
                <th className="px-6 py-5">Reference</th>
                <th className="px-6 py-5">Retail Partner</th>
                <th className="px-6 py-5">SKU Count</th>
                <th className="px-6 py-5">Value</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-100">
              {MOCK_ORDERS.map((order) => (
                <tr key={order.id} className="group hover:bg-brand-50/10 transition-colors">
                  <td className="px-6 py-6 text-xs font-bold text-brand-300">{order.sNo}</td>
                  <td className="px-6 py-6">
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-black tracking-tight font-mono">{order.id}</span>
                      <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-brand-400 uppercase">
                        <Calendar size={10} />
                        {order.date}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-black">{order.customer}</span>
                      <span className="text-[10px] font-medium text-brand-400">{order.mobile}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-xs font-black text-black">{order.items} Items</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-sm font-black text-black font-display">₹{order.amount.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${
                      order.status === 'Pending' ? 'bg-amber-50 text-black border-amber-200' : 
                      order.status === 'Confirmed' ? 'bg-emerald-50 text-black border-emerald-200' : 
                      'bg-brand-50 text-black border-brand-200'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center justify-center gap-3 text-brand-300">
                      <button className="p-1 hover:text-black transition-colors"><Eye size={16} /></button>
                      <button className="p-1 hover:text-black transition-colors"><Printer size={16} /></button>
                      <button className="p-1 hover:text-emerald-600 transition-colors"><CheckCircle2 size={16} /></button>
                      <button className="p-1 hover:text-rose-600 transition-colors"><XCircle size={16} /></button>
                    </div>
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

export default OrdersContent;
