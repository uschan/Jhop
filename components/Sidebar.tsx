import React from 'react';
import { LayoutDashboard, Wind } from 'lucide-react';
import { SECTIONS } from '../data';
import { ActiveView } from '../types';

interface SidebarProps {
  activeView: ActiveView;
  activeSectionId: string | null;
  onNavigate: (view: ActiveView, sectionId?: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, activeSectionId, onNavigate }) => {
  return (
    <div className="h-full flex flex-col py-6 bg-white text-slate-600">
      <div className="px-6 mb-8 cursor-pointer" onClick={() => onNavigate('home')}>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">JHOP</h1>
        <p className="text-xs text-brand-600 font-medium tracking-widest uppercase mt-1">Optimization</p>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        <button
          onClick={() => onNavigate('dashboard')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
            activeView === 'dashboard' 
              ? 'bg-brand-50 text-brand-700 font-semibold shadow-sm' 
              : 'hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>每日仪表盘</span>
        </button>

        <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          核心模块
        </div>

        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate('section', section.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeView === 'section' && activeSectionId === section.id
                ? 'bg-brand-50 text-brand-700 font-semibold shadow-sm' 
                : 'hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <section.icon className="w-5 h-5" />
            <span>{section.title}</span>
          </button>
        ))}

        <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          工具
        </div>

        <button
          onClick={() => onNavigate('breathing')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
            activeView === 'breathing' 
              ? 'bg-accent-50 text-accent-700 font-semibold shadow-sm' 
              : 'hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          <Wind className="w-5 h-5" />
          <span>考前定心呼吸</span>
        </button>
      </nav>

      <div className="px-6 mt-6 border-t border-slate-100 pt-6">
        <div className="text-xs text-slate-400 text-center">
          © 2024 JHOP System
          <br/>
          Science-Based Learning
        </div>
      </div>
    </div>
  );
};