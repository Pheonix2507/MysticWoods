import Image from "next/image";
import React from "react";
import { Roboto } from 'next/font/google';
import { Almendra_SC } from "next/font/google";
import img_8 from '../assets/image_8.png'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const almendra = Almendra_SC({
  subsets: ['latin'],
  weight: '400',
});


interface SectionProps {
  title: string;
  items: string[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300 mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TermsAndConditions: React.FC = () => {
  return (
    
    <div className="flex relative items-center justify-center min-h-screen bg-cover bg-black bg-center">
        <Image src={img_8} className="object-cover absolute top-0 left-0"  fill alt="TnC-BG"/>
      <div className=" shadow-md rounded-lg max-w-3xl w-full p-8">
        <header className="text-center mb-6">
          <span className={almendra.className}><h1 className="text-white mb-3 text-[5rem]">Terms & Conditions</h1></span>
          <p className="text-gray-300">
            Welcome to Synapse&apos;25! To ensure a  n enjoyable and hassle-free experience for all attendees, please carefully
            read and adhere to the following terms and conditions:
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
              "Synapse'25 is a safe and inclusive space for everyone. Any form of nuisance, including but not limited to disruptive behavior, harassment, or vandalism, will not be tolerated.",
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
              "All payments for Synapse'25 events will be processed through the Razorpay payment gateway.",
              "You can make payments using UPI, Debit Card, Credit Card, or Internet Banking.",
            ]}
          />

          <Section
            title="6. Liability"
            items={[
              "The Synapse Committee is not responsible for the loss or damage to personal belongings. Attendees are advised to exercise caution and keep valuables secure.",
            ]}
          />

          <p className="text-gray-400 text-sm mt-6">
            By attending Synapse&apos;25, you agree to abide by these terms and conditions. Failure to comply may result in
            removal from the festival premises without any refund. We appreciate your cooperation in making Synapse&apos;25 a
            memorable and magical experience for everyone!
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;