import React from "react";
import Tag from "./Tag";
import { Box, AppWindow } from "lucide-react";

export default function WidgetShowcase() {
  const wTypes = [
    "Single Reel",
    "Single Reel Caraousel",
    "Multi Reel",
    "Multi Reel Caraousel",
    "Loop Feed"
  ];

  return (
    <div id="widgets" className="w-fit mx-auto flex flex-col gap-16">
      <div className="flex flex-col gap-4 text-center">
        <Tag>
          <AppWindow height={18} /> Widgets
        </Tag>
        <h1>Widgets</h1>
        <p className="para">
        Designed to work with Shopify, WooCommerce, and custom stacks. No devs needed. Just copy-paste and go live in minutes.
        </p>
        <div className="w-fit mx-auto flex justify-between gap-2">
          {wTypes.map((w, k) => (
            <div
              key={k}
              className="w-fit p-2 rounded-lg bg-linear-to-b from-zinc-50 via-zinc-100 to-zinc-100 hover:opacity-80 hover:via-cyan-50 border border-border transform transition-all duration-300"
            >
              <p>{w}</p>
            </div>
          ))}
        </div>
        <div>
          <video className="rounded-xl" src="/videos/widget_multireel.mp4" autoPlay loop muted />
        </div>
      </div>
    </div>
  );
}
