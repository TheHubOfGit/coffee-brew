import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-coffee-cream via-coffee-light/10 to-coffee-cream">
      <motion.nav
        className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-coffee-light/30 z-50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/">
              <motion.div
                className="text-2xl font-serif font-bold text-gradient cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Brew Guide
              </motion.div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/">
                <motion.div
                  className="text-coffee-espresso hover:text-coffee-medium transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Home
                </motion.div>
              </Link>
              <Link to="/v60">
                <motion.div
                  className="text-coffee-espresso hover:text-coffee-medium transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  V60
                </motion.div>
              </Link>
              <Link to="/flair-espresso">
                <motion.div
                  className="text-coffee-espresso hover:text-coffee-medium transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Flair Espresso
                </motion.div>
              </Link>
              <Link to="/moka-pot">
                <motion.div
                  className="text-coffee-espresso hover:text-coffee-medium transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Moka Pot
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>
      <main className="pt-16 flex-1">
        {children}
      </main>
      <motion.footer
        className="bg-white/90 backdrop-blur-lg border-t border-coffee-light/30 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-coffee-espresso text-sm">
            © 2025 Michael Brancazio |{' '}
            <a
              href="https://michaelbrancazio.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coffee-medium hover:text-coffee-dark underline transition-colors duration-200"
            >
              Click here to see the developer behind this website
            </a>
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
