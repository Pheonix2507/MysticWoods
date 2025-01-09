"use client";

import Image from "next/image";
import React from "react";
import { Roboto } from "next/font/google";
import { Almendra_SC } from "next/font/google";
import img_8 from "../assets/image_8.png";
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

interface SectionProps {
  title: string;
  items: string[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg md:text-xl font-bold mb-3">{title}</h2>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300 text-sm md:text-base mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TermsAndConditions: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex relative items-center justify-center min-h-screen bg-cover bg-black bg-center">
      <Image
        src={img_8}
        className="object-cover absolute top-0 left-0"
        fill
        alt="TnC-BG"
      />
      <div className="w-fit h-fit absolute top-0 left-0 flex items-center justify-center p-4 md:p-5">
        <button
          className="text-white transform transition duration-300 ease-in-out hover:scale-125 hover:text-gray-300"
          onClick={() => router.push("/")}
        >
          <IoMdArrowBack size={"2em"} />
        </button>
      </div>

      <div className="bg-black/70 shadow-md rounded-lg max-w-4xl w-full mx-4 sm:mx-8 p-6 sm:p-8">
        <header className="text-center mb-0 mt-8 sm:mb-6">
          <span className={almendra.className}>
            <h1 className="text-white text-3xl sm:text-4xl md:text-[5rem] mb-3">
              Terms &amp; Conditions
            </h1>
          </span>
          <p className="text-gray-300 text-sm md:text-base sm:mt-9">
            Welcome to Synapse&apos;25! To ensure an enjoyable and hassle-free
            experience for all attendees, please carefully read and adhere to
            the following terms and conditions:
          </p>
        </header>

        <div className={roboto.className}>
          <div className="pt-10 text-white">
            <Section
              title="1. No Refund Policy"
              items={[
                "Tickets purchased for CEP/OAT events and concerts are strictly non-refundable.",
                "In cases of mistaken double payments, refunds will only be considered after the completion of the fest. Proper documentation and proof of the double transaction will be required for processing.",
              ]}
            />
            <Section
              title="2. Behavioral Expectations"
              items={[
                "Synapse&apos;25 is a safe and inclusive space for everyone. Any form of nuisance, including but not limited to disruptive behavior, harassment, or vandalism, will not be tolerated.",
                "Attendees engaging in such activities will face immediate removal from the premises and legal consequences as per applicable laws.",
              ]}
            />
            <Section
              title="3. Entry and Identification"
              items={[
                "Entry to events requires a valid pass and government-issued photo ID. Attendees are responsible for safeguarding their passes and IDs throughout the festival.",
              ]}
            />
            <Section
              title="4. Cancellation Policy"
              items={[
                "If the number of participants (in a team) registered for an event does not meet the required criteria, the participation in the event will be cancelled. In such cases, charges paid by the participants will be fully refunded.",
              ]}
            />
            <Section
              title="5. Payment Policy"
              items={[
                "All payments for Synapse&apos;25 events will be processed through the Razorpay payment gateway.",
                "You can make payments using UPI, Debit Card, Credit Card, or Internet Banking.",
              ]}
            />
            <Section
              title="6. Liability"
              items={[
                "The Synapse Committee is not responsible for the loss or damage to personal belongings. Attendees are advised to exercise caution and keep valuables secure.",
              ]}
            />
            <Section
              title="7. Privacy Policy"
              items={[
                "At Synapse, we are unwavering in our commitment to safeguarding your privacy and ensuring the security of your personal information. By using our website or participating in our events, you agree to the terms outlined in this policy.",
                "Synapse collects personal data, such as names, email addresses, phone numbers, and other information you voluntarily provide during registrations or inquiries. We may also gather event-specific details, including T-shirt preferences or emergency contact information, to ensure seamless participation.",
                "Your data is utilized strictly for event management, communication of updates and announcements, and ensuring the security and integrity of our operations.",
                "Synapse does not sell, rent, or trade your personal information under any circumstances. Your data is shared only with trusted service providers (e.g., payment processors or logistics partners) and solely for operational purposes.",
                "We employ rigorous data protection measures, including advanced encryption and restricted access protocols, to protect your information from unauthorized access, alteration, or misuse.",
                "You retain the right to access, correct, or request the deletion of your personal information at any time. You may also opt out of receiving non-essential communications by contacting us directly.",
                "While Synapse&apos;s website may include links to third-party sites for your convenience, we are not responsible for the privacy practices or content of these external platforms.",
                "Synapse reserves the right to update this Privacy Policy at its sole discretion. Any revisions will be posted on this page, along with an updated “Effective Date.”",
              ]}
            />
            <p className="text-gray-300 text-center font-bold text-sm md:text-base sm:mt-9">
              If you have any questions, concerns, or requests regarding this
              policy, please reach out to us at synapse.thefest@gmail.com, +91
              7984245141. Synapse is dedicated to maintaining your trust and
              protecting your privacy&nbsp;at&nbsp;all&nbsp;times.
            </p>

            <p className="text-gray-400 text-xs md:text-sm mt-6">
              By attending Synapse&apos;25, you agree to abide by these terms
              and conditions. Failure to comply may result in removal from the
              festival premises without any refund. We appreciate your
              cooperation in making Synapse&apos;25 a memorable and magical
              experience for everyone!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
