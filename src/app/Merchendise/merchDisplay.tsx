"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export default function MerchandisePage() {
  const [selectedSize, setSelectedSize] = useState("S");

  useEffect(() => {
    // Initial animation
    gsap.from(".product-image", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".size-button", {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });
  }, []);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);

    // Button click animation
    gsap.to(`#size-${size}`, {
      scale: 0.9,
      yoyo: true,
      repeat: 1,
      duration: 0.2,
    });
  };

  return (
    <main className="min-h-screen bg-black p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-gray-900 to-black rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 border border-blue-500/30 mt-8 sm:mt-12 md:mt-16">
        {/* Product Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          <div className="product-image relative aspect-square bg-white rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="T-shirt Front"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="product-image relative aspect-square bg-white rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="T-shirt Back"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-white text-lg mb-4">Choose your size</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                id={`size-${size}`}
                onClick={() => handleSizeClick(size)}
                className={`size-button h-10 w-10 sm:h-12 sm:w-12 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedSize === size
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price and Booking */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="text-white text-2xl font-bold">₹300</div>
          <Button
            className="book-button w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-lg"
            onClick={() => {
              gsap.to(".book-button", {
                scale: 0.95,
                yoyo: true,
                repeat: 1,
                duration: 0.2,
              });
            }}
          >
            Book your Merchandise
          </Button>
        </div>
      </div>
    </main>
  );
}
