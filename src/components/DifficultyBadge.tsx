import { motion } from 'motion/react';

interface DifficultyBadgeProps {
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  className?: string;
}

export default function DifficultyBadge({ difficulty, className = '' }: DifficultyBadgeProps) {
  const getDifficultyConfig = () => {
    switch (difficulty) {
      case 'Beginner':
        return {
          baseClasses: 'bg-green-100 text-green-800 border-green-200',
          hoverClasses: 'bg-green-200 text-green-900 border-green-300',
          shadowColor: 'rgba(34, 197, 94, 0.25)',
          scale: 1.08,
          springConfig: { stiffness: 300, damping: 20 },
          glowIntensity: 0.3
        };
      case 'Intermediate':
        return {
          baseClasses: 'bg-yellow-100 text-yellow-800 border-yellow-200',
          hoverClasses: 'bg-yellow-200 text-yellow-900 border-yellow-300',
          shadowColor: 'rgba(245, 158, 11, 0.3)',
          scale: 1.12,
          springConfig: { stiffness: 350, damping: 18 },
          glowIntensity: 0.4
        };
      case 'Advanced':
        return {
          baseClasses: 'bg-red-100 text-red-800 border-red-200',
          hoverClasses: 'bg-red-200 text-red-900 border-red-300',
          shadowColor: 'rgba(239, 68, 68, 0.35)',
          scale: 1.15,
          springConfig: { stiffness: 400, damping: 15 },
          glowIntensity: 0.5
        };
    }
  };

  const config = getDifficultyConfig();

  return (
    <motion.span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border-2 transition-colors duration-200 ${config.baseClasses} ${className}`}
      whileHover={{
        scale: config.scale,
        boxShadow: `0 0 20px ${config.shadowColor}, 0 8px 25px -5px ${config.shadowColor}`,
        borderColor: config.hoverClasses.split(' ')[2]
      }}
      whileTap={{ scale: config.scale * 0.95 }}
      transition={{
        type: "spring",
        ...config.springConfig,
        boxShadow: { duration: 0.3 }
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <motion.span
        className="relative z-10"
        whileHover={{
          textShadow: `0 0 8px ${config.shadowColor}`
        }}
        transition={{ duration: 0.2 }}
      >
        {difficulty}
      </motion.span>
    </motion.span>
  );
}
