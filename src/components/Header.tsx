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
      {/* Row 1: Logo centered + hamburger on mobile */}
      <div className="flex items-center justify-between lg:justify-center px-4 h-11">
        <Link href="/" className="text-base font-bold tracking-tight">
          <span className="text-accent-blue">IGH</span>{" "}
          <span className="text-foreground-muted font-normal text-xs">
            Collaborateur IA
          </span>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Row 2: Nav tabs centered */}
      <nav className="hidden lg:block border-t border-white/[0.03]">
        <div className="flex items-center justify-center gap-0.5 overflow-x-auto scrollbar-hide py-1 px-4">
          {navPages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                className={`relative px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "text-foreground"
                    : "text-foreground-muted hover:text-foreground hover:bg-white/5"
                }`}
              >
                {page.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-md bg-white/5 border border-white/10"
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
