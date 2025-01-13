"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StarryBackground from "@/components/StarryBackground";

// import { Roboto } from "next/font/google";
import { Almendra_SC } from "next/font/google";
import Navbar from "./navbar";
import Carasoul from "@/components/Carasoul"
import { Button } from "@/components/ui/button";

const almendra = Almendra_SC({
    subsets: ["latin"],
    weight: "400",
});



const Parallax = () => {
    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // const speed = 100;

        // ==============Mountains=================================
        gsap.to(".mountainBB", {
            scrollTrigger: {
                trigger: ".scene1",
                start: "center 45%",
                end: "center top",
                scrub: 2
            },
            x: "-100%",
        })

        gsap.to(".mountainRB", {
            scrollTrigger: {
                trigger: ".scene1",
                start: "center 45%",
                end: "center top",
                scrub: 3
            },
            y: "150%",
        })

        gsap.to(".mountainm15", {
            scrollTrigger: {
                trigger: ".scene1",
                start: "center 45%",
                end: "center top",
                scrub: 3
            },
            x: "150%",
        })

        gsap.to(".mountainR", {
            scrollTrigger: {
                trigger: ".scene1",
                start: "center 45%",
                end: "center top",
                scrub: 4
            },
            x: "100%",
        })

        gsap.to(".mountainLB", {
            scrollTrigger: {
                trigger: ".scene1",
                start: "center 45%",
                end: "center top",
                scrub: 4
            },
            x: "-100%",
        })

        gsap.to(".mountainL", {
            scrollTrigger: {
                trigger: ".scene1",
                start: "center 45%",
                end: "center top",
                scrub: 3
            },
            x: "-100%",
        })
        // =========================================================

        gsap.to(".synapselogo", {
            scrollTrigger: {
                trigger: ".scene1",
                start: "center 45%",
                end: "center top",
                // pin: true,
                scrub: 1
            },
            y: "100%",
        })

        gsap.to(".castle", {
            scrollTrigger: {
                trigger: ".scene1",
                start: "center 45%",
                end: "center top",
                // pin: true,
                scrub: 1
            },
            y: "100%",
        })

        // ===================TREES=================================
        gsap.to(".tree", {
            scrollTrigger: {
                trigger: ".scene1",
                start: "center 45%",
                end: "center top",
                scrub: 3
            },
            y: "100%",
        })
        // =========================================================

        gsap.to(".btmhomes", {
            scrollTrigger: {
                trigger: ".scene1",
                start: "80% 45%",
                end: "80% 30%",
                scrub: 3
            },
            y: "-50%",
        })

        gsap.to(".broom", {
            scrollTrigger: {
                trigger: ".scene1",
                start: "80% 45%",
                end: "80% 30%",
                scrub: 3
            },
            y: "-70%",
            x: "400%"
        })

        // ===================FLAGS=================================
        gsap.to(".flag1", {
            scrollTrigger: {
                trigger: ".scene3",
                start: "top 45%",
                end: "top 40%",
                scrub: 3
            },
            y: "0%",
        })

        gsap.to(".flag2", {
            scrollTrigger: {
                trigger: ".scene3",
                start: "8% 45%",
                end: "8% 40%",
                scrub: 3
            },
            y: "0%",
        })

        gsap.to(".flag3", {
            scrollTrigger: {
                trigger: ".scene3",
                start: "12% 45%",
                end: "12% 40%",
                scrub: 3
            },
            y: "0%",
        })

        gsap.to(".flag4", {
            scrollTrigger: {
                trigger: ".scene3",
                start: "15% 45%",
                end: "15% 40%",
                scrub: 3
            },
            y: "0%",
        })
        // =========================================================

        return () => {
            // Clean up ScrollTriggers on unmount
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="scrollElement">
            <Navbar />
            <div className="scene1 h-[100vh]">
                <StarryBackground />
                <img
                    className="mountainBB"
                    src="/m14.svg"
                    alt="Mountain"
                />
                <img
                    className="mountainRB"
                    src="/m13.svg"
                    alt="Mountain"
                />
                <img
                    className="mountainm15"
                    src="/m15.svg"
                    alt="Mountain"
                />
                <img
                    className="mountainR"
                    src="/mtree.svg"
                    alt="Mountain"
                />
                <div className="flex justify-center items-center w-full">
                    <img
                        className="synapselogo"
                        src="/synapselogo.svg"
                        alt="synapselogo"
                    />
                </div>
                <img
                    className="mountainLB"
                    src="/m11.svg"
                    alt="Mountain"
                />
                <div className="flex justify-center items-center w-full">
                    <img
                        className="castle"
                        src="/castle1.svg"
                        alt="castle"
                    />
                </div>
                <img
                    className="mountainL"
                    src="/mgrass.svg"
                    alt="Mountain"
                />

                <img
                    className="tree tree1" // tree
                    src="/tree.svg"
                    alt="Tree"
                />
                <img
                    className="tree tree2" // tree
                    src="/tree.svg"
                    alt="Tree"
                />
                <img
                    className="tree tree3" // tree
                    src="/tree.svg"
                    alt="Tree"
                />
                <img
                    className="tree tree4" // tree
                    src="/tree.svg"
                    alt="Tree"
                />
                <img
                    className="tree tree5" // tree
                    src="/tree.svg"
                    alt="Tree"
                />
                <img
                    className="tree tree6" // tree
                    src="/tree.svg"
                    alt="Tree"
                />

                <div className="w-full h-full flex justify-center items-center">
                    <Button className="absolute bg-[#09090b] border-solid border-2 border-[#27272a] text-lg p-6 rounded-2xl drop-shadow-[0px_0px_4px_#fffae7]">
                        Register
                    </Button>
                </div>
            </div>

            <div className="scene2 w-full h-[100vh]">
                <StarryBackground />
                <div className="flex w-[50vw] h-fit">
                    <div>
                        <p className={`ml-4 mt-[4rem] pl-10 text-6xl ${almendra.className}`}>
                            THEME
                        </p>
                        <p className={`ml-4 mt-3 pl-10 text-lg ${almendra.className}`}>
                            Step into the Wizarding Whirl, our enchanting college festival celebrating diversity,
                            creativity, and camaraderie. Experience mesmerizing musical performances, interactive
                            potion-making workshops, and a spellbinding lineup of events that capture the magic of
                            our vibrant community. Let this unforgettable celebration awaken your inner wizard and
                            unite us all in the spirit of magic.
                        </p>
                    </div>
                </div>
                <img
                    className="btmhomes"
                    src="/bottom homes.svg"
                    alt="Homes"
                />
                <img
                    className="broom"
                    src="/quidditch-harry-potter.svg"
                    alt="Broom"
                />
            </div>
            <div className="scene3 h-[60vh]">
                <StarryBackground />
                <div className="h-fit flex flex-col justify-center items-center">
                    <div className="h-fit w-full flex justify-center items-center">
                        <p className={`text-6xl ${almendra.className}`}>
                            EXPLORE EVENTS
                        </p>
                    </div>
                    <div className="flags  h-fit w-full pt-8 flex justify-center items-center">
                        <div className="grid grid-cols-4 gap-16">
                            <Image
                                className="flag1 translate-y-[-150%] cursor-pointer"
                                src="/flag1.png"
                                alt="Flags"
                                width={150}
                                height={150}
                            />
                            <Image
                                className="flag2 translate-y-[-150%] cursor-pointer"
                                src="/flag2.png"
                                alt="Flags"
                                width={150}
                                height={150}
                            />
                            <Image
                                className="flag3 translate-y-[-150%] cursor-pointer"
                                src="/flag3.png"
                                alt="Flags"
                                width={150}
                                height={150}
                            />
                            <Image
                                className="flag4 translate-y-[-150%] cursor-pointer"
                                src="/flag4.png"
                                alt="Flags"
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="scene4 h-[100vh]">
                <StarryBackground />
                <Carasoul />
            </div>
        </div>
    )
}

export default Parallax;