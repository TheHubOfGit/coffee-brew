import { motion } from 'motion/react';
import DifficultyBadge from './DifficultyBadge';

interface MethodCardProps {
  title: string;
  description: string;
  image: string;
  time: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export default function MethodCard({ title, description, image, time, difficulty }: MethodCardProps) {
  return (
    <motion.div
      className="card-coffee cursor-pointer group min-h-[400px] flex flex-col"
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-t-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-video bg-gradient-to-br from-coffee-light to-coffee-medium relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="absolute top-4 right-4">
          <DifficultyBadge difficulty={difficulty} />
        </div>
      </motion.div>
      <div className="p-6 flex flex-col flex-1">
        <motion.h3
          className="text-xl font-serif font-bold text-coffee-espresso mb-2 group-hover:text-coffee-medium transition-colors"
          layoutId={`title-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {title}
        </motion.h3>
        <p className="text-coffee-medium mb-4 flex-1">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-coffee-dark">
            {time}
          </span>
          <span className="text-coffee-medium group-hover:text-coffee-dark transition-colors">
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
}
