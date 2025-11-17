import { motion } from 'motion/react';
import StepGuide from '../components/StepGuide';
import RatioCalculator from '../components/RatioCalculator';
import SidebarNav from '../components/SidebarNav';

export default function MokaPot() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581447355317-916971180cfa?w=1920&q=80&auto=format&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              Moka Pot Guide
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto mb-8 drop-shadow-md">
              Discover the classic Italian stovetop brewing method. Rich, bold coffee
              with that signature Moka pot crema - perfect for everyday brewing.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
                5-7 minutes
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
                Beginner
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
                Stovetop
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Wrapper - Contains all sections with sidebar */}
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar Navigation - Sticky throughout all sections, centered between left edge and content */}
            <div className="lg:col-span-3 hidden lg:block lg:pl-8">
              <div className="sticky top-16 pt-16">
                <SidebarNav
                  items={[
                    { id: 'about-method', label: 'About This Method' },
                    { id: 'science', label: 'The Science Behind' },
                    { id: 'step-guide', label: 'Step-by-Step Guide' },
                    { id: 'perfect-technique', label: 'Perfect Your Technique' },
                    { id: 'common-mistakes', label: 'Common Mistakes' },
                    { id: 'recipe-variations', label: 'Recipe Variations' }
                  ]}
                />
              </div>
            </div>
            <div className="lg:col-span-9 lg:pr-8">
              
      {/* About This Method Section */}
      <motion.section
        id="about-method"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coffee-light/10 via-coffee-cream to-coffee-light/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="card-coffee p-8"
          >
            <h2 className="text-3xl font-serif font-bold text-coffee-espresso mb-6">
              About the Moka Pot
            </h2>
            <div className="space-y-6 text-coffee-medium">
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Historical Background
                </h3>
                <p className="leading-relaxed">
                  Invented by Italian engineer Alfonso Bialetti in 1933, the Moka pot became an icon of 
                  Italian coffee culture. Its distinctive octagonal design and stovetop brewing method made 
                  espresso-like coffee accessible to Italian households. Today, it remains a beloved brewing 
                  method, producing rich, bold coffee that bridges the gap between drip coffee and espresso.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  When to Use This Method
                </h3>
                <p className="leading-relaxed mb-3">
                  The Moka pot is perfect for everyday brewing when you want strong, flavorful coffee without 
                  the complexity of other methods. Ideal for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Morning routines where you need consistent, bold coffee</li>
                  <li>Small kitchens without space for larger equipment</li>
                  <li>Those who prefer stronger, more concentrated coffee</li>
                  <li>Traditional Italian-style coffee lovers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Flavor Profile
                </h3>
                <p className="leading-relaxed">
                  Moka pot coffee is rich, full-bodied, and intense—stronger than drip coffee but not quite 
                  as concentrated as true espresso. It produces a bold, slightly bitter flavor with a 
                  characteristic crema-like foam. The method extracts more oils and solids than pour-over, 
                  resulting in a heavier mouthfeel and robust taste that stands up well to milk.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Best Coffee Beans
                </h3>
                <p className="leading-relaxed">
                  Medium to dark roasts work best with the Moka pot, as they complement the method's bold 
                  extraction. Italian-style blends, Brazilian coffees, and Central American beans with 
                  chocolate, caramel, and nutty notes are traditional favorites. The Moka pot's pressure 
                  extraction brings out the body and richness in these coffees, creating that classic 
                  Italian coffee experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* The Science Behind Section */}
      <motion.section
        id="science"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="card-coffee p-8"
          >
            <h2 className="text-3xl font-serif font-bold text-coffee-espresso mb-6">
              The Science Behind Moka Pot Brewing
            </h2>
            <div className="space-y-6 text-coffee-medium">
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Pressure Extraction
                </h3>
                <p className="leading-relaxed">
                  The Moka pot uses steam pressure (approximately 1.5 BAR) to force hot water through coffee 
                  grounds. As the bottom chamber heats, water turns to steam, creating pressure that pushes 
                  water up through the coffee bed and into the upper chamber. This pressure extraction is 
                  stronger than drip but gentler than espresso, creating a concentrated, full-bodied coffee 
                  with rich flavor and characteristic crema-like foam.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Heat Control
                </h3>
                <p className="leading-relaxed">
                  Heat management is the key to great Moka pot coffee. Medium heat builds pressure gradually, 
                  allowing even extraction. Too high heat creates excessive pressure, forcing water through 
                  too quickly and causing over-extraction and bitterness. Reducing heat once coffee starts 
                  flowing maintains steady pressure, ensuring complete but controlled extraction. The cold 
                  water trick stops extraction instantly, preventing bitter compounds from over-extracting.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Grind Size and Flow
                </h3>
                <p className="leading-relaxed">
                  Medium-fine grind (between drip and espresso) creates the right resistance for Moka pot 
                  extraction. The grind must be fine enough to slow water flow for complete extraction, but 
                  coarse enough to allow proper flow. Too fine clogs the filter and creates excessive pressure, 
                  while too coarse allows water to flow too quickly, resulting in weak, under-extracted coffee. 
                  Never tamp Moka pot coffee—the natural resistance of the grounds is sufficient.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Water Level and Safety
                </h3>
                <p className="leading-relaxed">
                  The safety valve is a critical component. Filling water above the valve creates dangerous 
                  pressure buildup. The correct water level (just below the valve) ensures safe operation 
                  while providing enough water for proper extraction. Hot water in the bottom chamber speeds 
                  up brewing and reduces the time coffee sits on heat, preventing over-extraction and burnt 
                  flavors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div id="step-guide">
              <StepGuide method="moka" />
            </div>
          </div>
          <div className="space-y-6">
            <RatioCalculator />

            {/* Heat Levels Guide */}
            <motion.div
              className="card-coffee p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-lg font-serif font-bold text-coffee-espresso mb-4">
                Heat Control
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-coffee-medium">Low</span>
                  <div className="flex-1 mx-4 bg-gradient-to-r from-blue-400 via-yellow-400 to-red-400 h-2 rounded-full"></div>
                  <span className="text-coffee-medium">High</span>
                </div>
                <div className="text-sm text-coffee-medium">
                  <p className="mb-2"><strong>Start:</strong> Medium heat to build pressure</p>
                  <p className="mb-2"><strong>During:</strong> Reduce to low-medium for steady flow</p>
                  <p><strong>Never:</strong> Use high heat - causes burning</p>
                </div>
              </div>
            </motion.div>

            {/* Safety Notes */}
            <motion.div
              className="card-coffee p-6 border-l-4 border-red-400"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-lg font-serif font-bold text-red-600 mb-4">
                Safety First
              </h3>
              <ul className="space-y-2 text-sm text-coffee-medium">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Never fill water above the safety valve
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Remove from heat when you hear loud hissing
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Handle with care - gets very hot
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Allow to cool completely before cleaning
                </li>
              </ul>
            </motion.div>

            {/* Tips Card */}
            <motion.div
              className="card-coffee p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-lg font-serif font-bold text-coffee-espresso mb-4">
                Pro Tips
              </h3>
              <ul className="space-y-3 text-sm text-coffee-medium">
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-2">•</span>
                  Use medium-fine grind (between drip and espresso)
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-2">•</span>
                  Don't tamp - just level the coffee
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-2">•</span>
                  Hot water speeds up brewing, but don't boil
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-2">•</span>
                  The characteristic gurgling sound means it's working
                </li>
              </ul>
            </motion.div>

            {/* Troubleshooting */}
            <motion.div
              className="card-coffee p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-lg font-serif font-bold text-coffee-espresso mb-4">
                Troubleshooting
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-coffee-espresso">No coffee comes out:</div>
                  <div className="text-coffee-medium">Check grind size or clean the filter</div>
                </div>
                <div>
                  <div className="font-medium text-coffee-espresso">Coffee tastes burnt:</div>
                  <div className="text-coffee-medium">Reduce heat or remove from stove sooner</div>
                </div>
                <div>
                  <div className="font-medium text-coffee-espresso">Weak coffee:</div>
                  <div className="text-coffee-medium">Use fresher coffee or increase dose</div>
                </div>
                <div>
                  <div className="font-medium text-coffee-espresso">Too bitter:</div>
                  <div className="text-coffee-medium">Grind coarser or use less coffee</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Perfect Your Technique Section */}
      <motion.section
        id="perfect-technique"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coffee-light/10 via-coffee-cream to-coffee-light/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="card-coffee p-8 mb-8"
          >
            <h2 className="text-3xl font-serif font-bold text-coffee-espresso mb-6">
              Perfect Your Technique
            </h2>
            <div className="space-y-4 text-coffee-medium">
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Master Heat Control</h3>
                <p className="leading-relaxed">
                  Start with medium heat to build pressure gradually. Once coffee starts flowing, immediately 
                  reduce to low-medium. Watch the flow—it should be a steady, honey-colored stream. Adjust 
                  heat in real-time based on the flow rate.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Timing is Critical</h3>
                <p className="leading-relaxed">
                  Listen for the characteristic gurgling sound. When it becomes louder and the stream lightens 
                  in color, remove from heat immediately. Use the cold water trick to stop extraction instantly. 
                  Perfect timing prevents bitterness.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Grind Consistency</h3>
                <p className="leading-relaxed">
                  Medium-fine grind is crucial—too fine clogs and over-extracts, too coarse under-extracts. 
                  Level the coffee in the basket but never tamp. The natural resistance of properly ground 
                  coffee is sufficient for good extraction.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="common-mistakes"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="card-coffee p-8 mb-8"
          >
            <h2 className="text-3xl font-serif font-bold text-coffee-espresso mb-6">
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4 text-coffee-medium">
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Using High Heat</h3>
                <p className="leading-relaxed">
                  High heat creates excessive pressure, forcing water through too quickly and causing 
                  over-extraction and bitter coffee. Always use medium heat and reduce once coffee flows.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Tamping the Coffee</h3>
                <p className="leading-relaxed">
                  Never tamp Moka pot coffee! Tamping creates too much resistance, preventing proper flow 
                  and potentially causing dangerous pressure buildup. Just level the grounds.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Leaving on Heat Too Long</h3>
                <p className="leading-relaxed">
                  Leaving the Moka pot on heat after coffee finishes flowing continues extraction, creating 
                  bitter, burnt flavors. Remove from heat at the right moment and use cold water to stop 
                  extraction immediately.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="recipe-variations"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
            className="card-coffee p-8"
          >
            <h2 className="text-3xl font-serif font-bold text-coffee-espresso mb-6">
              Recipe Variations
            </h2>
            <div className="space-y-6 text-coffee-medium">
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Classic Italian Style</h3>
                <p className="leading-relaxed mb-2">
                  <strong>Coffee:</strong> 15-17g medium-dark roast<br/>
                  <strong>Water:</strong> Fill to safety valve<br/>
                  <strong>Grind:</strong> Medium-fine (between drip and espresso)<br/>
                  <strong>Heat:</strong> Medium, reduce when coffee flows
                </p>
                <p className="text-sm italic">
                  Traditional recipe producing rich, bold coffee with characteristic crema-like foam.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Lighter Roast Variation</h3>
                <p className="leading-relaxed mb-2">
                  <strong>Coffee:</strong> 17g light-medium roast<br/>
                  <strong>Water:</strong> Hot (not boiling) to safety valve<br/>
                  <strong>Grind:</strong> Slightly coarser than classic<br/>
                  <strong>Heat:</strong> Lower medium, remove earlier
                </p>
                <p className="text-sm italic">
                  Adapts the Moka pot for lighter roasts, preserving brightness while maintaining body.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Stronger Concentrate</h3>
                <p className="leading-relaxed mb-2">
                  <strong>Coffee:</strong> 18-20g dark roast<br/>
                  <strong>Water:</strong> Fill to just below safety valve<br/>
                  <strong>Grind:</strong> Medium-fine, slightly finer<br/>
                  <strong>Heat:</strong> Medium-low for slower extraction
                </p>
                <p className="text-sm italic">
                  Creates a more concentrated brew, closer to espresso strength, perfect for milk drinks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
