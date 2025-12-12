import React from 'react';
import { ArrowRight, Brain, Rocket } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-full flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-slate-50 to-brand-50">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="z-10 max-w-2xl">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Rocket className="w-14 h-14 text-brand-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
          你的学习<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">外挂系统</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-slate-600 mb-8 mt-4">
          JHOP: 初中生学习逐优指南
        </h2>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto">
          学习不该是痛苦的死记硬背。<br/>
          掌握脑科学的“作弊代码”，用更少的时间，<br/>
          换取更高的分数和更强的自信。
        </p>
        
        <button 
          onClick={onStart}
          className="group inline-flex items-center px-8 py-4 bg-brand-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-brand-700 hover:shadow-brand-500/30 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-200"
        >
          启动系统
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="mt-6 text-sm text-slate-400">
          基于艾宾浩斯曲线、心流理论与神经科学
        </p>
      </div>
    </div>
  );
};