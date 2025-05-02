import { X } from "lucide-react";
import React from "react";
import Button from "./Button";

export default function FBPopup({ setPopup }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center drop-shadow-lg backdrop-blur-xs z-50">
      <div className="bg-white p-4 rounded-xl border-border border-2">
        <div className="flex justify-end items-center">
            <button onClick={() => setPopup(false)}>
          <X className="text-xs text-gray-300 ml-12" />
            </button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-center gap-4 items-center mt-4">
            <img className="w-20" src="/fb_logo.png" alt="" />
            <X />
            <img className="w-20" src="/Scrollify_logo.png" alt="" />
          </div>
          <div className="flex flex-col gap-1 text-center">
            <p className="font-medium text-lg">
              Join our Facebook Community of E-Commerce Founders
            </p>
            <p className="para">
              Get early access to Scrollify and E-commerce strategies.
            </p>
          </div>
          <a
            className="w-fit mx-auto"
            target="_blank"
            href="https://www.facebook.com/groups/3859388247644167"
          >
            <Button className="btn-base">Join</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
