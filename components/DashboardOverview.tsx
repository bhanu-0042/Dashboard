
import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  BarChart3,
  Package,
  Box,
  Clock,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  CreditCard,
  AlertTriangle,
  Activity
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const REVENUE_DATA = [
  { name: 'Mon', revenue: 145000 },
  { name: 'Tue', revenue: 152000 },
  { name: 'Wed', revenue: 148000 },
  { name: 'Thu', revenue: 161000 },
  { name: 'Fri', revenue: 155000 },
  { name: 'Sat', revenue: 167000 },
  { name: 'Sun', revenue: 172000 },
];

const STOCK_STATUS_DATA = [
  { name: 'In Stock', value: 2450, color: '#5D8AA8' },
  { name: 'Low Stock', value: 85, color: '#f59e0b' },
  { name: 'Out of Stock', value: 12, color: '#ef4444' },
  { name: 'Near Expiry', value: 45, color: '#ec4899' },
];

const TOP_PRODUCTS = [
  { name: 'Dark Choc', sales: 450, color: '#5D8AA8' },
  { name: 'Rose Parfum', sales: 380, color: '#4a718c' },
  { name: 'Truffle Oil', sales: 320, color: '#3d5d73' },
  { name: 'Cold Brew', sales: 290, color: '#354e60' },
  { name: 'Oud Mist', sales: 210, color: '#2f4352' },
];

const RETAILER_PERFORMANCE = [
  { name: 'Grand Deli', orders: 84 },
  { name: 'Aura Boutique', orders: 62 },
  { name: 'Heritage Club', orders: 48 },
  { name: 'Artisan Co', orders: 35 },
  { name: 'Luxe Hosp.', orders: 29 },
];

const PAYMENT_STATUS_DATA = [
  { name: 'Completed', value: 780, color: '#5D8AA8' },
  { name: 'Pending', value: 150, color: '#f59e0b' },
  { name: 'Failed', value: 70, color: '#f43f5e' },
];

const MOCK_RECENT_ORDERS = [
  { id: '#ORD-991', retailer: 'The Grand Deli', date: 'Today, 2:45 PM', items: 24, total: 42400.50, status: 'Delivered' },
  { id: '#ORD-992', retailer: 'Aura Boutique', date: 'Today, 1:20 PM', items: 12, total: 18900.00, status: 'Processing' },
  { id: '#ORD-993', retailer: 'Heritage Club', date: 'Today, 11:05 AM', items: 8, total: 12500.25, status: 'Pending' },
  { id: '#ORD-994', retailer: 'Artisan Bakery', date: 'Yesterday', items: 15, total: 9400.00, status: 'Delivered' },
];

type SubTab = 'Overview' | 'Analytics' | 'Orders' | 'Inventory';

const DashboardOverview: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('Overview');
  const subTabs: SubTab[] = ['Overview', 'Analytics', 'Orders', 'Inventory'];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-10">
      
      {/* Primary Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Today's Sales", value: "₹1.24L", icon: DollarSign, change: "+8.2%", color: "brand" },
          { label: "Pending Orders", value: "18", icon: Clock, change: "5 Urgent", color: "amber" },
          { label: "Low Stock Items", value: "12", icon: AlertTriangle, change: "-3 Restocked", color: "rose" },
          { label: "Total Customers", value: "142", icon: Users, change: "+12 New", color: "emerald" }
        ].map((stat, i) => (
          <div 
            key={i} 
            className={`bg-white p-6 rounded-[2.5rem] border shadow-sm relative overflow-hidden group hover:shadow-2xl hover:shadow-brand-200/20 transition-all duration-300
              ${stat.color === 'brand' ? 'border-brand-200' :
                stat.color === 'amber' ? 'border-amber-200' :
                stat.color === 'rose' ? 'border-rose-200' :
                'border-emerald-200'}`}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl group-hover:scale-110 transition-transform ${
                  stat.color === 'brand' ? 'bg-brand-50 text-brand-600' :
                  stat.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                  stat.color === 'rose' ? 'bg-rose-50 text-rose-600' :
                  'bg-emerald-50 text-emerald-600'
                }`}>
                  <stat.icon size={22} />
                </div>
                <div className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${
                  stat.color === 'brand' ? 'bg-brand-100 text-brand-600' :
                  stat.color === 'amber' ? 'bg-amber-50 text-amber-500' :
                  stat.color === 'rose' ? 'bg-rose-50 text-rose-500' :
                  'bg-emerald-50 text-emerald-500'
                }`}>
                  {stat.change}
                </div>
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">{stat.label}</p>
              <h3 className="text-2xl font-black font-display text-gray-900 mt-2 tracking-tight">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Sub-Nav Bar */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 px-1">
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`px-8 py-3.5 rounded-2xl text-xs font-black tracking-widest uppercase transition-all duration-300 border ${
              activeSubTab === tab 
                ? 'bg-brand-500 text-white border-brand-500' 
                : 'bg-white text-gray-400 border-gray-100 hover:border-brand-200 hover:text-brand-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conditional Content */}
      <div className="space-y-6">
        {activeSubTab === 'Overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
            <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-brand-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-lg font-black font-display text-gray-900 tracking-tight">Sales Trend</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Performance Metrics</p>
                </div>
                <div className="p-2 bg-brand-50 text-brand-500 rounded-xl">
                  <BarChart3 size={18} />
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={REVENUE_DATA}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#5D8AA8" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#5D8AA8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} dy={10} />
                    <YAxis hide={true} />
                    <Tooltip 
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold'}}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#5D8AA8" strokeWidth={4} fill="url(#colorRev)" fillOpacity={1} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-brand-100 shadow-sm">
              <h4 className="text-lg font-black font-display text-gray-900 tracking-tight mb-8">Stock Status</h4>
              <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={STOCK_STATUS_DATA} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={8} dataKey="value" stroke="none">
                      {STOCK_STATUS_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)'}} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 space-y-3">
                {STOCK_STATUS_DATA.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: item.color}}></div>
                      <span className="text-xs font-bold text-gray-500">{item.name}</span>
                    </div>
                    <span className="text-xs font-black text-gray-900 font-display">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'Analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in slide-in-from-bottom-4 duration-500 pb-10">
            {/* Top Selling Products */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-brand-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-lg font-black font-display text-gray-900 tracking-tight">Top Selling Products</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Highest Volume SKUs</p>
                </div>
                <div className="p-2 bg-brand-50 text-brand-500 rounded-xl">
                  <Package size={20} />
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={TOP_PRODUCTS}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                    <Tooltip 
                      cursor={{fill: '#f8fafc'}}
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold'}}
                    />
                    <Bar dataKey="sales" radius={[8, 8, 0, 0]} barSize={40}>
                      {TOP_PRODUCTS.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Retailer Performance */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-lg font-black font-display text-gray-900 tracking-tight">Retailer Performance</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Partner Orders</p>
                </div>
                <div className="p-2 bg-emerald-50 text-emerald-500 rounded-xl">
                  <Users size={20} />
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={RETAILER_PERFORMANCE} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                    <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} width={100} />
                    <Tooltip 
                      cursor={{fill: '#f8fafc'}}
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold'}}
                    />
                    <Bar dataKey="orders" fill="#10b981" radius={[0, 8, 8, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Stock Summary (Detailed Donut) */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-brand-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-lg font-black font-display text-gray-900 tracking-tight">Stock Summary</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Warehouse Distribution</p>
                </div>
                <div className="p-2 bg-brand-50 text-brand-500 rounded-xl">
                  <Activity size={20} />
                </div>
              </div>
              <div className="h-[300px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie 
                      data={STOCK_STATUS_DATA} 
                      cx="50%" 
                      cy="50%" 
                      innerRadius={80} 
                      outerRadius={100} 
                      paddingAngle={5} 
                      dataKey="value"
                      stroke="none"
                    >
                      {STOCK_STATUS_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold'}}
                    />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mt-[-18px]">
                  <p className="text-[10px] font-black text-gray-400 uppercase">Total Units</p>
                  <p className="text-3xl font-black font-display text-gray-900 leading-none">2,592</p>
                </div>
              </div>
            </div>

            {/* Payment Status (Pie Chart) */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-amber-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-lg font-black font-display text-gray-900 tracking-tight">Payment Status</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Financial Clearance</p>
                </div>
                <div className="p-2 bg-amber-50 text-amber-500 rounded-xl">
                  <CreditCard size={20} />
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie 
                      data={PAYMENT_STATUS_DATA} 
                      cx="50%" 
                      cy="50%" 
                      outerRadius={100} 
                      paddingAngle={0} 
                      dataKey="value"
                      stroke="#fff"
                      strokeWidth={4}
                    >
                      {PAYMENT_STATUS_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold'}}
                    />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'Orders' && (
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 text-white rounded-xl">
                  <ShoppingCart size={18} />
                </div>
                <h4 className="text-lg font-black font-display text-gray-900 tracking-tight">Recent Orders</h4>
              </div>
              <button className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:underline">View All Orders</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <th className="px-8 py-4">Reference</th>
                    <th className="px-8 py-4">Partner</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4 text-right">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {MOCK_RECENT_ORDERS.map((order, idx) => (
                    <tr key={idx} className="hover:bg-brand-50/30 transition-colors">
                      <td className="px-8 py-6 text-xs font-black font-mono text-gray-900">{order.id}</td>
                      <td className="px-8 py-6 text-xs font-bold text-gray-500">{order.retailer}</td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider border ${
                          order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-50 text-slate-400 border-slate-100'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right text-xs font-black font-display text-gray-900">₹{order.total.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeSubTab === 'Inventory' && (
          <div className="bg-white p-8 rounded-[2.5rem] border border-brand-100 shadow-sm">
             <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gray-50 text-brand-600 rounded-2xl">
                  <Package size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black font-display text-gray-900 tracking-tight">Inventory Alerts</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Real-time stock monitoring</p>
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {STOCK_STATUS_DATA.map((item, i) => (
                 <div key={i} className="p-5 bg-gray-50/50 rounded-2xl flex items-center justify-between group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                   <div className="flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                     <span className="text-sm font-bold text-gray-700">{item.name}</span>
                   </div>
                   <span className="text-sm font-black font-display text-gray-900">{item.value} Units</span>
                 </div>
               ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardOverview;
