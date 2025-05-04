import Button from "./Button";

export default function CTABanner() {
  return (
    <div className="flex justify-between bg-linear-to-bl from-primary-dark via-primary to-primary-dark to-90% w-fit mx-auto rounded-4xl p-10">
      <div className="flex flex-col gap-2">
        <h2 className=" text-white text-3xl font-bold">
          Stop Burning Budget on Low-Converting Tactics
        </h2>
        <p className="text-white">
          Join the waitlist to get early access and enjoy a 14-day free trial.
        </p>
        <a href="#waitlist">
          <Button className="btn-light">Join Waitlist</Button>
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
