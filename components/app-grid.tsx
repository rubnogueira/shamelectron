import { AppRecord } from "@/types";
import { AppRow } from "./app-card";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import TimeAgo from "./time-ago";

const dateTime = new Date(
  new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
);

export function AppGrid({ apps }: { apps: AppRecord[] }) {
  const fixedCount = apps.filter((app) => app.isFixed === "fixed").length;
  const notFixedCount = apps.filter(
    (app) => app.isFixed === "not_fixed"
  ).length;
  const unknownCount = apps.filter((app) => app.isFixed === "unknown").length;
  const totalCount = apps.length;
  const fixedPercentage = Math.round((fixedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-3">
          <h1 className="text-2xl font-mono text-white mb-2">shamelectron</h1>
          <div className="text-muted text-sm font-mono mb-6">
            <div>
              Tracking problematic Electron apps macOS Tahoe.
              <div className="text-subtle">
                Major GPU performance issue on macOS 26 (
                <a
                  href="https://github.com/electron/electron/pull/48376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors"
                >
                  electron/electron#48376
                </a>
                ).
              </div>
            </div>
          </div>

          {/* Elegant Stats Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-700/50 rounded-xl backdrop-blur-sm mb-8">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"></div>

            <div className="relative p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-sm font-mono text-white/90 uppercase tracking-[0.15em] mb-1">
                    Status Overview
                  </h2>
                  <div className="text-xs text-gray-400 font-mono">
                    {totalCount} total applications tracked
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400 font-mono mb-2 uppercase tracking-wide">
                    Last updated
                  </div>
                  <div className="text-sm font-mono font-medium bg-yellow-300 text-black rounded px-2 py-0.5 inline-block shadow-sm">
                    <TimeAgo updatedAt={dateTime} />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-12">
                <div className="text-center">
                  <div className="text-3xl font-mono text-emerald-400 font-light">
                    {fixedCount}
                  </div>
                  <div className="text-xs text-gray-500 font-mono mt-1">
                    fixed
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-mono text-red-400 font-light">
                    {notFixedCount}
                  </div>
                  <div className="text-xs text-gray-500 font-mono mt-1">
                    not fixed
                  </div>
                </div>

                {unknownCount > 0 && (
                  <div className="text-center">
                    <div className="text-3xl font-mono text-gray-400 font-light">
                      {unknownCount}
                    </div>
                    <div className="text-xs text-gray-500 font-mono mt-1">
                      unknown
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Developer Notice */}
        <div className="mb-8 p-4 bg-gray-900/30 border border-gray-700/30 rounded-lg">
          <div className="text-center">
            <div className="text-sm text-gray-300 font-mono mb-2">
              Are you an Electron app developer?
            </div>
            <div className="text-xs text-gray-400 font-mono">
              Bump Electron to at least versions{" "}
              <span className="text-emerald-400">v38.2.0</span>,{" "}
              <span className="text-emerald-400">v37.6.0</span> and{" "}
              <span className="text-emerald-400">v36.9.2</span>
            </div>
          </div>
        </div>

        {/* Table Header */}
        <div className="mb-4">
          <div className="flex items-center gap-6 py-2 border-b border-gray-800">
            <div className="w-12">
              <span className="text-xs text-muted font-mono uppercase tracking-wide">
                status
              </span>
            </div>
            <div className="w-8"></div>
            <div className="flex-1">
              <span className="text-xs text-muted font-mono uppercase tracking-wide">
                app
              </span>
            </div>
            <div className="w-8 text-center">
              <span className="text-xs text-muted font-mono uppercase tracking-wide">
                social
              </span>
            </div>
          </div>
        </div>

        {/* Apps List */}
        <div className="space-y-0">
          {apps.map((app) => (
            <AppRow key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
}
