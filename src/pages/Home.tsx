import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faStar, faLeaf } from '@fortawesome/free-solid-svg-icons';
import Hero from '../components/Hero';
import MethodCard from '../components/MethodCard';
import DifficultyBadge from '../components/DifficultyBadge';

export default function Home() {
  return (
    <div>
      <Hero />
      <motion.section
        id="methods"
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-serif font-bold text-center text-coffee-espresso mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Choose Your Brewing Method
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link to="/v60">
                <MethodCard
                  title="V60 Pour-Over"
                  description="Single cup precision brewing with James Hoffmann's technique"
                  image="https://images.unsplash.com/photo-1548287914-44c700af2ed5?w=800&q=80&auto=format&fit=crop"
                  time="3-4 min"
                  difficulty="Intermediate"
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link to="/flair-espresso">
                <MethodCard
                  title="Flair Espresso"
                  description="Manual lever espresso with precise pressure control"
                  image="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80&fit=crop"
                  time="2-3 min"
                  difficulty="Advanced"
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link to="/moka-pot">
                <MethodCard
                  title="Moka Pot"
                  description="Classic stovetop brewing with rich, bold results"
                  image="https://images.unsplash.com/photo-1581447355317-916971180cfa?w=800&q=80&auto=format&fit=crop"
                  time="5-7 min"
                  difficulty="Beginner"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Manual Brewing Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coffee-medium/10 via-coffee-cream to-coffee-light/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-gradient mb-6">
              Why Manual Brewing?
            </h2>
            <p className="text-lg text-coffee-medium max-w-2xl mx-auto">
              Discover the benefits of taking control of your coffee brewing process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="card-coffee p-6 text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="mb-4 text-coffee-espresso flex justify-center">
                <FontAwesomeIcon icon={faBullseye} size="3x" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-espresso mb-3">
                Complete Control
              </h3>
              <p className="text-coffee-medium">
                Adjust every variable—temperature, timing, grind size, and water flow—to create your perfect cup.
              </p>
            </motion.div>

            <motion.div
              className="card-coffee p-6 text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="mb-4 text-coffee-espresso flex justify-center">
                <FontAwesomeIcon icon={faStar} size="3x" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-espresso mb-3">
                Superior Flavor
              </h3>
              <p className="text-coffee-medium">
                Manual methods extract nuanced flavors that automated machines often miss, revealing the true character of your beans.
              </p>
            </motion.div>

            <motion.div
              className="card-coffee p-6 text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="mb-4 text-coffee-espresso flex justify-center">
                <FontAwesomeIcon icon={faLeaf} size="3x" />
              </div>
              <h3 className="text-xl font-serif font-bold text-coffee-espresso mb-3">
                Mindful Ritual
              </h3>
              <p className="text-coffee-medium">
                Transform your morning routine into a meditative practice that connects you with the craft of coffee.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Method Comparison Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-gradient mb-6">
              Method Comparison
            </h2>
            <p className="text-lg text-coffee-medium max-w-2xl mx-auto">
              Find the perfect brewing method for your taste and skill level
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-coffee-medium">
                  <th className="text-left p-4 font-serif font-bold text-coffee-espresso">Method</th>
                  <th className="text-center p-4 font-serif font-bold text-coffee-espresso">Difficulty</th>
                  <th className="text-center p-4 font-serif font-bold text-coffee-espresso">Time</th>
                  <th className="text-center p-4 font-serif font-bold text-coffee-espresso">Flavor Profile</th>
                  <th className="text-center p-4 font-serif font-bold text-coffee-espresso">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-coffee-light/30 hover:bg-coffee-light/5 transition-colors">
                  <td className="p-4 font-semibold text-coffee-espresso">V60 Pour-Over</td>
                  <td className="p-4 text-center">
                    <DifficultyBadge difficulty="Intermediate" />
                  </td>
                  <td className="p-4 text-center text-coffee-medium">3-4 min</td>
                  <td className="p-4 text-center text-coffee-medium">Clean, bright, nuanced</td>
                  <td className="p-4 text-center text-coffee-medium">Single origin, light roasts</td>
                </tr>
                <tr className="border-b border-coffee-light/30 hover:bg-coffee-light/5 transition-colors">
                  <td className="p-4 font-semibold text-coffee-espresso">Flair Espresso</td>
                  <td className="p-4 text-center">
                    <DifficultyBadge difficulty="Advanced" />
                  </td>
                  <td className="p-4 text-center text-coffee-medium">2-3 min</td>
                  <td className="p-4 text-center text-coffee-medium">Rich, full-bodied, intense</td>
                  <td className="p-4 text-center text-coffee-medium">Espresso lovers, control seekers</td>
                </tr>
                <tr className="border-b border-coffee-light/30 hover:bg-coffee-light/5 transition-colors">
                  <td className="p-4 font-semibold text-coffee-espresso">Moka Pot</td>
                  <td className="p-4 text-center">
                    <DifficultyBadge difficulty="Beginner" />
                  </td>
                  <td className="p-4 text-center text-coffee-medium">5-7 min</td>
                  <td className="p-4 text-center text-coffee-medium">Bold, robust, Italian-style</td>
                  <td className="p-4 text-center text-coffee-medium">Everyday brewing, strong coffee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* Getting Started Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coffee-cream via-coffee-light/5 to-coffee-cream"
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-gradient mb-6">
              Getting Started
            </h2>
            <p className="text-lg text-coffee-medium max-w-2xl mx-auto">
              Essential knowledge to begin your manual brewing journey
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              className="card-coffee p-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-serif font-bold text-coffee-espresso mb-4">
                Essential Equipment
              </h3>
              <ul className="space-y-2 text-coffee-medium">
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-3 mt-1">•</span>
                  <span><strong>Burr Grinder:</strong> Consistent grind size is crucial for quality extraction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-3 mt-1">•</span>
                  <span><strong>Digital Scale:</strong> Precise measurements ensure consistent results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-3 mt-1">•</span>
                  <span><strong>Gooseneck Kettle:</strong> Essential for pour-over methods (V60)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-3 mt-1">•</span>
                  <span><strong>Timer:</strong> Track brewing time for consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-3 mt-1">•</span>
                  <span><strong>Fresh Coffee Beans:</strong> Quality beans are the foundation of great coffee</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="card-coffee p-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-serif font-bold text-coffee-espresso mb-4">
                Coffee Bean Basics
              </h3>
              <div className="space-y-4 text-coffee-medium">
                <div>
                  <h4 className="font-semibold text-coffee-espresso mb-2">Roast Levels</h4>
                  <p className="leading-relaxed">
                    <strong>Light Roast:</strong> Bright, acidic, preserves origin characteristics. Best for V60.<br/>
                    <strong>Medium Roast:</strong> Balanced flavor, versatile. Works well with all methods.<br/>
                    <strong>Dark Roast:</strong> Bold, rich, lower acidity. Ideal for espresso and Moka pot.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-coffee-espresso mb-2">Freshness Matters</h4>
                  <p className="leading-relaxed">
                    Use coffee within 2-4 weeks of roasting. Store in an airtight container away from light, 
                    heat, and moisture. Grind just before brewing for maximum flavor.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card-coffee p-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-serif font-bold text-coffee-espresso mb-4">
                Water Quality
              </h3>
              <p className="text-coffee-medium leading-relaxed">
                Coffee is 98% water, so quality matters. Use filtered water to avoid off-flavors from 
                chlorine or minerals. Ideal water temperature varies by method: 93-96°C (200-205°F) for 
                pour-over, near-boiling for espresso, and hot (not boiling) for Moka pot.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coffee-light/10 via-coffee-cream to-coffee-light/5"
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-gradient mb-6">
              About This Guide
            </h2>
            <p className="text-lg text-coffee-medium max-w-2xl mx-auto">
              Welcome to your comprehensive guide to manual coffee brewing. Whether you're a beginner
              or an experienced home barista, we're here to help you master the art of brewing exceptional coffee.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="card-coffee p-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-serif font-bold text-coffee-espresso mb-4">
                Our Mission
              </h3>
              <p className="text-coffee-medium leading-relaxed">
                We believe that great coffee should be accessible to everyone. Our step-by-step guides
                break down complex brewing techniques into clear, actionable instructions. Each method
                includes precise measurements, timing, and expert tips to help you achieve consistent,
                delicious results every time.
              </p>
            </motion.div>

            <motion.div
              className="card-coffee p-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-serif font-bold text-coffee-espresso mb-4">
                What You'll Learn
              </h3>
              <ul className="space-y-3 text-coffee-medium">
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-3 mt-1">•</span>
                  <span>Precise brewing techniques for three popular manual methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-3 mt-1">•</span>
                  <span>Understanding coffee-to-water ratios and extraction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-3 mt-1">•</span>
                  <span>Interactive timers and calculators to guide your brew</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coffee-dark mr-3 mt-1">•</span>
                  <span>Troubleshooting tips for common brewing challenges</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-coffee-medium mb-6 text-lg">
              Ready to start your coffee journey? Choose a brewing method above and let's begin!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link to="/v60" className="btn-coffee inline-block">
                Try V60 Method
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
