import { LucideIcon } from 'lucide-react';

export type ActiveView = 'home' | 'dashboard' | 'section' | 'breathing';

export interface ActionItem {
  title: string;
  desc: string;
  expectedOutcome: string;
}

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  principle: string;
  chartData: any[];
  chartDescription: string;
  chartType: 'line' | 'bar' | 'area';
  actions: ActionItem[];
  reference: string;
}

export interface DailyTask {
  id: string;
  text: string;
  completed: boolean;
}

export interface AssessmentReport {
  id: string;
  timestamp: number;
  grade: string;
  rank: string;
  issues: string;
  contentHtml: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  threshold: number; // Points needed to unlock
  color: string; // Tailwind color class for icon
}