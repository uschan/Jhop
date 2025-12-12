import React from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

interface SectionChartsProps {
  sectionId: string;
  data: any[];
}

export const SectionCharts: React.FC<SectionChartsProps> = ({ sectionId, data }) => {
  if (sectionId === 'memory') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="day" label={{ value: '天数', position: 'insideBottomRight', offset: -5 }} stroke="#64748b" fontSize={12} />
          <YAxis label={{ value: '记忆保留 %', angle: -90, position: 'insideLeft' }} stroke="#64748b" fontSize={12} />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend />
          <Line type="monotone" dataKey="review" name="科学复习" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="noReview" name="无复习" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (sectionId === 'focus') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="time" label={{ value: '分钟', position: 'insideBottomRight', offset: -5 }} stroke="#64748b" fontSize={12} />
          <YAxis hide />
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
          <defs>
            <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="energy" name="专注深度" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorEnergy)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  if (sectionId === 'strategy') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="week" label={{ value: '周', position: 'insideBottomRight', offset: -5 }} stroke="#64748b" fontSize={12} />
          <YAxis domain={[50, 100]} stroke="#64748b" fontSize={12} />
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
          <Legend />
          <Line type="monotone" dataKey="deliberate" name="刻意练习 (复盘)" stroke="#10b981" strokeWidth={3} />
          <Line type="monotone" dataKey="blind" name="盲目刷题" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (sectionId === 'physio') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="label" stroke="#64748b" fontSize={12} />
          <YAxis domain={[0, 100]} stroke="#64748b" fontSize={12} />
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
          <Legend />
          <Bar dataKey="fullSleep" name="8小时睡眠" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          <Bar dataKey="shortSleep" name="6小时睡眠" fill="#94a3b8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  
  if (sectionId === 'mindset') {
      return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="stress" stroke="#64748b" fontSize={12} />
          <YAxis stroke="#64748b" fontSize={12} />
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
          <Line type="monotone" dataKey="performance" name="表现水平" stroke="#ec4899" strokeWidth={3} dot={{r: 6}} />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return <div>No Chart Data</div>;
};