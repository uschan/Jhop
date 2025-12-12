import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface BreathingToolProps {
  onClose: () => void;
}

type Phase = 'Inhale' | 'Hold' | 'Exhale' | 'Ready';

export const BreathingTool: React.FC<BreathingToolProps> = ({ onClose }) => {
  const [phase, setPhase] = useState<Phase>('Ready');
  const [text, setText] = useState('点击开始 (Click to Start)');
  const [scale, setScale] = useState(1);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isActive) {
      const runCycle = () => {
        // Inhale (4s)
        setPhase('Inhale');
        setText('深吸气 (Inhale)');
        setScale(1.5);
        
        timeout = setTimeout(() => {
          // Hold (4s) - Simplified box breathing or 4-7-8, using 4-4-4 for visual simplicity here or 4-2-6 for calm
          // Let's use a simple calm cycle: Inhale 4, Visualize 2, Exhale 6
          setPhase('Hold');
          setText('想象成功画面 (Visualize)');
          setScale(1.5); // Stay expanded
          
          timeout = setTimeout(() => {
            // Exhale (6s)
            setPhase('Exhale');
            setText('缓慢呼气 (Exhale)');
            setScale(1);
            
            timeout = setTimeout(() => {
              runCycle(); // Loop
            }, 6000);
          }, 2000); // Hold for 2s
        }, 4000); // Inhale for 4s
      };

      runCycle();
    }

    return () => clearTimeout(timeout);
  }, [isActive]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-20"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="relative z-10 text-center">
        {!isActive ? (
          <button 
            onClick={() => setIsActive(true)}
            className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white text-xl font-bold rounded-full shadow-lg shadow-teal-500/30 transition-all transform hover:scale-105"
          >
            开始考前定心
          </button>
        ) : (
          <h2 className="text-3xl font-light text-white tracking-widest animate-fade-in transition-all duration-500">
            {text}
          </h2>
        )}
      </div>

      {/* Breathing Circle Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="w-64 h-64 bg-teal-500/30 rounded-full blur-3xl transition-all ease-in-out will-change-transform"
          style={{ 
            transform: `scale(${scale})`,
            transitionDuration: phase === 'Inhale' ? '4000ms' : phase === 'Exhale' ? '6000ms' : '2000ms'
          }}
        />
        <div 
          className="absolute w-48 h-48 bg-teal-400/40 rounded-full mix-blend-screen transition-all ease-in-out will-change-transform"
          style={{ 
             transform: `scale(${scale * 0.8})`,
             transitionDuration: phase === 'Inhale' ? '4000ms' : phase === 'Exhale' ? '6000ms' : '2000ms'
          }}
        />
      </div>

      <div className="absolute bottom-10 text-white/30 text-sm">
        考前一分钟使用，激活副交感神经，降低皮质醇。
      </div>
    </div>
  );
};