import { useState } from 'react';
import { motion } from 'motion/react';

export default function RatioCalculator() {
  const [coffee, setCoffee] = useState(20);
  const [ratio, setRatio] = useState(15);
  const water = coffee * ratio;

  return (
    <motion.div
      className="card-coffee p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h3 className="text-xl font-serif font-bold text-coffee-espresso mb-6">
        Ratio Calculator
      </h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-coffee-espresso mb-2">
            Coffee (grams)
          </label>
          <input
            type="range"
            min="10"
            max="30"
            value={coffee}
            onChange={(e) => setCoffee(Number(e.target.value))}
            className="w-full h-2 bg-coffee-light/20 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-coffee-medium mt-1">
            <span>10g</span>
            <span className="font-bold">{coffee}g</span>
            <span>30g</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-coffee-espresso mb-2">
            Coffee-to-Water Ratio (1:)
          </label>
          <input
            type="range"
            min="12"
            max="18"
            value={ratio}
            onChange={(e) => setRatio(Number(e.target.value))}
            className="w-full h-2 bg-coffee-light/20 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-coffee-medium mt-1">
            <span>1:12</span>
            <span className="font-bold">1:{ratio}</span>
            <span>1:18</span>
          </div>
        </div>

        <motion.div
          className="bg-coffee-light/10 rounded-lg p-4 text-center"
          key={`${coffee}-${ratio}`}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="text-3xl font-bold text-coffee-espresso mb-2">
            {water}ml
          </div>
          <div className="text-coffee-medium">
            Water needed for {coffee}g coffee at 1:{ratio} ratio
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
