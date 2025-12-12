import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { SectionCharts } from './components/SectionCharts';
import { Dashboard } from './components/Dashboard';
import { BreathingTool } from './components/BreathingTool';
import { AssessmentModal } from './components/AssessmentModal';
import { SECTIONS } from './data';
import { ActiveView } from './types';
import { Menu, Lightbulb, Trophy } from 'lucide-react';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  const handleNavigate = (view: ActiveView, sectionId?: string) => {
    setActiveView(view);
    if (sectionId) {
      setSelectedSectionId(sectionId);
    } else {
      setSelectedSectionId(null);
    }
    setIsSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <Hero onStart={() => handleNavigate('dashboard')} />;
      case 'dashboard':
        return <Dashboard onOpenAssessment={() => setIsAssessmentOpen(true)} />;
      case 'breathing':
        return <BreathingTool onClose={() => handleNavigate('dashboard')} />;
      case 'section':
        const section = SECTIONS.find(s => s.id === selectedSectionId);
        if (!section) return <div>Section not found</div>;
        return (
          <div className="p-6 max-w-5xl mx-auto animate-fade-in">
            {/* Header */}
            <div className="mb-8 border-b border-slate-200 pb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-brand-100 text-brand-600 rounded-xl">
                  <section.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                  {section.title}
                </h2>
              </div>
              <div className="flex items-start gap-2 text-lg text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="leading-relaxed font-medium">{section.principle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Chart Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-6 bg-brand-500 rounded-full"></span>
                    科学原理可视化
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 ml-4">数据不会骗人，看看科学怎么说</p>
                </div>
                <div className="h-64 w-full flex-grow">
                  <SectionCharts sectionId={section.id} data={section.chartData} />
                </div>
                <div className="mt-6 bg-brand-50 p-4 rounded-xl text-sm text-brand-800 font-medium">
                  💡 图表解读：{section.chartDescription}
                </div>
              </div>

              {/* Actions Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-6 bg-accent-500 rounded-full"></span>
                    立即行动任务 (Action Items)
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 ml-4">光看不练假把式，今天就开始试一试</p>
                </div>
                <ul className="space-y-6">
                  {section.actions.map((action, idx) => (
                    <li key={idx} className="relative pl-4 border-l-2 border-slate-100 hover:border-brand-300 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        <strong className="text-lg text-slate-800">{action.title}</strong>
                      </div>
                      
                      <p className="text-slate-600 mb-3 pl-8 text-sm leading-relaxed">
                        {action.desc}
                      </p>
                      
                      {/* Outcome Badge */}
                      <div className="ml-8 flex items-start gap-2 bg-green-50 p-3 rounded-lg border border-green-100">
                        <Trophy className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-bold text-green-700">
                          收益：{action.expectedOutcome}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Reference */}
            <div className="text-center opacity-50 hover:opacity-100 transition-opacity">
              <p className="text-xs text-slate-400 font-mono">
                科学来源: {section.reference}
              </p>
            </div>
          </div>
        );
      default:
        return <Hero onStart={() => handleNavigate('dashboard')} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar 
          activeView={activeView} 
          activeSectionId={selectedSectionId} 
          onNavigate={handleNavigate} 
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden h-16 bg-white border-b border-slate-200 flex items-center px-4 flex-shrink-0">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-slate-600">
            <Menu />
          </button>
          <span className="ml-4 font-bold text-slate-800">JHOP 逐优指南</span>
        </div>

        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>

      {/* Modals */}
      {isAssessmentOpen && (
        <AssessmentModal onClose={() => setIsAssessmentOpen(false)} />
      )}
    </div>
  );
};

export default App;