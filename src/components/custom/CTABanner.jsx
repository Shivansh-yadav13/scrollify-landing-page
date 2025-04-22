import Button from "./Button";

export default function CTABanner() {
  return (
    <div className="flex justify-between bg-linear-to-bl from-cyan-600 via-cyan-800 to-cyan-700 to-90% w-fit mx-auto rounded-4xl p-10">
      <div className="flex flex-col gap-2">
        <h2 className=" text-white text-3xl font-bold">
          No More Costly Conversion Hacks. Launch Scrollify in minutes and start
          growing your sales and AOV!
        </h2>
        <p className="text-white">
          Join the waitlist to get early access and enjoy a 14-day free trial.
        </p>
        <a href="#waitlist">
          <Button>Join Waitlist</Button>
        </a>
      </div>
      {/* <video
        className="absolute w-52 rounded-4xl"
        src="/videos/widget_singlereel.mp4"
        muted
        autoPlay
        loop
      /> */}
    </div>
  );
}
