// components
import { FeatureCard, Tag } from "./index";

import { ChartArea, Film, LucideEye } from "lucide-react";
import { Box } from "react-feather";

const featStart = [
  {
    title: "Boost Sales with Shoppable Reels",
    description:
      "Shoppable reels keep visitors engaged and lead them straight to checkout cutting friction and boosting trust.",
    icon: <ChartArea />,
  },
  {
    title: "Endless Scrolling, More Exposure",
    description:
      "Loop your best reels and let users binge your content like a product Netflix keeping them on your site longer.",
    icon: <LucideEye />,
  },
  {
    title: "Show, Don’t Tell",
    description:
      "Reels feel authentic. Show real people using your product and earn instant trust.",
    icon: <Film />,
  },
];

export default function Benefits() {
  return (
    <div id="features" className="w-fit mx-auto flex flex-col gap-16">
      <div className="flex flex-col gap-4 text-center">
        <Tag>
          <Box height={18} /> Benefits
        </Tag>
        <h1>Why Reels Work Wonders</h1>
        <p className="para">
          Discover how Scrollify helps you convert attention into action.
        </p>
      </div>
      <div className="w-fit mx-auto flex justify-between gap-4 items-center">
        <div className="flex flex-col justify-between gap-4">
          {featStart.map((f, i) => (
            <FeatureCard
              key={i}
              icon={f.icon}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>

        {/* <div>
          <div className="px-4 py-6 rounded-xl bg-linear-to-bl from-cyan-400 via-cyan-600 to-cyan-700">
            <video
              autoPlay
              muted
              loop
              src="/videos/video1.mp4"
              className="rounded-xl w-52"
            />
          </div>
        </div> */}

        {/* <div className="flex flex-col justify-between gap-4">
          {featStart.map((f, i) => (
            <FeatureCard
              key={i}
              icon={f.icon}
              title={f.title}
              description={f.description}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
