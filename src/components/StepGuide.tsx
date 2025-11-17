import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { brewingMethods } from '../data/brewingMethods';
import Timer from './Timer';

interface StepGuideProps {
  method: string;
}

export default function StepGuide({ method }: StepGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const brewMethod = brewingMethods[method];

  if (!brewMethod) {
    return <div>Method not found</div>;
  }

  const nextStep = () => {
    if (currentStep < brewMethod.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = brewMethod.steps[currentStep];
  const progress = ((currentStep + 1) / brewMethod.steps.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header with Recipe Summary */}
      <motion.div
        className="card-coffee p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-coffee-espresso mb-4">
              Recipe Summary
            </h2>
            <div className="space-y-2 text-coffee-medium">
              <p><strong>Coffee:</strong> {brewMethod.recipe.coffee}</p>
              {brewMethod.recipe.water && <p><strong>Water:</strong> {brewMethod.recipe.water}</p>}
              <p><strong>Ratio:</strong> {brewMethod.recipe.ratio}</p>
              <p><strong>Grind Size:</strong> {brewMethod.recipe.grindSize}</p>
              {brewMethod.recipe.temperature && <p><strong>Temperature:</strong> {brewMethod.recipe.temperature}</p>}
              {brewMethod.recipe.pressure && <p><strong>Pressure:</strong> {brewMethod.recipe.pressure}</p>}
              {brewMethod.recipe.yield && <p><strong>Yield:</strong> {brewMethod.recipe.yield}</p>}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-coffee-espresso mb-4">
              Equipment Needed
            </h3>
            <ul className="space-y-1 text-coffee-medium">
              {brewMethod.equipment.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-coffee-medium rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-coffee-medium">
            Step {currentStep + 1} of {brewMethod.steps.length}
          </span>
          <span className="text-sm text-coffee-medium">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-coffee-light/20 rounded-full h-3">
          <motion.div
            className="bg-coffee-medium h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Current Step */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          className="card-coffee p-8 mb-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-coffee-medium text-coffee-cream rounded-full flex items-center justify-center text-xl font-bold mr-4">
              {currentStepData.id}
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-coffee-espresso">
                {currentStepData.title}
              </h3>
              <p className="text-coffee-medium">{currentStepData.description}</p>
            </div>
          </div>

          {/* Timer if step has duration */}
          {currentStepData.duration && (
            <div className="mb-6">
              <Timer
                duration={currentStepData.duration}
                onComplete={nextStep}
              />
            </div>
          )}

          {/* Instructions */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-coffee-espresso mb-3">Instructions:</h4>
            <ol className="space-y-2">
              {currentStepData.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-coffee-light text-coffee-espresso rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-coffee-medium">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tips */}
          {currentStepData.tips && currentStepData.tips.length > 0 && (
            <div className="bg-coffee-light/10 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-coffee-espresso mb-2">💡 Tips:</h4>
              <ul className="space-y-1">
                {currentStepData.tips.map((tip, index) => (
                  <li key={index} className="text-coffee-medium text-sm">• {tip}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <motion.button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="btn-coffee disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          ← Previous
        </motion.button>

        <span className="text-coffee-medium">
          Step {currentStep + 1} of {brewMethod.steps.length}
        </span>

        <motion.button
          onClick={nextStep}
          disabled={currentStep === brewMethod.steps.length - 1}
          className="btn-coffee disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Next →
        </motion.button>
      </div>
    </div>
  );
}
