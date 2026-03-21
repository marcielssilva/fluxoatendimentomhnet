import { motion } from 'motion/react';
import { ChevronRight, Phone, ArrowRightLeft, Home, Lock, Wrench, CheckCircle, AlertCircle } from 'lucide-react';

export type NodeType = 'start' | 'decision' | 'process' | 'end' | 'transfer';

interface FlowchartNodeProps {
  title: string;
  description?: string;
  type?: NodeType;
  onClick?: () => void;
  isActive?: boolean;
  icon?: React.ReactNode;
}

export function FlowchartNode({ 
  title, 
  description, 
  type = 'process', 
  onClick, 
  isActive = false,
  icon 
}: FlowchartNodeProps) {
  const getNodeStyles = () => {
    switch (type) {
      case 'start':
        return 'bg-green-500 text-white rounded-full';
      case 'decision':
        return 'bg-yellow-500 text-gray-900 transform rotate-45';
      case 'process':
        return 'bg-blue-500 text-white rounded-lg';
      case 'transfer':
        return 'bg-purple-500 text-white rounded-lg';
      case 'end':
        return 'bg-gray-600 text-white rounded-full';
      default:
        return 'bg-blue-500 text-white rounded-lg';
    }
  };

  const getIcon = () => {
    if (icon) return icon;
    switch (type) {
      case 'start':
        return <Phone className="size-5" />;
      case 'transfer':
        return <ArrowRightLeft className="size-5" />;
      case 'end':
        return <CheckCircle className="size-5" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: onClick ? 1.05 : 1 }}
      whileTap={{ scale: onClick ? 0.95 : 1 }}
      onClick={onClick}
      className={`relative p-6 min-w-[200px] shadow-lg ${getNodeStyles()} ${onClick ? 'cursor-pointer' : ''} ${isActive ? 'ring-4 ring-white ring-offset-2' : ''} transition-all bg-[#2b83ff]`}
    >
      {type === 'decision' && (
        <div className="transform -rotate-45 flex flex-col items-center justify-center h-full">
          <div className="flex items-center gap-2 mb-1">
            {getIcon()}
            <span className="font-semibold text-sm">{title}</span>
          </div>
          {description && (
            <span className="text-xs opacity-90 text-center">{description}</span>
          )}
        </div>
      )}
      
      {type !== 'decision' && (
        <div className="flex flex-col items-center justify-center gap-2">
          {getIcon()}
          <span className="font-semibold text-sm text-center">{title}</span>
          {description && (
            <span className="text-xs opacity-90 text-center">{description}</span>
          )}
          {onClick && (
            <ChevronRight className="size-4 mt-1 opacity-75" />
          )}
        </div>
      )}
    </motion.div>
  );
}
