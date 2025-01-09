"use client";
import Image from "next/image";
import { Almendra_SC } from "next/font/google";
import { Roboto } from "next/font/google";
import synapselogo from "../assets/synapselogo.png";
import bgImage from "../assets/backgroundP2.jpeg";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const almendra = Almendra_SC({
  subsets: ["latin"],
  weight: "400",
});

export default function ComingSoon() {
  const router = useRouter();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Mystical night scene"
        fill
        className="object-cover"
        priority
      />
      <div className="z-50 w-fit h-fit absolute top-0 left-0 flex items-center justify-center p-4 md:p-5">
        <button
          className="text-white transform transition duration-300 ease-in-out hover:scale-125 hover:text-gray-300"
          onClick={() => router.push("/")}
        >
          <IoMdArrowBack size={"4em"} />
        </button>
      </div>
      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center bg-black bg-opacity-60">
        <Image
          src={synapselogo}
          alt="Synapse Logo"
          className="w-80 p-5 sm:w-[30vw] h-auto"
        />
        <h1
          className={`mb-8 mt-3 text-5xl sm:text-6xl text-white font-extrabold ${almendra.className}`}
        >
          COMING SOON
        </h1>
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-xl  text-white text-center mb-6 ${roboto.className}`}
            >
              Exciting&nbsp;Events&nbsp;Coming&nbsp;Soon&nbsp;&ndash;&nbsp;Special&nbsp;Discounts&nbsp;for&nbsp;DAIICT&nbsp;Students!&nbsp;
              <br />
              &nbsp;Get&nbsp;Your&nbsp;Tickets&nbsp;Now&nbsp;at&nbsp;Unbeatable&nbsp;Prices!
            </h2>
            <div className="space-y-4">
              <div className="">
                <p className="text-xl font-semibold text-white">Per Person</p>
                <div className="flex gap-6 justify-center items">
                  <p className="text-sm text-white">
                    Minimum Price: <span className="font-semibold">₹50</span>
                  </p>
                  <p className="text-sm text-white">
                    Maximum Price: <span className="font-semibold">₹200</span>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold text-white">Per Group</p>
                <div className="flex gap-6 justify-center items">
                  <p className="text-sm text-white">
                    Minimum Price: <span className="font-semibold">₹100</span>
                  </p>
                  <p className="text-sm text-white">
                    Maximum Price: <span className="font-semibold">₹1500</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
