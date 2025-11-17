import { motion } from 'motion/react';
import StepGuide from '../components/StepGuide';
import RatioCalculator from '../components/RatioCalculator';
import SidebarNav from '../components/SidebarNav';

export default function V60() {
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1548287914-44c700af2ed5?w=1920&q=80&auto=format&fit=crop)'
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
              V60 Pour-Over Guide
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto mb-8 drop-shadow-md">
              Master the art of single-cup pour-over brewing with James Hoffmann's technique.
              Perfect clarity, balanced extraction, and exceptional flavor.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
                3-4 minutes
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
                Intermediate
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
                Single cup
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
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coffee-cream via-coffee-light/10 to-coffee-cream"
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
              About the V60 Method
            </h2>
            <div className="space-y-6 text-coffee-medium">
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Historical Background
                </h3>
                <p className="leading-relaxed">
                  The Hario V60, introduced in 2004, revolutionized pour-over coffee brewing. Named for its 
                  60-degree cone angle, this Japanese design creates optimal water flow and extraction. The 
                  V60's spiral ribs and large single hole allow for precise control over brewing variables, 
                  making it a favorite among specialty coffee enthusiasts and professional baristas worldwide.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  When to Use This Method
                </h3>
                <p className="leading-relaxed mb-3">
                  The V60 excels when you want to highlight the nuanced flavors of high-quality, single-origin 
                  coffees. It's perfect for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Light to medium roasts that benefit from clarity and brightness</li>
                  <li>Single-cup brewing where precision matters</li>
                  <li>Experimentation with different brewing parameters</li>
                  <li>Coffees with complex flavor profiles you want to explore</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Flavor Profile
                </h3>
                <p className="leading-relaxed">
                  V60 brewing produces a clean, bright cup with exceptional clarity. The method emphasizes 
                  the coffee's inherent characteristics—floral notes, fruity acidity, and delicate sweetness. 
                  The result is a well-balanced, nuanced coffee that allows you to taste the subtle differences 
                  between origins and processing methods.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Best Coffee Beans
                </h3>
                <p className="leading-relaxed">
                  Light to medium roasts from Ethiopia, Kenya, Colombia, and Guatemala shine with the V60. 
                  Washed process coffees often show exceptional clarity, while natural process coffees can 
                  develop rich, fruity complexity. Avoid very dark roasts, as the V60's clarity can make 
                  bitterness more pronounced.
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
              The Science Behind V60 Brewing
            </h2>
            <div className="space-y-6 text-coffee-medium">
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Extraction Principles
                </h3>
                <p className="leading-relaxed">
                  The V60's 60-degree cone angle and spiral ribs create optimal water flow, allowing for 
                  even extraction across the coffee bed. As water flows through the grounds, it dissolves 
                  soluble compounds—sugars, acids, and oils—in a specific order. The bloom phase releases 
                  CO₂, allowing water to penetrate evenly. Subsequent pours maintain consistent water level, 
                  ensuring uniform extraction and preventing channeling.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Temperature Effects
                </h3>
                <p className="leading-relaxed">
                  Water temperature (93-96°C) is critical for optimal extraction. Too hot (&gt;96°C) extracts 
                  bitter compounds too quickly, while too cool (&lt;90°C) under-extracts, resulting in sour, 
                  weak coffee. The ideal temperature range extracts desirable compounds (fruity acids, 
                  sugars) while minimizing bitter tannins. The V60's design allows heat to dissipate 
                  gradually, maintaining consistent extraction temperature throughout the brew.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Grind Size Impact
                </h3>
                <p className="leading-relaxed">
                  Grind size directly affects extraction time and surface area. Medium-fine grind (table salt 
                  consistency) creates the perfect balance: fine enough for complete extraction, coarse enough 
                  to allow proper water flow. Too fine causes over-extraction and clogging, while too coarse 
                  leads to under-extraction and weak coffee. The V60's large single hole requires precise 
                  grind size to control flow rate and extraction time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Water Chemistry
                </h3>
                <p className="leading-relaxed">
                  Water quality significantly impacts flavor. Minerals like calcium and magnesium enhance 
                  extraction and flavor development, while chlorine and excessive hardness create off-flavors. 
                  The Specialty Coffee Association recommends water with 150mg/L total dissolved solids (TDS). 
                  Filtered water removes chlorine while preserving beneficial minerals, resulting in cleaner, 
                  more vibrant coffee flavors.
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
              <StepGuide method="v60" />
            </div>
          </div>
          <div className="space-y-6">
            <RatioCalculator />

            {/* Tips Card */}
            <motion.div
              className="card-coffee p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-lg font-serif font-bold text-coffee-espresso mb-4">
                Pro Tips
              </h3>
              <ul className="space-y-3 text-sm text-coffee-medium">
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-2">•</span>
                  Grind size affects extraction time. Too fine = slow, too coarse = fast.
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-2">•</span>
                  Water temperature: 93-96°C prevents bitterness.
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-2">•</span>
                  Bloom phase is crucial for degassing and flavor development.
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-2">•</span>
                  Pour in slow, concentric circles for even extraction.
                </li>
              </ul>
            </motion.div>

            {/* Troubleshooting */}
            <motion.div
              className="card-coffee p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-lg font-serif font-bold text-coffee-espresso mb-4">
                Troubleshooting
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-coffee-espresso">Too fast extraction:</div>
                  <div className="text-coffee-medium">Grind finer or increase coffee dose</div>
                </div>
                <div>
                  <div className="font-medium text-coffee-espresso">Too slow extraction:</div>
                  <div className="text-coffee-medium">Grind coarser or decrease coffee dose</div>
                </div>
                <div>
                  <div className="font-medium text-coffee-espresso">Bitter taste:</div>
                  <div className="text-coffee-medium">Lower water temperature or grind coarser</div>
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
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Master the Pour</h3>
                <p className="leading-relaxed">
                  Practice consistent circular motions, maintaining a steady pour rate. Start from the center 
                  and spiral outward, then back to center. Keep the pour height 2-3 inches above the coffee 
                  bed to ensure even saturation without disturbing the grounds.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Timing is Everything</h3>
                <p className="leading-relaxed">
                  Watch your timer closely. Each pour phase should happen at consistent intervals. If your 
                  total brew time is consistently off, adjust your grind size rather than changing your pour 
                  technique.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Water Level Management</h3>
                <p className="leading-relaxed">
                  Maintain a consistent water level throughout brewing. Don't let it drop too low between pours, 
                  but also avoid overfilling. The goal is steady, controlled extraction.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="common-mistakes"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
            className="card-coffee p-8 mb-8"
          >
            <h2 className="text-3xl font-serif font-bold text-coffee-espresso mb-6">
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4 text-coffee-medium">
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Rushing the Bloom</h3>
                <p className="leading-relaxed">
                  Don't skip or shorten the bloom phase. This crucial step allows CO₂ to escape and ensures 
                  even water penetration. A proper 30-45 second bloom dramatically improves extraction quality.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Inconsistent Pour Speed</h3>
                <p className="leading-relaxed">
                  Varying your pour speed creates uneven extraction. Practice maintaining a steady, controlled 
                  pour rate throughout all phases. Use a gooseneck kettle for better control.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Ignoring Water Temperature</h3>
                <p className="leading-relaxed">
                  Water that's too hot or too cool will ruin your brew. Always use a thermometer or kettle 
                  with temperature control. The 93-96°C range is critical for optimal extraction.
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
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Light Roast Recipe</h3>
                <p className="leading-relaxed mb-2">
                  <strong>Ratio:</strong> 1:16 (20g coffee : 320ml water)<br/>
                  <strong>Temperature:</strong> 96°C (205°F)<br/>
                  <strong>Grind:</strong> Medium-fine, slightly coarser than standard<br/>
                  <strong>Bloom:</strong> 40g water for 45 seconds<br/>
                  <strong>Total Time:</strong> 3.5-4 minutes
                </p>
                <p className="text-sm italic">
                  This recipe highlights the bright, fruity notes of light roasts with extended bloom time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Dark Roast Recipe</h3>
                <p className="leading-relaxed mb-2">
                  <strong>Ratio:</strong> 1:14 (20g coffee : 280ml water)<br/>
                  <strong>Temperature:</strong> 93°C (200°F)<br/>
                  <strong>Grind:</strong> Medium-fine, slightly finer than standard<br/>
                  <strong>Bloom:</strong> 40g water for 30 seconds<br/>
                  <strong>Total Time:</strong> 2.5-3 minutes
                </p>
                <p className="text-sm italic">
                  Lower temperature and shorter brew time prevent over-extraction of bitter compounds in dark roasts.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Iced Coffee Recipe</h3>
                <p className="leading-relaxed mb-2">
                  <strong>Ratio:</strong> 1:10 (30g coffee : 300ml water)<br/>
                  <strong>Temperature:</strong> 96°C (205°F)<br/>
                  <strong>Ice:</strong> 200g ice in carafe<br/>
                  <strong>Brew:</strong> Pour directly over ice, adjust grind finer to compensate for dilution
                </p>
                <p className="text-sm italic">
                  Stronger ratio compensates for ice dilution, creating a refreshing iced coffee with full flavor.
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
