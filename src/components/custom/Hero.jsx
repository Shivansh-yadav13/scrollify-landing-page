import React, { useState } from "react";

// components
import { Button, Tag } from "./index";
import FBPopup from "./FBPopup";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page refresh

    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await fetch("https://formspree.io/f/xldberda", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      if (response.ok) {
        setEmail("");
      } else {
        const data = await response.json();
        console.log("Formspree Error:", data);
        alert("Something went wrong. Please check your input.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem submitting the form.");
    }

    setPopup(true);
  };

  return (
    <>
      {popup && <FBPopup setPopup={setPopup} />}
      <div
        id="waitlist"
        className="text-center flex flex-col justify-center gap-5 py-5"
      >
        <Tag>
          <p className="italic">Get a 14-day free trail</p>
          <button className="bg-linear-to-b from-primary to-primary-light font-semibold rounded-full py-2 px-3">
            Join Waitlist
          </button>
        </Tag>
        <h1 className="hero-h1">
          Turn 👥 Visitors into 🛍️ Buyers <br /> with Shoppable Reels
        </h1>
        <p className="para">
          Capture attention. Build trust. Drive more sales right from your 🛒
          storefront.
        </p>
        <div className="w-fit mx-auto flex justify-center gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            className=""
          />
          <Button className="btn-primary" onClick={handleSubmit}>
            Join Waitlist
          </Button>
          {/* <form onSubmit={handleSubmit}>
        </form> */}
          {/* <ButtonBase>Get Started - It's Free</ButtonBase> */}
          {/* <Button>Join Waitlist</Button> */}
        </div>
        <div className="flex my-6 gap-x-20 justify-center">
          <div className="-skew-6">
            <video
              autoPlay
              muted
              loop
              src="/videos/singlereel1.mp4"
              className="rounded-4xl w-52"
            />
          </div>
          <div>
            <video
              autoPlay
              muted
              loop
              src="/videos/singlereel2.mp4"
              className="rounded-4xl w-56"
            />
          </div>
          <div className="skew-6">
            <video
              autoPlay
              muted
              loop
              src="/videos/singlereel3.mp4"
              className="rounded-4xl w-52"
            />
          </div>
        </div>
      </div>
    </>
  );
}
