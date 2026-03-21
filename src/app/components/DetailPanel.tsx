import { motion, AnimatePresence } from 'motion/react';
import { X, Info } from 'lucide-react';

interface DetailPanelProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function DetailPanel({ title, content, isOpen, onClose }: DetailPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          
          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-blue-600 text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Info className="size-6" />
                <h2 className="text-xl font-semibold">{title}</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {content}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
