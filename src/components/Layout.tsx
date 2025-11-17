import type { ReactNode } from 'react';
import { motion } from 'motion/react';

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
            <motion.a
              href="/"
              className="text-2xl font-serif font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Brew Guide
            </motion.a>
            <div className="hidden md:flex space-x-8">
              <motion.a
                href="/"
                className="text-coffee-espresso hover:text-coffee-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Home
              </motion.a>
              <motion.a
                href="/v60"
                className="text-coffee-espresso hover:text-coffee-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                V60
              </motion.a>
              <motion.a
                href="/flair-espresso"
                className="text-coffee-espresso hover:text-coffee-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Flair Espresso
              </motion.a>
              <motion.a
                href="/moka-pot"
                className="text-coffee-espresso hover:text-coffee-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Moka Pot
              </motion.a>
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
