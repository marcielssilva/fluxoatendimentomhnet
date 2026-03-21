import { motion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ProcessCardProps {
  title: string;
  steps: string[];
  icon?: React.ReactNode;
  color?: string;
}

export function ProcessCard({ title, steps, icon, color = 'blue' }: ProcessCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-900',
    green: 'bg-green-50 border-green-200 text-green-900',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    purple: 'bg-purple-50 border-purple-200 text-purple-900',
    red: 'bg-red-50 border-red-200 text-red-900',
  };

  const headerColorClasses = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    yellow: 'bg-yellow-100',
    purple: 'bg-purple-100',
    red: 'bg-red-100',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`border-2 rounded-lg overflow-hidden ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full p-4 flex items-center justify-between ${headerColorClasses[color as keyof typeof headerColorClasses] || headerColorClasses.blue} hover:opacity-80 transition-opacity`}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-semibold">{title}</span>
        </div>
        {isExpanded ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 space-y-3">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex-shrink-0 size-6 rounded-full bg-white border-2 border-current flex items-center justify-center text-xs font-semibold">
                {index + 1}
              </div>
              <p className="text-sm flex-1">{step}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
