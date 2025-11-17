import { motion } from 'motion/react';
import StepGuide from '../components/StepGuide';
import RatioCalculator from '../components/RatioCalculator';
import SidebarNav from '../components/SidebarNav';

export default function FlairEspresso() {
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1920&q=80&fit=crop)'
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
              Flair Espresso Guide
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto mb-8 drop-shadow-md">
              Master precision manual espresso brewing with the Flair Signature.
              Consistent pressure, perfect extraction, barista-quality results at home.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
                2-3 minutes
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
                Advanced
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
                6-9 BAR pressure
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
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coffee-espresso/5 via-coffee-dark/5 to-coffee-cream"
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
              About Manual Lever Espresso
            </h2>
            <div className="space-y-6 text-coffee-medium">
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Historical Background
                </h3>
                <p className="leading-relaxed">
                  Manual lever espresso machines date back to the 1940s, when they revolutionized coffee 
                  service in Italian cafes. The Flair Espresso maker brings this classic technique into 
                  the modern home, offering complete control over pressure and extraction. Unlike pump-driven 
                  machines, lever espresso allows you to feel and respond to the coffee's resistance, creating 
                  a truly hands-on brewing experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  When to Use This Method
                </h3>
                <p className="leading-relaxed mb-3">
                  Manual lever espresso is ideal when you want barista-quality espresso at home without 
                  the cost of a commercial machine. Perfect for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Espresso enthusiasts who want complete control over extraction</li>
                  <li>Those who enjoy the ritual and craft of manual brewing</li>
                  <li>Small spaces where a full espresso machine isn't practical</li>
                  <li>Learning the fundamentals of espresso extraction</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Flavor Profile
                </h3>
                <p className="leading-relaxed">
                  Well-pulled lever espresso produces a rich, full-bodied shot with a beautiful crema. 
                  The manual control allows you to extract complex flavors—from bright, fruity notes to 
                  deep, chocolatey richness. The ability to adjust pressure throughout the shot means you 
                  can emphasize different flavor compounds, creating a truly personalized espresso experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Best Coffee Beans
                </h3>
                <p className="leading-relaxed">
                  Medium to dark roasts work excellently with manual lever espresso, as they develop the 
                  rich, syrupy body and crema that define great espresso. Italian-style blends, Brazilian 
                  coffees, and Central American beans with chocolate and nutty notes are traditional favorites. 
                  However, lighter roasts can also shine when ground appropriately and pulled with care.
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
              The Science Behind Espresso Extraction
            </h2>
            <div className="space-y-6 text-coffee-medium">
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Pressure and Extraction
                </h3>
                <p className="leading-relaxed">
                  Espresso uses 6-9 BAR of pressure to force hot water through finely ground coffee in 
                  25-35 seconds. This high pressure extracts compounds that normal brewing cannot, creating 
                  the rich, concentrated shot with crema. Pressure compresses the coffee bed, creating 
                  resistance that slows water flow, allowing for complete extraction of oils, sugars, and 
                  aromatic compounds. The manual lever gives you direct control over pressure, letting you 
                  feel the coffee's resistance and adjust accordingly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Temperature Control
                </h3>
                <p className="leading-relaxed">
                  Consistent temperature (198-208°F) is crucial for espresso. Preheating components prevents 
                  temperature loss during extraction, which would result in under-extraction and sour shots. 
                  The brew head must maintain heat to extract compounds evenly. Temperature too high extracts 
                  bitter compounds, while too low creates sour, under-extracted coffee. Manual lever machines 
                  require careful preheating to achieve temperature stability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Grind Size and Tamping
                </h3>
                <p className="leading-relaxed">
                  Espresso requires very fine grind (finer than table salt) to create resistance. The fine 
                  particles pack tightly, slowing water flow and ensuring complete extraction. Even tamping 
                  is critical—uneven pressure creates channels where water flows too quickly, causing 
                  under-extraction in some areas and over-extraction in others. The 15-20 lb tamp pressure 
                  creates uniform density, allowing even water distribution and consistent extraction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-coffee-espresso mb-3">
                  Crema Formation
                </h3>
                <p className="leading-relaxed">
                  Crema—the golden-brown foam on top of espresso—forms when CO₂ released during extraction 
                  combines with coffee oils and emulsifies under pressure. Good crema indicates proper 
                  extraction, fresh beans, and correct grind size. The crema contains aromatic compounds 
                  and contributes to espresso's rich mouthfeel. Manual lever control allows you to adjust 
                  pressure to optimize crema formation.
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
              <StepGuide method="flair" />
            </div>
          </div>
          <div className="space-y-6">
            <RatioCalculator />

            {/* Pressure Guide */}
            <motion.div
              className="card-coffee p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-lg font-serif font-bold text-coffee-espresso mb-4">
                Pressure Guide
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-coffee-medium">Low (6 BAR)</span>
                  <div className="flex-1 mx-4 bg-gradient-to-r from-green-400 to-yellow-400 h-2 rounded-full"></div>
                  <span className="text-coffee-medium">High (9 BAR)</span>
                </div>
                <div className="text-sm text-coffee-medium">
                  <p className="mb-2"><strong>6-7 BAR:</strong> Brighter, more acidic shots</p>
                  <p className="mb-2"><strong>7-8 BAR:</strong> Balanced extraction</p>
                  <p><strong>8-9 BAR:</strong> Richer, fuller-bodied shots</p>
                </div>
              </div>
            </motion.div>

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
                  Preheat everything! Consistent temperature is key.
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-2">•</span>
                  Tamp evenly with moderate pressure (about 30 lbs).
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-2">•</span>
                  Steady lever pressure prevents channeling.
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-2">•</span>
                  25-35 seconds is the sweet spot for extraction time.
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
                  <div className="font-medium text-coffee-espresso">Shot pulls too fast:</div>
                  <div className="text-coffee-medium">Grind finer or increase dose</div>
                </div>
                <div>
                  <div className="font-medium text-coffee-espresso">Shot pulls too slow:</div>
                  <div className="text-coffee-medium">Grind coarser or decrease dose</div>
                </div>
                <div>
                  <div className="font-medium text-coffee-espresso">Bitter taste:</div>
                  <div className="text-coffee-medium">Check water temperature or grind setting</div>
                </div>
                <div>
                  <div className="font-medium text-coffee-espresso">Sour taste:</div>
                  <div className="text-coffee-medium">Under-extraction - grind finer</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Perfect Your Technique Section */}
      <motion.section
        id="perfect-technique"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coffee-espresso/5 via-coffee-cream to-coffee-light/5"
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
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Master Pressure Control</h3>
                <p className="leading-relaxed">
                  Learn to feel the coffee's resistance through the lever. Start with gentle pressure (2-3 BAR) 
                  until coffee begins flowing, then gradually increase to 6-9 BAR. Maintain steady pressure 
                  throughout—avoid sudden changes that cause channeling.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Preheating Perfection</h3>
                <p className="leading-relaxed">
                  Consistent preheating is non-negotiable. Fill the brew head with boiling water and let it 
                  sit for 1-2 minutes. Some enthusiasts preheat multiple times for maximum temperature stability. 
                  Cold components will drop extraction temperature significantly.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Even Tamping</h3>
                <p className="leading-relaxed">
                  Practice level tamping with consistent pressure. Use a level surface and hold the tamper 
                  straight. Rotate slightly while maintaining pressure to polish the surface. Uneven tamping 
                  is the most common cause of channeling.
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
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Insufficient Preheating</h3>
                <p className="leading-relaxed">
                  Cold components cause temperature loss during extraction, resulting in sour, under-extracted 
                  shots. Always preheat thoroughly—this is one of the most critical steps for quality espresso.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Uneven Tamping</h3>
                <p className="leading-relaxed">
                  Uneven tamping creates channels where water flows too quickly, causing uneven extraction. 
                  Some areas over-extract (bitter) while others under-extract (sour). Practice level, even 
                  tamping every time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Inconsistent Pressure</h3>
                <p className="leading-relaxed">
                  Varying pressure during extraction creates inconsistent flow and extraction. Maintain steady 
                  pressure throughout the shot. Feel the resistance and adjust gradually, not abruptly.
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
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Classic Espresso</h3>
                <p className="leading-relaxed mb-2">
                  <strong>Dose:</strong> 18g coffee<br/>
                  <strong>Yield:</strong> 36g espresso (1:2 ratio)<br/>
                  <strong>Time:</strong> 25-30 seconds<br/>
                  <strong>Pressure:</strong> 7-8 BAR steady
                </p>
                <p className="text-sm italic">
                  The classic Italian-style shot with balanced extraction and rich crema.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Ristretto (Short Shot)</h3>
                <p className="leading-relaxed mb-2">
                  <strong>Dose:</strong> 18g coffee<br/>
                  <strong>Yield:</strong> 18-22g espresso (1:1 ratio)<br/>
                  <strong>Time:</strong> 20-25 seconds<br/>
                  <strong>Pressure:</strong> 8-9 BAR
                </p>
                <p className="text-sm italic">
                  More concentrated, sweeter shot with intense flavor. Grind slightly finer.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-espresso mb-2">Lungo (Long Shot)</h3>
                <p className="leading-relaxed mb-2">
                  <strong>Dose:</strong> 18g coffee<br/>
                  <strong>Yield:</strong> 54-72g espresso (1:3-4 ratio)<br/>
                  <strong>Time:</strong> 35-45 seconds<br/>
                  <strong>Pressure:</strong> 6-7 BAR
                </p>
                <p className="text-sm italic">
                  Longer extraction creates a larger, lighter-bodied shot. Grind slightly coarser.
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
