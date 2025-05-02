// components
import { FeatureCard, Tag } from "./index";

import { ChartArea, Film, LucideEye, ShoppingCart } from "lucide-react";

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

export default function Copy() {
  return (
    <div id="features" className="w-fit mx-auto flex flex-col gap-16">
      <div className="flex flex-col gap-4 text-center">
        <Tag>
          <ShoppingCart height={18} /> Ecommerce
        </Tag>
        <h1>Built for Ecommerce Brands</h1>
        <p className="para w-1/2 mx-auto">
        If you're driving traffic but struggling to convert, Scrollify gives you the missing piece—high-converting, shoppable video reels embedded directly into your site. No more leaky funnels. No more high bounce rates.
        </p>
      </div>
    </div>
  );
}
