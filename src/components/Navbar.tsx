"use client";
import {slideIn} from "@/utils/helpers/framer-motion-helper";
import {AnimatePresence, motion} from "framer-motion";
import {Menu, X} from "lucide-react";
import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  if (path.includes("/user")) return null;
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 bg-black shadow-lg`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              ExpenseFlow
            </span>
          </Link>

          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-white/80 hover:text-white transition-colors hover:scale-105 transform"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-white/80 hover:text-white transition-colors hover:scale-105 transform"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-white/80 hover:text-white transition-colors hover:scale-105 transform"
            >
              Testimonials
            </a>
            <div className="flex items-center space-x-4">
              <Link
                href="/sign-in"
                className="px-6 py-2 text-white bg-neutral-800 hover:text-white/80 transition-colors hover:bg-white/10 rounded-lg"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-black/95 backdrop-blur-lg border-l border-neutral-800 z-50 md:hidden"
              {...slideIn}
            >
              <div className="p-6">
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="space-y-6">
                  <a
                    href="#features"
                    className="block text-lg font-medium text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a
                    href="#pricing"
                    className="block text-lg font-medium text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </a>
                  <a
                    href="#testimonials"
                    className="block text-lg font-medium text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </a>
                  <div className="pt-2 space-y-4 flex flex-col">
                    <Link
                      href="/sign-in"
                      className="w-full px-6 py-3 bg-neutral-800 text-white hover:bg-white/10 rounded-lg transition-colors text-left"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/sign-up"
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-all"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
