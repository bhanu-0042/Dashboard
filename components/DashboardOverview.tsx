
import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  PlusCircle,
  FileText,
  UserPlus,
  Bell,
  LayoutGrid,
  BarChart3,
  Package,
  Box,
  CreditCard,
  PieChart as PieIcon,
  BarChart as BarIcon,
  Search,
  MoreVertical,
  ChevronRight,
  CheckCircle2,
  Clock,
  Truck,
  XCircle,
  AlertTriangle,
  AlertCircle,
  ArrowRight,
  RefreshCcw,
  History
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
  Legend,
  BarChart,
  Bar,
  Rectangle
} from 'recharts';

const REVENUE_DATA = [
  { name: 'Jan', revenue: 45000 },
  { name: 'Feb', revenue: 52000 },
  { name: 'Mar', revenue: 48000 },
  { name: 'Apr', revenue: 61000 },
  { name: 'May', revenue: 55000 },
  { name: 'Jun', revenue: 67000 },
  { name: 'Jul', revenue: 72000 },
];

const CATEGORY_DATA = [
  { name: 'Bakery & Sweets', value: 450 },
  { name: 'Fragrances', value: 320 },
  { name: 'Snacks & Savory', value: 280 },
  { name: 'Beverages', value: 150 },
];

const TOP_PRODUCTS_DATA = [
  { name: 'Choco Cookies', sales: 1200, revenue: 15000 },
  { name: 'Rose Perfume', sales: 850, revenue: 72250 },
  { name: 'Berry Juice', sales: 720, revenue: 2520 },
  { name: 'Salt Chips', sales: 680, revenue: 3393 },
  { name: 'Beef Patties', sales: 450, revenue: 6750 },
];

const RETAILER_DATA = [
  { name: 'Gourmet Plaza', volume: 85, revenue: 12400 },
  { name: 'City Mart', volume: 72, revenue: 9800 },
  { name: 'Fresh Stop', volume: 68, revenue: 8500 },
  { name: 'Elite Grocers', volume: 55, revenue: 7200 },
  { name: 'Mega Store', volume: 42, revenue: 5600 },
];

const PAYMENT_SUMMARY_DATA = [
  { name: 'Settled', value: 85000, color: '#10b981' },
  { name: 'Pending', value: 12500, color: '#8b5cf6' },
  { name: 'Overdue', value: 3400, color: '#f43f5e' },
];

const STOCK_LEVELS_DATA = [
  { name: 'Bakery', current: 150, target: 200 },
  { name: 'Fragrance', current: 42, target: 100 },
  { name: 'Snacks', current: 0, target: 150 },
  { name: 'Beverage', current: 85, target: 120 },
  { name: 'Frozen', current: 20, target: 80 },
];

const MOCK_RECENT_ORDERS = [
  { id: '#ORD-2241', retailer: 'Gourmet Plaza', date: 'Oct 24, 2023', items: 12, total: 1240.50, status: 'Delivered', icon: CheckCircle2, color: 'text-emerald-500 bg-emerald-50' },
  { id: '#ORD-2242', retailer: 'Sweet Bites Cafe', date: 'Oct 24, 2023', items: 5, total: 450.00, status: 'Shipped', icon: Truck, color: 'text-blue-500 bg-blue-50' },
  { id: '#ORD-2243', retailer: 'City Mart Center', date: 'Oct 23, 2023', items: 28, total: 3200.75, status: 'Pending', icon: Clock, color: 'text-amber-500 bg-amber-50' },
  { id: '#ORD-2244', retailer: 'Fragrance World', date: 'Oct 23, 2023', items: 2, total: 170.00, status: 'Delivered', icon: CheckCircle2, color: 'text-emerald-500 bg-emerald-50' },
  { id: '#ORD-2245', retailer: 'Elite Grocers', date: 'Oct 22, 2023', items: 15, total: 980.20, status: 'Cancelled', icon: XCircle, color: 'text-rose-500 bg-rose-50' },
  { id: '#ORD-2246', retailer: 'Metro Supermarket', date: 'Oct 22, 2023', items: 40, total: 5400.00, status: 'Shipped', icon: Truck, color: 'text-blue-500 bg-blue-50' },
  { id: '#ORD-2247', retailer: 'Healthy Choice', date: 'Oct 21, 2023', items: 8, total: 320.50, status: 'Delivered', icon: CheckCircle2, color: 'text-emerald-500 bg-emerald-50' },
  { id: '#ORD-2248', retailer: 'Quick Stop Mart', date: 'Oct 21, 2023', items: 10, total: 110.00, status: 'Pending', icon: Clock, color: 'text-amber-500 bg-amber-50' },
];

const INVENTORY_ALERTS = [
  { id: 'AL-1', product: 'Sea Salt Chips', type: 'Stock Out', stock: 0, target: 150, severity: 'Critical', color: 'bg-rose-50 text-rose-600 border-rose-100', icon: AlertCircle },
  { id: 'AL-2', product: 'Midnight Rose Perfume', type: 'Low Stock', stock: 42, target: 100, severity: 'Warning', color: 'bg-amber-50 text-amber-600 border-amber-100', icon: AlertTriangle },
  { id: 'AL-3', product: 'Beef Burger Patty', type: 'Expired Stock', stock: 20, target: 80, severity: 'Critical', color: 'bg-rose-50 text-rose-600 border-rose-100', icon: XCircle },
  { id: 'AL-4', product: 'Sparkling Berry Juice', type: 'Low Stock', stock: 85, target: 120, severity: 'Warning', color: 'bg-amber-50 text-amber-600 border-amber-100', icon: AlertTriangle },
  { id: 'AL-5', product: 'Choco Cookies', type: 'Near Expiry', stock: 150, target: 200, severity: 'Info', color: 'bg-blue-50 text-blue-600 border-blue-100', icon: Clock },
];

const COLORS = ['#8b5cf6', '#a78bfa', '#10b981', '#f59e0b'];

const DashboardOverview: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState('overview');

  const stats = [
    { label: 'Total Sales', value: '$124,592', change: '+12.5%', trend: 'up', icon: DollarSign, color: 'bg-violet-600' },
    { label: 'Pending Orders', value: '48', change: '+5.2%', trend: 'up', icon: Clock, color: 'bg-violet-400' },
    { label: 'Total Customers', value: '1,284', change: '+2.4%', trend: 'up', icon: Users, color: 'bg-emerald-500' },
    { label: 'Low Stock Items', value: '12', change: '+2', trend: 'down', icon: AlertTriangle, color: 'bg-rose-500' },
  ];

  const subNavItems = [
    { id: 'overview', label: 'Overview', icon: LayoutGrid },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'inventory', label: 'Inventory', icon: Box },
  ];

  const quickActions = [
    { label: 'Create Invoice', icon: FileText, color: 'text-violet-600', bgColor: 'bg-violet-50' },
    { label: 'Add Product', icon: PlusCircle, color: 'text-violet-500', bgColor: 'bg-violet-50' },
    { label: 'Add Retailer', icon: UserPlus, color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
    { label: 'Reports', icon: TrendingUp, color: 'text-amber-600', bgColor: 'bg-amber-50' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 max-w-full pb-10">
      {/* Date and System Status Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-end gap-4 px-2">
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-800">Monday, Oct 24</p>
            <p className="text-[10px] font-black text-violet-500 uppercase tracking-widest">System Status: Active</p>
          </div>
          <button className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-slate-400 hover:text-violet-600">
            <Bell size={20} />
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between h-44 group hover:border-violet-100 transition-all">
            <div className="flex justify-between items-start">
              <div className={`${stat.color} p-3 rounded-2xl text-white shadow-lg shadow-violet-100`}>
                <stat.icon size={20} />
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-black ${stat.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {stat.trend === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-slate-800 tracking-tighter">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Navigation Bar */}
      <div className="px-2">
        <div className="p-1.5 bg-white/50 backdrop-blur-xl border border-white/60 rounded-[1.5rem] w-fit flex items-center gap-1 shadow-sm">
          {subNavItems.map((item) => {
            const isActive = activeSubTab === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSubTab(item.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.1em] transition-all
                  ${isActive 
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-100' 
                    : 'text-slate-500 hover:bg-white hover:text-violet-600'}`}
              >
                <Icon size={14} className={isActive ? 'animate-pulse' : ''} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Comprehensive Analytics Section */}
      {activeSubTab === 'analytics' && (
        <div className="space-y-6 px-2 animate-in slide-in-from-bottom-6 duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Selling Products - Horizontal Bar */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-amber-50 text-amber-600 p-2.5 rounded-xl">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800 leading-none">Top Selling Products</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">By Unit Sales</span>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={TOP_PRODUCTS_DATA} margin={{ left: 40, right: 20 }}>
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{fill: '#64748b', fontSize: 11, fontWeight: 700}}
                    />
                    <Tooltip 
                      cursor={{fill: '#f8fafc'}}
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}
                    />
                    <Bar 
                      dataKey="sales" 
                      fill="#8b5cf6" 
                      radius={[0, 10, 10, 0]}
                      barSize={24}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Retailer Performance - Vertical Bar */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800 leading-none">Retailer Performance</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Revenue by Partner</span>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={RETAILER_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}}
                    />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                    <Tooltip 
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}
                    />
                    <Bar 
                      dataKey="revenue" 
                      fill="#10b981" 
                      radius={[10, 10, 0, 0]}
                      activeBar={<Rectangle fill="#059669" />}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Payment Summary - Donut Chart */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-rose-50 text-rose-600 p-2.5 rounded-xl">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800 leading-none">Payment Health</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Finance Breakdown</span>
                </div>
              </div>
              <div className="flex-1 min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={PAYMENT_SUMMARY_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={85}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {PAYMENT_SUMMARY_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} cornerRadius={10} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}
                    />
                    <Legend iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Stock Summary - Grouped Bar Chart */}
            <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
               <div className="flex items-center gap-3 mb-8">
                <div className="bg-violet-50 text-violet-600 p-2.5 rounded-xl">
                  <Box size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800 leading-none">Stock Levels vs Target</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inventory Capacity</span>
                </div>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={STOCK_LEVELS_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}}
                    />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                    <Tooltip contentStyle={{borderRadius: '16px', border: 'none'}} />
                    <Bar dataKey="current" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="target" fill="#e2e8f0" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-violet-500" />
                  <span className="text-[10px] font-black uppercase text-slate-400">Current Stock</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <span className="text-[10px] font-black uppercase text-slate-400">Ideal Reorder Point</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Row - Visible on Overview only (simplified) */}
      {activeSubTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-2 animate-in slide-in-from-bottom-4 duration-500">
          {/* Revenue Area Chart */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-black text-slate-800 tracking-tight">Sales Performance</h2>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Growth Analytics 2024</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-100">Monthly</button>
                <button className="px-4 py-2 bg-violet-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-violet-100">Weekly</button>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={REVENUE_DATA}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} 
                  />
                  <Tooltip 
                    contentStyle={{
                      borderRadius: '16px',
                      border: 'none',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      backgroundColor: '#1e293b',
                      color: '#fff'
                    }}
                    itemStyle={{color: '#a78bfa', fontWeight: 'bold'}}
                    labelStyle={{color: '#94a3b8', marginBottom: '4px', fontWeight: 'bold'}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#8b5cf6" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorRev)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Category Distribution Pie Chart */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-black text-slate-800 tracking-tight">Product Mix</h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Stock Share</p>
            </div>
            <div className="flex-1 min-h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={CATEGORY_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {CATEGORY_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={8} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      borderRadius: '16px',
                      border: 'none',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36} 
                    iconType="circle"
                    wrapperStyle={{
                      fontSize: '10px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      color: '#64748b'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Orders View */}
      {activeSubTab === 'orders' && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
           {/* Orders Control Bar */}
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
              <div className="flex items-center gap-3">
                <div className="bg-violet-600 p-2.5 rounded-2xl text-white shadow-lg shadow-violet-100">
                  <Package size={22} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-800 tracking-tight leading-none">Order Management</h2>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Real-time fulfillment pipeline</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="relative group flex-1 md:w-64">
                   <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                   <input 
                    type="text" 
                    placeholder="Search orders..." 
                    className="w-full bg-white border border-slate-100 pl-10 pr-4 py-2.5 rounded-2xl text-xs font-bold focus:ring-4 focus:ring-violet-500/5 focus:border-violet-200 outline-none transition-all"
                   />
                </div>
                <button className="bg-violet-600 text-white p-2.5 rounded-2xl hover:bg-violet-700 transition-all shadow-lg shadow-violet-100">
                   <PlusCircle size={20} />
                </button>
              </div>
           </div>

           {/* Scrollable Orders Table */}
           <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm mx-2 overflow-hidden">
              <div className="overflow-x-auto no-scrollbar max-h-[600px] overflow-y-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="sticky top-0 bg-white z-10">
                    <tr className="border-b border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      <th className="px-8 py-6">Order ID</th>
                      <th className="px-8 py-6">Retailer Partner</th>
                      <th className="px-8 py-6">Timestamp</th>
                      <th className="px-8 py-6">Items</th>
                      <th className="px-8 py-6">Transaction Total</th>
                      <th className="px-8 py-6">Fulfillment Status</th>
                      <th className="px-8 py-6"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {MOCK_RECENT_ORDERS.map((order) => {
                      const StatusIcon = order.icon;
                      return (
                        <tr key={order.id} className="group hover:bg-slate-50/50 transition-colors">
                          <td className="px-8 py-5">
                            <span className="text-sm font-black text-slate-900 font-mono">{order.id}</span>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500 group-hover:bg-white group-hover:shadow-sm transition-all">
                                {order.retailer.charAt(0)}
                              </div>
                              <span className="text-sm font-bold text-slate-700">{order.retailer}</span>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <span className="text-xs font-bold text-slate-400">{order.date}</span>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center gap-2">
                               <Package size={14} className="text-slate-300" />
                               <span className="text-xs font-black text-slate-600">{order.items} Units</span>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <span className="text-sm font-black text-slate-800">${order.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                          </td>
                          <td className="px-8 py-5">
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl w-fit ${order.color}`}>
                              <StatusIcon size={14} />
                              <span className="text-[10px] font-black uppercase tracking-wider">{order.status}</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 text-right">
                             <button className="p-2 text-slate-300 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all">
                                <ChevronRight size={18} />
                             </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
              {/* Table Footer / Pagination Placeholder */}
              <div className="px-8 py-4 border-t border-slate-50 bg-slate-50/30 flex items-center justify-between">
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing 8 of 124 active orders</p>
                 <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-violet-600 transition-all">Prev</button>
                    <button className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-violet-600 transition-all">Next</button>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Inventory View - Now with Inventory Alerts */}
      {activeSubTab === 'inventory' && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
           {/* Inventory Header */}
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-600 p-2.5 rounded-2xl text-white shadow-lg shadow-emerald-100">
                  <Box size={22} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-800 tracking-tight leading-none">Inventory Health</h2>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Real-time stock monitoring & alerts</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2.5 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-violet-600 transition-all">
                  <RefreshCcw size={20} />
                </button>
                <button className="p-2.5 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-violet-600 transition-all">
                  <History size={20} />
                </button>
              </div>
           </div>

           {/* Alerts Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
              {INVENTORY_ALERTS.map((alert) => {
                const Icon = alert.icon;
                const progress = (alert.stock / alert.target) * 100;
                return (
                  <div key={alert.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col group hover:border-violet-100 transition-all">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-2xl ${alert.color} border transition-transform group-hover:scale-110`}>
                        <Icon size={24} />
                      </div>
                      <div className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                        alert.severity === 'Critical' ? 'bg-rose-100 text-rose-600' : 
                        alert.severity === 'Warning' ? 'bg-amber-100 text-amber-600' : 
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {alert.severity}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-sm font-black text-slate-800 mb-1">{alert.product}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">{alert.type}</p>
                      
                      <div className="mt-6 space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                          <span className="text-slate-400">Current Stock</span>
                          <span className={alert.stock === 0 ? 'text-rose-600' : 'text-slate-800'}>{alert.stock} / {alert.target}</span>
                        </div>
                        <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ${
                              alert.stock === 0 ? 'bg-rose-500' : 
                              progress < 30 ? 'bg-amber-500' : 
                              'bg-violet-500'
                            }`}
                            style={{ width: `${Math.min(progress, 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                       <button className="flex items-center gap-2 text-[10px] font-black uppercase text-violet-600 hover:translate-x-1 transition-transform">
                          Resolve Alert <ArrowRight size={12} />
                       </button>
                       <span className="text-[9px] font-black text-slate-300 uppercase">Alert #{alert.id}</span>
                    </div>
                  </div>
                );
              })}

              {/* Add Manual Alert Card */}
              <button className="bg-slate-50 p-8 rounded-[2.5rem] border border-dashed border-slate-200 flex flex-col items-center justify-center gap-4 group hover:bg-white hover:border-violet-200 transition-all">
                 <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-slate-300 group-hover:text-violet-500 group-hover:shadow-lg transition-all">
                    <PlusCircle size={32} />
                 </div>
                 <div className="text-center">
                    <p className="text-sm font-black text-slate-400 group-hover:text-slate-600">Manual Check</p>
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Flag item for review</p>
                 </div>
              </button>
           </div>
        </div>
      )}

      {/* Quick Actions & Activity Feed - Only visible on main Overview */}
      {activeSubTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Quick Actions */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-lg font-black text-slate-800 tracking-tight ml-2">Direct Access</h2>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, i) => (
                <button key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center gap-3 group hover:bg-slate-50 transition-all active:scale-95">
                  <div className={`${action.bgColor} ${action.color} p-4 rounded-2xl transition-transform group-hover:scale-110`}>
                    <action.icon size={24} />
                  </div>
                  <span className="text-xs font-black text-slate-700 tracking-tight text-center leading-tight">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black text-slate-800 tracking-tight">Recent Activity</h2>
              <button className="text-violet-600 text-xs font-bold hover:underline">Full Audit Trail</button>
            </div>
            <div className="space-y-6 flex-1">
              {[
                { type: 'order', title: 'New Order: Choco Cookies x50', user: 'Sweet Bites Cafe', time: '2 mins ago', color: 'bg-violet-500' },
                { type: 'stock', title: 'Low Stock: Rose Mist Perfume', user: 'Inventory System', time: '45 mins ago', color: 'bg-rose-500' },
                { type: 'order', title: 'Batch Shipped: Berry Juice Pack', user: 'Express Logistics', time: '2 hours ago', color: 'bg-blue-500' },
                { type: 'retailer', title: 'New Retailer: Gourmet Plaza', user: 'Admin Onboarding', time: '5 hours ago', color: 'bg-emerald-500' },
                { type: 'payment', title: 'Invoice Paid: $1,250', user: 'Fragrance World', time: '8 hours ago', color: 'bg-violet-400' },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className={`w-2 h-10 rounded-full ${activity.color} opacity-20 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="flex-1">
                    <h4 className="text-sm font-black text-slate-800">{activity.title}</h4>
                    <p className="text-xs text-slate-400 font-bold">{activity.user}</p>
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardOverview;
