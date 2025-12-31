
import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
  section?: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface DashboardStat {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
}
