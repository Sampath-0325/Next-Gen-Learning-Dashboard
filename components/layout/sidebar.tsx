"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  activeId: string;
  setActiveId: (id: string) => void;
}

export default function Sidebar({ activeId, setActiveId }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Auto-collapse on tablet widths */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        setCollapsed(true);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── Mobile hamburger toggle ── */}
      <button
        className="fixed left-4 top-4 z-50 rounded-xl border border-white/10 bg-zinc-900/90 p-2.5 backdrop-blur-xl transition-colors hover:bg-white/10 md:hidden"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Desktop / Tablet sidebar ── */}
      <motion.aside
        animate={{ width: collapsed ? 72 : 260 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="sticky top-0 z-40 hidden h-screen shrink-0 flex-col border-r border-white/[0.06] bg-zinc-950/70 backdrop-blur-2xl md:flex"
      >
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 overflow-hidden px-5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
            <Zap size={18} className="text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="whitespace-nowrap text-lg font-bold tracking-tight"
              >
                LearnOS
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation items */}
        <nav className="mt-4 flex flex-1 flex-col gap-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute inset-0 rounded-xl border border-white/[0.08] bg-white/[0.06]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <Icon size={20} className="relative z-10 shrink-0" />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="relative z-10 overflow-hidden whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </nav>

        {/* System status card (only when expanded) */}
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-3"
            >
              <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.06] p-4">
                <p className="text-xs uppercase tracking-wider text-violet-400">
                  System Status
                </p>
                <p className="mt-2 text-sm text-zinc-300">
                  Learning Engine Active
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 pulse-glow" />
                  <span className="text-xs text-zinc-500">
                    Synced with Supabase
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Collapse / expand toggle */}
        <div className="px-3 pb-4">
          <button
            onClick={() => setCollapsed((v) => !v)}
            className="flex w-full items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] py-2 text-zinc-500 transition-colors hover:bg-white/[0.06] hover:text-white"
            aria-label={
              collapsed ? "Expand sidebar" : "Collapse sidebar"
            }
          >
            {collapsed ? (
              <ChevronRight size={16} />
            ) : (
              <ChevronLeft size={16} />
            )}
          </button>
        </div>
      </motion.aside>

      {/* ── Mobile drawer (slides in from left) ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 z-40 flex h-full w-[260px] flex-col border-r border-white/[0.06] bg-zinc-950/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex h-16 items-center gap-3 px-5 pt-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
                <Zap size={18} className="text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                LearnOS
              </span>
            </div>

            <nav className="mt-4 flex flex-1 flex-col gap-1 px-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeId === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveId(item.id);
                      setMobileOpen(false);
                    }}
                    className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="mobile-sidebar-active"
                        className="absolute inset-0 rounded-xl border border-white/[0.08] bg-white/[0.06]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <Icon
                      size={20}
                      className="relative z-10 shrink-0"
                    />
                    <span className="relative z-10">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            <div className="p-3">
              <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.06] p-4">
                <p className="text-xs uppercase tracking-wider text-violet-400">
                  System Status
                </p>
                <p className="mt-2 text-sm text-zinc-300">
                  Learning Engine Active
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 pulse-glow" />
                  <span className="text-xs text-zinc-500">
                    Synced with Supabase
                  </span>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ── Mobile bottom navigation bar ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/[0.06] bg-zinc-950/90 backdrop-blur-2xl md:hidden">
        <div className="flex items-center justify-around px-2 py-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`relative flex flex-col items-center gap-0.5 rounded-xl px-3 py-2 text-[10px] font-medium transition-colors ${
                  isActive ? "text-white" : "text-zinc-600"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="bottom-nav-active"
                    className="absolute inset-0 rounded-xl bg-white/[0.06]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <Icon size={20} className="relative z-10" />
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}