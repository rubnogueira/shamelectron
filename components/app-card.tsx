import Image from "next/image";
import { AppRecord, FixedStatus } from "@/types";
import { CheckCircle2, XCircle, HelpCircle, TwitterIcon } from "lucide-react";
import Link from "next/link";

function StatusIndicator({ status }: { status: FixedStatus }) {
  const getStatusDisplay = () => {
    switch (status) {
      case "fixed":
        return {
          Icon: CheckCircle2,
          color: "text-green-400",
          bgColor: "bg-green-400/10",
        };
      case "not_fixed":
        return {
          Icon: XCircle,
          color: "text-red-400",
          bgColor: "bg-red-400/10",
        };
      default:
        return {
          Icon: HelpCircle,
          color: "text-gray-400",
          bgColor: "bg-gray-400/10",
        };
    }
  };

  const { Icon, color, bgColor } = getStatusDisplay();

  return (
    <div
      className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center border border-gray-800`}
    >
      <Icon className={`${color} w-6 h-6`} />
    </div>
  );
}

export function AppRow({ app }: { app: AppRecord }) {
  return (
    <div className="flex items-center gap-6 py-4 border-b border-dashed-subtle border-gray-800 hover:bg-gray-900/20 transition-colors">
      {/* Status - Now the main focus */}
      <StatusIndicator status={app.isFixed} />

      {/* Icon */}
      <div className="w-8 h-8 flex-shrink-0">
        <Image
          src={app.icon}
          alt={`${app.friendlyName} icon`}
          width={32}
          height={32}
          className="w-full h-full object-cover rounded-sm"
        />
      </div>

      {/* App Name */}
      <div className="flex-1 min-w-0">
        <span className="text-white text-sm font-mono">{app.friendlyName}</span>
      </div>

      {/* Twitter Link */}
      <div className="text-center">
        {app.twitter && (
          <Link
            href={
              `https://x.com/intent/tweet?text=` +
              encodeURIComponent(
                `please bump Electron to fix MacOS 26 performance issue @${app.twitter}`
              )
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 transition-colors text-xs flex items-center gap-1 flex-row"
            aria-label={`Follow ${app.friendlyName} on Twitter`}
          >
            <span className="text-xs">
              ask <span className="text-white">@{app.twitter}</span> to bump
              Electron
            </span>
            <TwitterIcon className="size-4 ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
}
