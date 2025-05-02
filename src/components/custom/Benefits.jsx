// components
import { FeatureCard, Tag } from "./index";

import { ChartArea, Film, LucideEye } from "lucide-react";
import { Box } from "react-feather";

const featStart = [
  {
    title: "Shoppable Reels = Seamless Buying Journey",
    description:
      "Embed reels that link directly to your product pages. Remove friction, shorten the path to purchase, and increase conversion rates.",
    icon: <ChartArea />,
  },
  {
    title: "Looping Feeds That Boost Engagement",
    description:
      "Think product Netflix. Auto-loop your best reels to keep visitors on-site longer, lowering bounce and boosting product exposure.",
    icon: <LucideEye />,
  },
  {
    title: "UGC That Feels Native",
    description:
      "Buyers trust people, not websites. Use real customer or influencer content that shows your product in action. Build instant trust and social proof.",
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
