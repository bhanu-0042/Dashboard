import { 
  LayoutGrid, 
  Box, 
  ShoppingCart, 
  FileText, 
  CreditCard,
  Truck, 
  RotateCcw,
  BarChart3, 
  ShieldCheck,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  ListOrdered
} from 'lucide-react';
import { MenuItem } from './types';

export const MAIN_MENU_ITEMS: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, path: '/' },
  { id: 'inventory', label: 'Inventory', icon: Box, path: '/inventory' },
  { id: 'orders', label: 'Orders', icon: ListOrdered, path: '/orders' },
  { id: 'purchase-orders', label: 'Purchase Orders', icon: ShoppingCart, path: '/purchase-orders' },
  { id: 'billing', label: 'Billing', icon: FileText, path: '/billing' },
  { id: 'payment', label: 'Payments', icon: CreditCard, path: '/payment' },
  { id: 'distributors', label: 'All Distributors', icon: Truck, path: '/distributors' },
  
  { id: 'returns', label: 'Returns', icon: RotateCcw, path: '/returns', section: 'REPORTS & COMPLIANCE' },
  { id: 'reports', label: 'Reports', icon: BarChart3, path: '/reports', section: 'REPORTS & COMPLIANCE' },
  { id: 'compliance', label: 'Compliance', icon: ShieldCheck, path: '/compliance', section: 'REPORTS & COMPLIANCE' },
  
  { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications', section: 'SYSTEM' },
  { id: 'settings', label: 'Settings', icon: Settings, path: '/settings', section: 'SYSTEM' },
];

export const FOOTER_MENU_ITEMS: MenuItem[] = [
  { id: 'help', label: 'Help & Support', icon: HelpCircle, path: '/help' },
  { id: 'logout', label: 'Logout Session', icon: LogOut, path: '/logout' },
];