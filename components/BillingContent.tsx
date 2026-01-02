
import React, { useState, useRef } from 'react';
import { 
  Plus, 
  Trash2, 
  Save, 
  Printer, 
  X, 
  History, 
  Users, 
  Send,
  Download,
  CreditCard,
  User,
  MapPin,
  Tag,
  FileText,
  ChevronRight,
  Search,
  Smartphone,
  Building2,
  Wallet,
  Calendar,
  Briefcase,
  Truck,
  PlusCircle,
  AlertCircle,
  Package,
  Eye,
  ExternalLink
} from 'lucide-react';

interface BillItem {
  id: string;
  name: string;
  desc: string;
  qty: number;
  price: number;
  discount: number; // percentage
  tax: number; // percentage
}

interface BillHistoryRecord {
  id: string;
  invoiceNo: string;
  customer: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Partial' | 'Unpaid';
}

type PaymentMethod = 'Cash' | 'UPI' | 'Net Banking' | 'Cards';

const MOCK_BILL_HISTORY: BillHistoryRecord[] = [
  { id: 'h1', invoiceNo: 'INV-2026-0038', customer: 'The Grand Deli', date: '30 Jan 2026', amount: 45200.00, status: 'Paid' },
  { id: 'h2', invoiceNo: 'INV-2026-0039', customer: 'Aura Boutique', date: '31 Jan 2026', amount: 12500.50, status: 'Paid' },
  { id: 'h3', invoiceNo: 'INV-2026-0040', customer: 'Heritage Club', date: '01 Feb 2026', amount: 8900.00, status: 'Partial' },
  { id: 'h4', invoiceNo: 'INV-2026-0041', customer: 'Artisan Co', date: '01 Feb 2026', amount: 15400.25, status: 'Unpaid' },
];

const BillingContent: React.FC = () => {
  const [items, setItems] = useState<BillItem[]>([
    { id: '1', name: '', desc: '', qty: 1, price: 0, discount: 0, tax: 18 }
  ]);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('Cash');
  const [amountPaid, setAmountPaid] = useState<number>(0);
  const [shippingCharges, setShippingCharges] = useState<number>(0);
  const [additionalFees, setAdditionalFees] = useState<number>(0);

  const historyRef = useRef<HTMLDivElement>(null);

  const addItemRow = () => {
    setItems([...items, { id: Date.now().toString(), name: '', desc: '', qty: 1, price: 0, discount: 0, tax: 18 }]);
  };

  const removeItemRow = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const scrollToHistory = () => {
    historyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculation logic
  const subtotal = items.reduce((acc, item) => acc + (item.qty * item.price), 0);
  const totalTax = items.reduce((acc, item) => acc + ((item.qty * item.price) * (item.tax / 100)), 0);
  const totalDiscount = items.reduce((acc, item) => acc + ((item.qty * item.price) * (item.discount / 100)), 0);
  const rawTotal = subtotal + totalTax - totalDiscount + Number(shippingCharges) + Number(additionalFees);
  const grandTotal = Math.round(rawTotal);
  const roundingAdjustment = grandTotal - rawTotal;
  const balanceDue = grandTotal - amountPaid;

  return (
    <div className="flex flex-col lg:flex-row gap-6 animate-in fade-in duration-500 pb-10">
      
      {/* LEFT: MAIN BILLING AREA */}
      <div className="flex-1 space-y-6">
        {/* Header Title */}
        <div className="flex items-center justify-between px-2">
          <div>
            <h1 className="text-2xl font-black text-gray-900 font-display tracking-tight">Invoice Generator</h1>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Terminal ID: HAMS-BILL-09</p>
          </div>
          <button 
            onClick={scrollToHistory}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-sm hover:bg-brand-50 transition-all text-xs font-black text-brand-600 group"
          >
            <History size={14} className="group-hover:rotate-[-45deg] transition-transform" /> View History
          </button>
        </div>

        {/* Invoice & Context Grid */}
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest ml-1">Bill Number</label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-400" size={14} />
              <input type="text" value="INV-2026-0042" readOnly className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-900 outline-none" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest ml-1">Invoice Date</label>
            <input type="date" defaultValue="2026-02-01" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-900 outline-none" />
          </div>
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest ml-1">Due Date</label>
            <input type="date" defaultValue="2026-02-15" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-900 outline-none" />
          </div>
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest ml-1 flex items-center gap-1">
              <Briefcase size={10} /> Created By
            </label>
            <input type="text" placeholder="Distributed Name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-900 outline-none" />
          </div>
        </div>

        {/* Line Items Container */}
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-brand-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
               <Package size={16} className="text-brand-300" />
               <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Service & Item Details</span>
            </div>
            <button onClick={addItemRow} className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-[10px] font-black uppercase tracking-widest transition-all">
              <PlusCircle size={14} /> Add Line
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-[9px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">
                  <th className="px-6 py-4 w-12 text-center">#</th>
                  <th className="px-6 py-4">Item Name & Description</th>
                  <th className="px-6 py-4 w-24">Qty</th>
                  <th className="px-6 py-4 w-32">Unit Price</th>
                  <th className="px-6 py-4 w-24">Disc %</th>
                  <th className="px-6 py-4 w-24">Tax %</th>
                  <th className="px-6 py-4 w-32 text-right">Line Total</th>
                  <th className="px-6 py-4 w-12 text-center"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {items.map((item, index) => (
                  <tr key={item.id} className="group hover:bg-brand-50/20 transition-all">
                    <td className="px-6 py-4 text-[10px] font-black text-gray-300 text-center">{index + 1}</td>
                    <td className="px-6 py-4">
                      <input type="text" placeholder="Product / Service" className="w-full bg-transparent text-xs font-bold text-gray-900 outline-none mb-1" />
                      <input type="text" placeholder="Brief description..." className="w-full bg-transparent text-[10px] font-medium text-gray-400 outline-none" />
                    </td>
                    <td className="px-6 py-4">
                      <input type="number" defaultValue={item.qty} className="w-full bg-gray-50 border border-transparent focus:border-brand-100 px-2 py-1 rounded text-xs font-bold text-gray-900 outline-none" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded border border-transparent focus-within:border-brand-100">
                        <span className="text-[10px] font-black text-gray-400">₹</span>
                        <input type="number" placeholder="0.00" className="w-full bg-transparent text-xs font-bold text-gray-900 outline-none" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <input type="number" placeholder="0" className="w-full bg-gray-50 px-2 py-1 rounded text-xs font-bold text-gray-900 outline-none" />
                    </td>
                    <td className="px-6 py-4">
                      <input type="number" defaultValue={18} className="w-full bg-gray-50 px-2 py-1 rounded text-xs font-bold text-gray-900 outline-none" />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-xs font-black text-gray-900">₹0.00</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button onClick={() => removeItemRow(item.id)} className="text-gray-300 hover:text-rose-500 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* History / Recent Activity Section */}
        <div ref={historyRef} className="pt-2">
           <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
             <div className="px-8 py-5 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-brand-100 text-brand-600 rounded-xl">
                    <History size={16} />
                  </div>
                  <h2 className="text-[11px] font-black text-gray-900 uppercase tracking-widest">Recent Bill History</h2>
                </div>
                <div className="flex gap-4">
                  <span className="text-[9px] font-black text-brand-500 uppercase flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
                    Live Audit: Connected
                  </span>
                  <button className="text-[9px] font-black text-brand-600 uppercase tracking-widest hover:underline flex items-center gap-1">
                    <Download size={10} /> Export Records
                  </button>
                </div>
             </div>
             
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                 <thead>
                    <tr className="text-[9px] font-black text-gray-400 uppercase tracking-widest bg-gray-50/30">
                      <th className="px-8 py-4">Invoice No</th>
                      <th className="px-8 py-4">Retail Partner</th>
                      <th className="px-8 py-4">Date</th>
                      <th className="px-8 py-4">Amount</th>
                      <th className="px-8 py-4">Status</th>
                      <th className="px-8 py-4 text-center">Actions</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-50">
                    {MOCK_BILL_HISTORY.map((record) => (
                      <tr key={record.id} className="group hover:bg-brand-50/30 transition-all cursor-pointer">
                        <td className="px-8 py-4">
                          <span className="text-xs font-black text-brand-600 font-mono">{record.invoiceNo}</span>
                        </td>
                        <td className="px-8 py-4">
                          <span className="text-xs font-bold text-gray-900">{record.customer}</span>
                        </td>
                        <td className="px-8 py-4">
                          <span className="text-[10px] font-black text-gray-400">{record.date}</span>
                        </td>
                        <td className="px-8 py-4">
                          <span className="text-xs font-black text-gray-900">₹{record.amount.toLocaleString()}</span>
                        </td>
                        <td className="px-8 py-4">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
                            record.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' :
                            record.status === 'Partial' ? 'bg-amber-50 text-amber-600' :
                            'bg-rose-50 text-rose-600'
                          }`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="px-8 py-4">
                           <div className="flex items-center justify-center gap-3">
                             <button className="text-gray-300 hover:text-brand-600 transition-colors">
                                <Eye size={14} />
                             </button>
                             <button className="text-gray-300 hover:text-brand-600 transition-colors">
                                <Printer size={14} />
                             </button>
                             <button className="text-gray-300 hover:text-brand-600 transition-colors">
                                <ExternalLink size={14} />
                             </button>
                           </div>
                        </td>
                      </tr>
                    ))}
                 </tbody>
               </table>
             </div>

             <div className="p-4 bg-gray-50/50 border-t border-gray-50 text-center">
                <button className="text-[10px] font-black text-brand-600 uppercase tracking-widest hover:bg-brand-50 px-4 py-2 rounded-lg transition-all">
                   View Full Transaction Ledger
                </button>
             </div>
           </div>
        </div>
      </div>

      {/* RIGHT: SIDE ACTION BAR (Sticky Sidebar) */}
      <div className="w-full lg:w-96 space-y-6">
        
        {/* Customer Details Block */}
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-brand-900/5 space-y-5">
          <div className="flex items-center gap-3 pb-2 border-b border-gray-50">
            <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
              <User size={18} />
            </div>
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">Customer Data</h3>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Customer Name</label>
                <input type="text" placeholder="Client Name" className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-brand-50" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Customer ID</label>
                <input type="text" placeholder="Optional" className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Phone Number</label>
                <input type="text" placeholder="+91..." className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest">GST/VAT No.</label>
                <input type="text" placeholder="Tax ID" className="w-full px-3 py-2 bg-brand-50/50 border border-brand-100 rounded-xl text-xs font-bold outline-none text-brand-700" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Email Address</label>
              <input type="email" placeholder="client@mail.com" className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold outline-none" />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-1">
                <MapPin size={10} /> Billing Address
              </label>
              <textarea rows={2} placeholder="Full postal address..." className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold outline-none resize-none" />
            </div>
          </div>
        </div>

        {/* Financial Summary Block */}
        <div className="bg-brand-950 p-6 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 blur-3xl rounded-full"></div>
          
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-6">Settlement Ledger</h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold opacity-60">Subtotal</span>
              <span className="font-black">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold opacity-60">Discount</span>
              <span className="font-black text-rose-400">- ₹{totalDiscount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold opacity-60">Tax Amount</span>
              <span className="font-black text-emerald-400">+ ₹{totalTax.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center text-xs pt-2 border-t border-white/5">
              <div className="flex items-center gap-1 opacity-60">
                 <Truck size={10} />
                 <span className="font-bold">Shipping</span>
              </div>
              <div className="flex items-center bg-white/5 rounded px-2">
                 <span className="text-[10px] mr-1">₹</span>
                 <input 
                  type="number" 
                  value={shippingCharges} 
                  onChange={(e) => setShippingCharges(Number(e.target.value))} 
                  className="w-12 bg-transparent text-xs font-black outline-none py-1" 
                 />
              </div>
            </div>

            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-1 opacity-60">
                 <Tag size={10} />
                 <span className="font-bold">Additional Fees</span>
              </div>
              <div className="flex items-center bg-white/5 rounded px-2">
                 <span className="text-[10px] mr-1">₹</span>
                 <input 
                  type="number" 
                  value={additionalFees} 
                  onChange={(e) => setAdditionalFees(Number(e.target.value))} 
                  className="w-12 bg-transparent text-xs font-black outline-none py-1" 
                 />
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] opacity-40 italic">
              <span>Rounding Adjustment</span>
              <span>₹{roundingAdjustment.toFixed(2)}</span>
            </div>
            
            <div className="pt-6 mt-6 border-t border-brand-800">
               <div className="flex justify-between items-end">
                 <div>
                   <p className="text-[9px] font-black uppercase tracking-widest text-brand-400">Grand Total</p>
                   <h2 className="text-3xl font-black font-display tracking-tight mt-1">₹{grandTotal.toLocaleString()}</h2>
                 </div>
                 <div className="p-2 bg-white/10 rounded-xl group-hover:bg-brand-500 transition-colors">
                    <CreditCard size={20} />
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Payment Configuration Block */}
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
          <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest ml-1">Select Payment Option</label>
          
          {/* Visual Option Grid */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'Cash', icon: Wallet, color: 'emerald' },
              { id: 'UPI', icon: Smartphone, color: 'indigo' },
              { id: 'Net Banking', icon: Building2, color: 'blue' },
              { id: 'Cards', icon: CreditCard, color: 'slate' },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setPaymentMethod(opt.id as PaymentMethod)}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all ${
                  paymentMethod === opt.id 
                  ? `bg-${opt.color}-50 border-${opt.color}-200 text-${opt.color}-600 ring-2 ring-${opt.color}-100` 
                  : 'bg-white border-gray-100 text-gray-400 hover:bg-gray-50'
                }`}
              >
                <opt.icon size={20} className="mb-1" />
                <span className="text-[9px] font-black uppercase tracking-wider">{opt.id}</span>
              </button>
            ))}
          </div>
          
          {/* DYNAMIC DETAILS AREA */}
          <div className="animate-in slide-in-from-top-2 duration-300">
            {paymentMethod === 'UPI' && (
              <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 space-y-3">
                <div className="flex items-center gap-2 mb-1">
                   <Smartphone size={14} className="text-indigo-600" />
                   <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">UPI Portal details</span>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase text-indigo-400 tracking-widest">UPI ID / VPA</label>
                  <input type="text" placeholder="username@upi" className="w-full px-3 py-2 bg-white border border-indigo-100 rounded-xl text-xs font-bold outline-none" />
                </div>
              </div>
            )}

            {paymentMethod === 'Net Banking' && (
              <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-3">
                <div className="flex items-center gap-2 mb-1">
                   <Building2 size={14} className="text-blue-600" />
                   <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Bank Credentials</span>
                </div>
                <div className="space-y-2">
                  <input type="text" placeholder="Bank Name" className="w-full px-3 py-2 bg-white border border-blue-100 rounded-xl text-xs font-bold outline-none" />
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Acc Number" className="w-full px-3 py-2 bg-white border border-blue-100 rounded-xl text-xs font-bold outline-none" />
                    <input type="text" placeholder="IFSC Code" className="w-full px-3 py-2 bg-white border border-blue-100 rounded-xl text-xs font-bold outline-none" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'Cards' && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 mb-1">
                   <CreditCard size={14} className="text-slate-600" />
                   <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Secure Card Entry</span>
                </div>
                <div className="space-y-2">
                  <input type="text" placeholder="Card Number" className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold outline-none" />
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="MM/YY" className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold outline-none" />
                    <input type="password" placeholder="CVV" className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold outline-none" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
             <div className="space-y-1">
               <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest ml-1">Amount Paid</label>
               <input 
                type="number" 
                value={amountPaid} 
                onChange={(e) => setAmountPaid(Number(e.target.value))}
                className="w-full px-3 py-2 bg-emerald-50/50 border border-emerald-100 rounded-xl text-xs font-black text-emerald-700 outline-none" 
               />
             </div>
             <div className="space-y-1 text-right">
               <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest mr-1">Balance Due</label>
               <div className="py-2 pr-2 text-xs font-black text-rose-600">
                  ₹{balanceDue.toFixed(2)}
               </div>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <div className="space-y-1">
                <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest ml-1">Reference ID</label>
                <input type="text" placeholder="Ref#" className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold outline-none" />
             </div>
             <div className="space-y-1">
                <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest ml-1">Payment Status</label>
                <select className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-[10px] font-black uppercase outline-none cursor-pointer">
                  <option>Paid</option>
                  <option>Partial</option>
                  <option>Unpaid</option>
                </select>
             </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 bg-white border border-gray-100 text-gray-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all">
              <Save size={16} /> Save Draft
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-brand-50 border border-brand-100 text-brand-700 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-100 transition-all">
              <Send size={16} /> Send Email
            </button>
          </div>
          <button className="w-full flex items-center justify-center gap-3 py-5 bg-brand-600 text-white rounded-[1.5rem] text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-brand-500/20 hover:bg-brand-700 transition-all">
            <Printer size={18} /> Generate Invoice & Print
          </button>
          <button className="w-full py-3 flex items-center justify-center gap-2 text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] hover:text-rose-500 transition-colors">
            <X size={12} /> Reset Transaction
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingContent;
