
import { 
  LayoutGrid, 
  Box, 
  ShoppingCart, 
  Package, 
  FileText, 
  DollarSign, 
  Store, 
  Factory, 
  Users, 
  RotateCcw, 
  ShieldAlert, 
  BarChart3, 
  Bell, 
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { MenuItem } from './types';

export const MAIN_MENU_ITEMS: MenuItem[] = [
  // General Section
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, path: '/', section: 'General' },
  
  // Sales & Inventory
  { id: 'inventory', label: 'Inventory', icon: Box, path: '/inventory', section: 'Supply Chain' },
  { id: 'purchase-orders', label: 'Purchase Orders', icon: ShoppingCart, path: '/purchase-orders', section: 'Supply Chain' },
  { id: 'orders', label: 'Orders', icon: Package, path: '/orders', section: 'Supply Chain' },
  
  // Finance
  { id: 'billing', label: 'Billing', icon: FileText, path: '/billing', section: 'Finance' },
  { id: 'payment', label: 'Payment', icon: DollarSign, path: '/payment', section: 'Finance' },
  
  // Partners & HR
  { id: 'retailers', label: 'All Retailers', icon: Store, path: '/retailers', section: 'Partners' },
  { id: 'manufacturers', label: 'All Manufacturers', icon: Factory, path: '/manufacturers', section: 'Partners' },
  { id: 'employees', label: 'Employees', icon: Users, path: '/employees', section: 'Management' },
  
  // Support & Analytics
  { id: 'returns', label: 'Returns', icon: RotateCcw, path: '/returns', section: 'Support' },
  { id: 'complaints', label: 'Complaints', icon: ShieldAlert, path: '/complaints', section: 'Support' },
  { id: 'reports', label: 'Reports', icon: BarChart3, path: '/reports', section: 'Analytics' },
  { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications', section: 'System' },
  { id: 'settings', label: 'Settings', icon: Settings, path: '/settings', section: 'System' },
];

export const FOOTER_MENU_ITEMS: MenuItem[] = [
  { id: 'help', label: 'Help', icon: HelpCircle, path: '/help' },
  { id: 'logout', label: 'Log out', icon: LogOut, path: '/logout' },
];
