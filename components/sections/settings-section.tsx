"use client";

import GlowCard from "../effects/glow-card";
import { User, Shield, Bell, Database } from "lucide-react";

export default function SettingsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Settings
        </h1>
        <p className="mt-2 text-zinc-400">
          Configure profile preferences, system notifications, and connection credentials.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <GlowCard className="p-6">
          <div className="flex items-center gap-3">
            <User className="text-violet-400" size={24} />
            <h3 className="text-lg font-bold text-white">Profile Preferences</h3>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Sampath"
                disabled
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="sampath@example.com"
                disabled
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-400 outline-none"
              />
            </div>
          </div>
        </GlowCard>

        <GlowCard className="p-6">
          <div className="flex items-center gap-3">
            <Database className="text-cyan-400" size={24} />
            <h3 className="text-lg font-bold text-white">Supabase Connection</h3>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm text-zinc-400">
                Connected status: <span className="font-semibold text-emerald-400">Active</span>
              </p>
              <p className="mt-2 text-xs text-zinc-500">
                Data resources are synced automatically in real-time from Supabase database tables.
              </p>
            </div>
          </div>
        </GlowCard>
      </div>
    </div>
  );
}
