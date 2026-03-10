"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navPages } from "@/data/igh";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      {/* Top bar: logo + hamburger (mobile) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight flex-shrink-0">
          <span className="text-accent-blue">IGH</span>{" "}
          <span className="text-foreground-muted font-normal text-sm">
            Collaborateur IA
          </span>
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Desktop: empty space — nav is below */}
        <div className="hidden lg:block" />
      </div>

      {/* Desktop nav — second row, horizontally scrollable */}
      <nav className="hidden lg:block border-t border-white/[0.03] bg-background/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide py-1">
            {navPages.map((page) => {
              const isActive = pathname === page.href;
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className={`relative px-3.5 py-2 rounded-lg text-[13px] font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? "text-foreground"
                      : "text-foreground-muted hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {page.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg bg-white/5 border border-white/10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-white/5"
          >
            <nav className="px-6 py-4 space-y-1">
              {navPages.map((page) => {
                const isActive = pathname === page.href;
                return (
                  <Link
                    key={page.href}
                    href={page.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "text-foreground bg-white/5"
                        : "text-foreground-muted hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {page.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
