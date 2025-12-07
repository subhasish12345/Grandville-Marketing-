/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Activity, Cpu, BarChart2, BookOpen, Award, CheckCircle } from 'lucide-react';

// --- MODULE TRACKER (formerly Surface Code) ---
export const SurfaceCodeDiagram: React.FC = () => {
  // 3x3 grid of Modules
  // Checkers represent Assessments/Milestones
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  
  // Map Module Index (0-8) to Assessments (0-3)
  const adjacency: Record<number, number[]> = {
    0: [0, 1],
    1: [0, 2],
    2: [1, 3],
    3: [2, 3],
    4: [0, 1, 2, 3], // Center module affects all assessments
  };

  const toggleModule = (id: number) => {
    setCompletedModules(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  // Calculate active assessments based on parity/completion
  const activeAssessments = [0, 1, 2, 3].filter(stabId => {
    let count = 0;
    Object.entries(adjacency).forEach(([modId, assIds]) => {
        if (completedModules.includes(parseInt(modId)) && assIds.includes(stabId)) {
            count++;
        }
    });
    // Arbitrary logic: Light up assessment if related modules are interacted with (Odd number logic preserved for visual fun)
    return count % 2 !== 0;
  });

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-stone-200 my-8">
      <h3 className="font-serif text-xl mb-4 text-stone-800">Interactive: Module Tracker</h3>
      <p className="text-sm text-stone-500 mb-6 text-center max-w-md">
        Click the grey <strong>Teaching Modules</strong> to mark them complete. Watch the colored <strong>Milestone Indicators</strong> light up as you progress.
      </p>
      
      <div className="relative w-64 h-64 bg-[#F5F4F0] rounded-lg border border-stone-200 p-4 flex flex-wrap justify-between content-between relative">
         {/* Grid Lines */}
         <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
            <div className="w-2/3 h-2/3 border border-stone-400"></div>
            <div className="absolute w-full h-[1px] bg-stone-400"></div>
            <div className="absolute h-full w-[1px] bg-stone-400"></div>
         </div>

         {/* Assessments (Blue=Pedagogy, Red=Tech) */}
         {[
             {id: 0, x: '50%', y: '20%', type: 'P', color: 'bg-blue-500'},
             {id: 1, x: '20%', y: '50%', type: 'T', color: 'bg-red-500'},
             {id: 2, x: '80%', y: '50%', type: 'T', color: 'bg-red-500'},
             {id: 3, x: '50%', y: '80%', type: 'P', color: 'bg-blue-500'},
         ].map(stab => (
             <motion.div
                key={`stab-${stab.id}`}
                className={`absolute w-10 h-10 -ml-5 -mt-5 flex items-center justify-center text-white text-xs font-bold rounded-sm shadow-sm transition-all duration-300 ${activeAssessments.includes(stab.id) ? stab.color + ' opacity-100 scale-110 ring-4 ring-offset-2 ring-stone-200' : 'bg-stone-300 opacity-40'}`}
                style={{ left: stab.x, top: stab.y }}
             >
                 {stab.type}
             </motion.div>
         ))}

         {/* Modules */}
         {[
             {id: 0, x: '20%', y: '20%'}, {id: 1, x: '80%', y: '20%'},
             {id: 4, x: '50%', y: '50%'}, // Center
             {id: 2, x: '20%', y: '80%'}, {id: 3, x: '80%', y: '80%'},
         ].map(q => (
             <button
                key={`data-${q.id}`}
                onClick={() => toggleModule(q.id)}
                className={`absolute w-8 h-8 -ml-4 -mt-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 z-10 ${completedModules.includes(q.id) ? 'bg-stone-800 border-stone-900 text-nobel-gold' : 'bg-white border-stone-300 hover:border-stone-500'}`}
                style={{ left: q.x, top: q.y }}
             >
                {completedModules.includes(q.id) && <CheckCircle size={14} />}
             </button>
         ))}
      </div>

      <div className="mt-6 flex items-center gap-4 text-xs font-mono text-stone-500">
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-stone-800"></div> Complete</div>
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-blue-500"></div> Pedagogy</div>
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-red-500"></div> Tech</div>
      </div>
      
      <div className="mt-4 h-6 text-sm font-serif italic text-stone-600">
        {completedModules.length === 0 ? "Start your training." : `Active progress in ${activeAssessments.length} competency areas.`}
      </div>
    </div>
  );
};

// --- CERTIFICATION PROCESS (formerly Transformer) ---
export const TransformerDecoderDiagram: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setStep(s => (s + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-8 bg-[#F5F4F0] rounded-xl border border-stone-200 my-8">
      <h3 className="font-serif text-xl mb-4 text-stone-900">Certification Pathway</h3>
      <p className="text-sm text-stone-600 mb-6 text-center max-w-md">
        The journey from syllabus to official recognition involves rigorous training and assessment layers.
      </p>

      <div className="relative w-full max-w-lg h-56 bg-white rounded-lg shadow-inner overflow-hidden mb-6 border border-stone-200 flex items-center justify-center gap-8 p-4">
        
        {/* Input Stage: Syllabus */}
        <div className="flex flex-col items-center gap-2">
            <div className={`w-16 h-16 rounded-lg border-2 flex flex-col items-center justify-center transition-colors duration-500 ${step === 0 ? 'border-nobel-gold bg-nobel-gold/10' : 'border-stone-200 bg-stone-50'}`}>
                <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => <div key={i} className={`w-2 h-2 rounded-full ${Math.random() > 0.7 ? 'bg-stone-800' : 'bg-stone-300'}`}></div>)}
                </div>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">Syllabus</span>
        </div>

        {/* Arrows */}
        <motion.div animate={{ opacity: step >= 1 ? 1 : 0.3, x: step >= 1 ? 0 : -5 }}>→</motion.div>

        {/* Training Stage (formerly Transformer) */}
        <div className="flex flex-col items-center gap-2">
             <div className={`w-24 h-24 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-colors duration-500 relative overflow-hidden ${step === 1 || step === 2 ? 'border-stone-800 bg-stone-900 text-white' : 'border-stone-200 bg-stone-50'}`}>
                <BookOpen size={24} className={step === 1 || step === 2 ? 'text-nobel-gold animate-pulse' : 'text-stone-300'} />
                {step === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-[1px] bg-nobel-gold absolute top-1/3 animate-ping"></div>
                        <div className="w-full h-[1px] bg-nobel-gold absolute top-2/3 animate-ping delay-75"></div>
                    </div>
                )}
             </div>
             <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">Training</span>
        </div>

        {/* Arrows */}
        <motion.div animate={{ opacity: step >= 3 ? 1 : 0.3, x: step >= 3 ? 0 : -5 }}>→</motion.div>

        {/* Output Stage: Certified */}
        <div className="flex flex-col items-center gap-2">
            <div className={`w-16 h-16 rounded-lg border-2 flex flex-col items-center justify-center transition-colors duration-500 ${step === 3 ? 'border-green-500 bg-green-50' : 'border-stone-200 bg-stone-50'}`}>
                {step === 3 ? (
                    <Award className="text-green-600" size={32} />
                ) : (
                    <span className="text-2xl font-serif text-stone-300">?</span>
                )}
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">Qualified</span>
        </div>

      </div>

      <div className="flex gap-2">
          {[0, 1, 2, 3].map(s => (
              <div key={s} className={`h-1 rounded-full transition-all duration-300 ${step === s ? 'w-8 bg-nobel-gold' : 'w-2 bg-stone-300'}`}></div>
          ))}
      </div>
    </div>
  );
};

// --- NETWORK GROWTH CHART (formerly Performance) ---
export const PerformanceMetricDiagram: React.FC = () => {
    // 0: Campuses, 1: Faculty, 2: Schools
    const [metric, setMetric] = useState<0 | 1 | 2>(1);
    
    // Data Structure: { current: number, previous: number, label: string }
    const data = {
        0: { prev: 12, current: 16, label: "Campuses" },
        1: { prev: 2000, current: 2500, label: "Faculty Trained" },
        2: { prev: 30, current: 45, label: "Partner Schools" } 
    };

    const currentData = data[metric];
    // Normalize for bar height
    const maxVal = currentData.current * 1.2;
    
    const formatValue = (val: number) => {
        return val.toLocaleString();
    }

    return (
        <div className="flex flex-col md:flex-row gap-8 items-center p-8 bg-stone-900 text-stone-100 rounded-xl my-8 border border-stone-800 shadow-lg">
            <div className="flex-1 min-w-[240px]">
                <h3 className="font-serif text-xl mb-2 text-nobel-gold">Network Expansion</h3>
                <p className="text-stone-400 text-sm mb-4 leading-relaxed">
                    GrandVile Marketing consistently expands its reach, ensuring educational excellence is accessible across the Apollo ecosystem.
                </p>
                <div className="flex gap-2 mt-6">
                    <button 
                        onClick={() => setMetric(0)} 
                        className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 border ${metric === 0 ? 'bg-nobel-gold text-stone-900 border-nobel-gold' : 'bg-transparent text-stone-400 border-stone-700 hover:border-stone-500 hover:text-stone-200'}`}
                    >
                        Campuses
                    </button>
                    <button 
                        onClick={() => setMetric(1)} 
                        className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 border ${metric === 1 ? 'bg-nobel-gold text-stone-900 border-nobel-gold' : 'bg-transparent text-stone-400 border-stone-700 hover:border-stone-500 hover:text-stone-200'}`}
                    >
                        Faculty
                    </button>
                    <button 
                        onClick={() => setMetric(2)} 
                        className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 border ${metric === 2 ? 'bg-nobel-gold text-stone-900 border-nobel-gold' : 'bg-transparent text-stone-400 border-stone-700 hover:border-stone-500 hover:text-stone-200'}`}
                    >
                        Schools
                    </button>
                </div>
                <div className="mt-6 font-mono text-xs text-stone-500 flex items-center gap-2">
                    <BarChart2 size={14} className="text-nobel-gold" /> 
                    <span>YEAR OVER YEAR GROWTH</span>
                </div>
            </div>
            
            <div className="relative w-64 h-72 bg-stone-800/50 rounded-xl border border-stone-700/50 p-6 flex justify-around items-end">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-10">
                   <div className="w-full h-[1px] bg-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-400"></div>
                </div>

                {/* Previous Year Bar */}
                <div className="w-20 flex flex-col justify-end items-center h-full z-10">
                    <div className="flex-1 w-full flex items-end justify-center relative mb-3">
                        <div className="absolute -top-5 w-full text-center text-sm font-mono text-stone-400 font-bold bg-stone-900/90 py-1 px-2 rounded backdrop-blur-sm border border-stone-700/50 shadow-sm">{formatValue(currentData.prev)}</div>
                        <motion.div 
                            className="w-full bg-stone-600 rounded-t-md border-t border-x border-stone-500/30"
                            initial={{ height: 0 }}
                            animate={{ height: `${(currentData.prev / maxVal) * 100}%` }}
                            transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        />
                    </div>
                    <div className="h-6 flex items-center text-xs font-bold text-stone-500 uppercase tracking-wider">2024</div>
                </div>

                {/* Current Year Bar */}
                <div className="w-20 flex flex-col justify-end items-center h-full z-10">
                     <div className="flex-1 w-full flex items-end justify-center relative mb-3">
                        <div className="absolute -top-5 w-full text-center text-sm font-mono text-nobel-gold font-bold bg-stone-900/90 py-1 px-2 rounded backdrop-blur-sm border border-nobel-gold/30 shadow-sm">{formatValue(currentData.current)}</div>
                        <motion.div 
                            className="w-full bg-nobel-gold rounded-t-md shadow-[0_0_20px_rgba(197,160,89,0.25)] relative overflow-hidden"
                            initial={{ height: 0 }}
                            animate={{ height: Math.max(1, (currentData.current / maxVal) * 100) + '%' }}
                            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
                        >
                           {/* Shine effect */}
                           <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20"></div>
                        </motion.div>
                    </div>
                     <div className="h-6 flex items-center text-xs font-bold text-nobel-gold uppercase tracking-wider">2025</div>
                </div>
            </div>
        </div>
    )
}