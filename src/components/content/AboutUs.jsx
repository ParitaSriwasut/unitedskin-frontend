import { Link } from "react-router-dom";
import aboutImage from "../../assets/image/about.jpeg";
import Gallery from "../Gallery";

export default function AboutUs() {
  return (
    <div className="bg-white">
      <Gallery />
      <div className="container max-width: 1024px; flex mx-auto overflow-hidden justify-center m-20">
        <div className="grid grid-cols-2 gap-y-10 gap-10">
          <span className="text-center text-neutral font-semibold font-serif text-5xl col-span-full border-b-2 pb-2">
            Why Organic Skincare Products Are Better for You?
          </span>
          <span className="text-neutral text-lg font-mono break-words">
            <a className="underline mr-2">5 Years of Experience</a>
            Giving the best instructions. Nature is the best source of
            skin-nourishing ingredients. Vitamins, minerals, and antioxidants
            are all found in natural, plant-based sources and work
            synergistically with your skin to keep it looking and feeling
            radiant.
          </span>
          <span className="text-neutral text-lg font-mono break-words">
            <a className="underline mr-2">Organic work better</a>
            Plants grown organically are found to contain a higher level of
            vital antioxidant vitamins than non-organic plants. Because they are
            grown without herbicides. their organic ingredients are also free
            from that contamination, which means the same for your skin and
            body.
          </span>
          <span className="text-neutral text-lg font-mono break-words">
            <a className="underline mr-2">Happy clients</a>
            Without harsh chemicals, organic skin care products are less likely
            to cause allergic reactions, inflammations or irritations. What’s
            more, they could be dangerous for your overall health. Using organic
            or clean products can eliminate reduce your exposure to chemicals,
            which means better skin health.
          </span>
          <span className="text-neutral text-lg font-mono break-words">
            <a className="underline mr-2"> Cruelty-free skin care</a>
            naturally grown ingredients that are free from toxic pesticides and
            fertilizers, they leave a harmful footprint on the planet,
            particularly the soil, water, and air. Natural ingredients are
            powerful but gentle on the skin. Using them helps keep your skin
            balanced and healthy.
          </span>
          <img src={aboutImage} alt="skincare" />
          <div className="flex flex-col gap-20">
            <span className="text-neutral text-2xl font-serif break-words tracking-wide leading-loose">
              “What is your skin trying to tell you? Often the skin is a
              metaphor for deeper issues and a way for your body to send up a
              red flag to warn you that all is not well underneath. When our
              skin is unhealthy it is usually a reflection of the internal state
              of our bodies and is often a sign of poor elimination of toxins
              and waste products.”
            </span>
            <div className="flex flex-col gap-10">
              <span className="text-neutral text-2xl font-serif">
                How’s your skin feeling today?
              </span>
              <span className="text-neutral text-3xl font-serif font-bold">
                UNITED & FREE ORGANIC SKINCARE
              </span>
              <Link to="/register" className="flex items-center">
                <button className="bg-orange relative font-semibold z-10 text-2xl mt-10 mb-5 py-2 px-3 hover:bg-gray outline-dashed truncate animate-bounce">
                  Sign up now to get to know us!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
