import React from "react";

import { Video } from "lucide-react"; 

// components
import { Tag } from "./index";

export default function Demo() {
  return (
    <div className="w-fit mx-auto flex flex-col gap-14">
      <div className="flex flex-col gap-2 text-center">
        <Tag>
          <Video height={18} /> Demo
        </Tag>
        <h1>See It In Action</h1>
        <p className="para">This is how easy it is to add a hook to your website</p>
      </div>
      <iframe
        className="rounded-xl mx-auto"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/y3wgpF546Pw?si=x7uFrX1ibXjT1xS_"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
