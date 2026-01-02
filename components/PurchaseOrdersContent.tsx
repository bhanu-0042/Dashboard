
import React from 'react';
import { 
  Search, 
  RefreshCcw, 
  Plus, 
  Calendar, 
  Factory, 
  Package, 
  Eye, 
  FileText, 
  Download, 
  CheckCircle2, 
  Clock, 
  Truck, 
  AlertCircle,
  ChevronDown,
  Filter,
  ArrowRight
} from 'lucide-react';

interface PurchaseOrder {
  id: string;
  manufacturer: string;
  orderDate: string;
  expectedDate: string;
  items: number;
  amount: number;
  status: 'Draft' | 'Sent' | 'Received' | 'Pending';
}

const MOCK_POS: PurchaseOrder[] = [
  { id: '#PO-GUR-801', manufacturer: 'Swiss Cocoa Artisans SA', orderDate: '28 Dec 25', expectedDate: '10 Jan 26', items: 450, amount: 485000.00, status: 'Sent' },
  { id: '#PO-PRF-802', manufacturer: 'Grasse Fragrance House', orderDate: '27 Dec 25', expectedDate: '15 Jan 26', items: 120, amount: 1240000.50, status: 'Pending' },
  { id: '#PO-GUR-803', manufacturer: 'Modena Balsamic Reserve', orderDate: '20 Dec 25', expectedDate: '28 Dec 25', items: 85, amount: 92300.00, status: 'Received' },
  { id: '#PO-GUR-804', manufacturer: 'Ethiopian Bean Cooperatives', orderDate: '15 Dec 25', expectedDate: '05 Jan 26', items: 1200, amount: 345000.00, status: 'Pending' },
  { id: '#PO-GUR-805', manufacturer: 'Himalayan Salt Mines Co.', orderDate: '10 Dec 25', expectedDate: '18 Dec 25', items: 2500, amount: 12100.25, status: 'Received' },
];

const PurchaseOrdersContent: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
        <div>
          <h1 className="text-2xl font-black text-black tracking-tight font-display">Purchase Orders</h1>
          <p className="text-sm font-medium text-brand-600 mt-1">Manage global sourcing from gourmet artisans and perfume houses</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-brand-200 text-black rounded-xl text-sm font-bold hover:bg-brand-50 transition-all">
            <Download size={18} /> Export POs
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-brand-500 text-black rounded-xl text-sm font-bold hover:bg-brand-600 transition-all">
            <Plus size={18} /> Raise Purchase Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        <div className="bg-white p-5 rounded-2xl flex flex-col justify-between border border-brand-100 shadow-sm min-h-[120px]">
          <div className="flex justify-between items-start">
            <p className="text-[10px] font-black text-brand-400 uppercase tracking-widest">Active Imports</p>
            <div className="p-2 bg-brand-50 rounded-lg text-black">
               <FileText size={16} />
            </div>
          </div>
          <h3 className="text-2xl font-black text-black font-display">8</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl flex flex-col justify-between border border-amber-200 shadow-sm min-h-[120px]">
          <div className="flex justify-between items-start">
            <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">In Transit</p>
            <div className="p-2 bg-amber-50 rounded-lg text-black">
               <Truck size={16} />
            </div>
          </div>
          <h3 className="text-2xl font-black text-black font-display">3</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl flex flex-col justify-between border border-emerald-200 shadow-sm min-h-[120px]">
          <div className="flex justify-between items-start">
            <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Stocked (MTD)</p>
            <div className="p-2 bg-emerald-50 rounded-lg text-black">
               <CheckCircle2 size={16} />
            </div>
          </div>
          <h3 className="text-2xl font-black text-black font-display">22</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl flex flex-col justify-between border border-slate-200 shadow-sm min-h-[120px]">
          <div className="flex justify-between items-start">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pending Approvals</p>
            <div className="p-2 bg-slate-50 rounded-lg text-black">
               <AlertCircle size={16} />
            </div>
          </div>
          <h3 className="text-2xl font-black text-black font-display">4</h3>
        </div>
      </div>

      <div className="px-2">
        <div className="bg-white p-3 rounded-2xl border border-brand-200 shadow-sm flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by PO#, Manufacturer, or Origin..." 
              className="w-full pl-12 pr-4 py-3 bg-brand-50/30 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-100 outline-none transition-all text-black"
            />
          </div>
          
          <button className="flex items-center gap-2 px-4 py-3 bg-white border border-brand-100 rounded-xl text-xs font-bold text-black hover:bg-brand-50 transition-all">
            <Filter size={14} className="text-brand-600" />
            Origin Status
            <ChevronDown size={14} />
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-brand-100 rounded-xl text-xs font-bold text-black hover:bg-brand-50 transition-all">
            <RefreshCcw size={14} className="text-brand-600" />
            Refresh Data
          </button>
        </div>
      </div>

      <div className="mx-2 overflow-hidden bg-white rounded-3xl border border-brand-200 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-brand-50/50">
              <tr className="text-[10px] font-bold text-brand-500 uppercase tracking-widest border-b border-brand-100">
                <th className="px-6 py-5">PO Number</th>
                <th className="px-6 py-5">Artisan/Supplier</th>
                <th className="px-6 py-5">Schedule</th>
                <th className="px-6 py-5">Volume</th>
                <th className="px-6 py-5">Purchase Value</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-100">
              {MOCK_POS.map((po) => (
                <tr key={po.id} className="group hover:bg-brand-50/10 transition-colors">
                  <td className="px-6 py-6">
                    <span className="text-xs font-black text-black tracking-tight font-mono">{po.id}</span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-400">
                        <Factory size={14} />
                      </div>
                      <span className="text-xs font-bold text-black">{po.manufacturer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-[10px] font-bold text-brand-400 uppercase">
                        <Calendar size={10} />
                        Issued: {po.orderDate}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-black uppercase">
                        <Clock size={10} />
                        ETA: {po.expectedDate}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-xs font-black text-black">{po.items} Units</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-sm font-black text-black font-display">₹{po.amount.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${
                      po.status === 'Sent' ? 'bg-blue-50 text-black border-blue-200' : 
                      po.status === 'Received' ? 'bg-emerald-50 text-black border-emerald-200' : 
                      po.status === 'Pending' ? 'bg-amber-50 text-black border-amber-200' :
                      'bg-slate-50 text-slate-500 border-slate-100'
                    }`}>
                      {po.status}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center justify-end gap-3 text-brand-300">
                      <button className="p-2 hover:bg-brand-50 rounded-lg hover:text-black transition-all"><Eye size={16} /></button>
                      <button className="p-2 hover:bg-brand-50 rounded-lg hover:text-emerald-600 transition-all"><CheckCircle2 size={16} /></button>
                      <button className="p-2 hover:bg-brand-50 rounded-lg hover:text-black transition-all"><ArrowRight size={16} /></button>
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

export default PurchaseOrdersContent;
