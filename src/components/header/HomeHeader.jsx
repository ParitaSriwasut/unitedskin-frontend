import myHero from "../../images/Hero1.png";
export default function HomeHeader() {
  return (
    <div className="w-screen -z-10 h-screen top-0">
      <img
        className="inset-0 w-full h-full object-cover"
        alt="hero"
        src={myHero}
      />
      <div className="absolute inset-0 flex items-center justify-start mt-96 px-36 ">
        <div className="text-start justify-start text-white">
          <h1 className="text-5xl font-semibold font-serif text-left">
            Care For Your Skin,
          </h1>
          <h1 className="text-5xl font-semibold font-serif text-left pb-4">
            Care For Your Beauty
          </h1>
          <h1 className="flex font-mono text-2xl text-left">
            What is your skin trying to tell you? Often the skin is a metaphor
            for deeper issues and a way for your body to send up a red flag to
            warn you that all is not well underneath. taking care of your skin
            is more important than covering it up. So Let's “Eat, sleep,
            skincare, repeat.”
          </h1>
        </div>
      </div>
    </div>
  );
}
