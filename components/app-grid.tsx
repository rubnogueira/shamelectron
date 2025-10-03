import { AppRecord } from "@/types";
import { AppRow } from "./app-card";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";

const updatedAt = new Date();
const dateTime =
  new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();

export function AppGrid({ apps }: { apps: AppRecord[] }) {
  const fixedCount = apps.filter((app) => app.isFixed === "fixed").length;
  const notFixedCount = apps.filter(
    (app) => app.isFixed === "not_fixed"
  ).length;
  const unknownCount = apps.filter((app) => app.isFixed === "unknown").length;
  const totalCount = apps.length;
  const fixedPercentage = Math.round((fixedCount / totalCount) * 100);

  const timeAgo = (() => {
    const now = new Date();
    const updated = updatedAt;
    const diff = Math.floor((now.getTime() - updated.getTime()) / 1000);

    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  })();

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-2xl font-mono text-white mb-2">shamelectron</h1>
          <div className="text-muted text-sm font-mono">
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

          {/* Stats */}
          <div className="mt-8 flex items-center gap-8 text-xs font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-muted">
                {fixedCount} fixed ({fixedPercentage}%)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-muted">{notFixedCount} not fixed</span>
            </div>
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-gray-400" />
              <span className="text-muted">{unknownCount} unknown</span>
            </div>
          </div>
        </header>

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

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center">
            <div className="mt-1 text-xs text-subtle font-mono">
              last updated:{" "}
              <pre className="inline text-white/20">{dateTime}</pre> (
              <pre className="inline text-white/90">{timeAgo}</pre>)
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
