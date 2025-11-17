import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'motion/react';

interface TimerProps {
  duration?: number; // in seconds
  onComplete?: () => void;
  className?: string;
}

export default function Timer({ duration = 0, onComplete, className = '' }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const pausedTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  const startTimer = useCallback(() => {
    if (isPaused) {
      // Resume from paused state
      startTimeRef.current = Date.now() - pausedTimeRef.current * 1000;
    } else {
      // Start fresh
      startTimeRef.current = Date.now();
      pausedTimeRef.current = 0;
    }
    setIsRunning(true);
    setIsPaused(false);
  }, [isPaused]);

  const pauseTimer = useCallback(() => {
    if (startTimeRef.current !== null) {
      pausedTimeRef.current = duration - timeLeft;
    }
    setIsPaused(true);
    setIsRunning(false);
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, [duration, timeLeft]);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(duration);
    startTimeRef.current = null;
    pausedTimeRef.current = 0;
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, [duration]);

  useEffect(() => {
    if (isRunning && startTimeRef.current !== null) {
      const updateTimer = () => {
        const elapsed = (Date.now() - startTimeRef.current!) / 1000;
        const remaining = Math.max(0, duration - elapsed);
        
        setTimeLeft(remaining);

        if (remaining <= 0) {
          setIsRunning(false);
          onComplete?.();
          if (animationFrameRef.current !== null) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
          }
        } else {
          animationFrameRef.current = requestAnimationFrame(updateTimer);
        }
      };

      animationFrameRef.current = requestAnimationFrame(updateTimer);
    }

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isRunning, duration, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? ((duration - timeLeft) / duration) * 100 : 0;

  return (
    <div className={`bg-white rounded-lg p-6 shadow-lg border border-coffee-light/20 ${className}`}>
      <div className="text-center mb-4">
        <div className="text-4xl font-mono font-bold text-coffee-espresso mb-2">
          {formatTime(timeLeft)}
        </div>
        <div className="w-full bg-coffee-light/20 rounded-full h-2">
          <motion.div
            className="bg-coffee-medium h-2 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: 'linear' }}
          />
        </div>
      </div>

      <div className="flex gap-2 justify-center">
        {!isRunning && !isPaused && (
          <motion.button
            onClick={startTimer}
            disabled={duration === 0}
            className="btn-coffee disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Start
          </motion.button>
        )}

        {isRunning && (
          <motion.button
            onClick={pauseTimer}
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Pause
          </motion.button>
        )}

        {(isPaused || (isRunning && timeLeft === 0)) && (
          <motion.button
            onClick={startTimer}
            className="btn-coffee"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Resume
          </motion.button>
        )}

        <motion.button
          onClick={resetTimer}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Reset
        </motion.button>
      </div>
    </div>
  );
}
