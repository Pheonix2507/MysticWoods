import { useEffect } from "react";
import Image from "next/image";
import CircleLogo from "./assets/SVGID.png";
import { useRouter } from "next/navigation";

import { Roboto } from "next/font/google";
import { Almendra_SC } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const almendra = Almendra_SC({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const router = useRouter();

  useEffect(() => {
    const logo = document.querySelector(".CircleLogo");
    if (logo) {
      window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        logo.style.transform = `rotate(${0.2 * scrolled}deg)`;
      });
    }
  }, []);
  function opennavbar() {
    const contlogo = document.getElementsByClassName("contlogo")[0];
    contlogo.classList.toggle("shownavbar");
    const navgrid2 = document.getElementsByClassName("navgrid2")[0];
    navgrid2.classList.toggle("navgrid2display");

    const child1 = document.getElementsByClassName("child1")[0];
    child1.classList.toggle("changeham1");
    const child2 = document.getElementsByClassName("child2")[0];
    child2.classList.toggle("changeham2");
    const child3 = document.getElementsByClassName("child3")[0];
    child3.classList.toggle("changeham3");
  }

  return (
    <div className="navbar z-50">
      <div className="contlogo">
        <div className="navgrid p-4">
          {/* <Image 
                        alt="" 
                        onClick={handleRedirect} 
                        className='object-contain logo pointer' 
                        width={10}
                        height={10}
                        src={CircleLogo}
                    /> */}
          <Image
            src={CircleLogo}
            onClick={() => router.push("/")}
            alt="Synapse Logo"
            className="w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem]"
            priority
          />
          <div className="navflex">
            <div className="navlinks" onClick={opennavbar}>
              <div className="navflex2">
                {/* <img className='menuimg' src={menu}></img> */}
                <div className="backgroundmenuicon">
                  <button className="menu__icon">
                    <span className="child1"></span>
                    <span className="child2"></span>
                    <span className="child3"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`navgrid2 ${almendra.className}`}>
          <div className="overflowgrid">
            <div
              className="navptags navp1"
              onClick={() => router.push("/Coming-Soon")}
            >
              <span>ProNite</span>
              <div className="arrowsvgcontainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 475 292"
                  width="475"
                  height="292"
                  preserveAspectRatio="xMidYMid meet"
                  className="arrowsvg1"
                >
                  <defs>
                    <clipPath id="_lottie_element_2">
                      <rect width="475" height="292" x="0" y="0"></rect>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#_lottie_element_2)">
                    <g
                      transform="matrix(0,-5.28000020980835,5.28000020980835,0,788,146)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(255,255,255)"
                          fillOpacity="1"
                          d=" M-5.349999904632568,-58.26599884033203 C-5.349999904632568,-58.26599884033203 5.409999847412109,-58.26599884033203 5.409999847412109,-58.26599884033203 C5.409999847412109,-58.26599884033203 5.409999847412109,22.67799949645996 5.409999847412109,22.67799949645996 C10.314000129699707,16.274999618530273 18.475000381469727,0.7129999995231628 27.67799949645996,-0.05000000074505806 C27.67799949645996,-0.05000000074505806 27.67799949645996,10.63599967956543 27.67799949645996,10.63599967956543 C21.548999786376953,10.63599967956543 6.336999893188477,29.843000411987305 5.409999847412109,42.57899856567383 C5.409999847412109,42.57899856567383 -5.349999904632568,42.57899856567383 -5.349999904632568,42.57899856567383 C-6.2769999504089355,29.843000411987305 -21.507999420166016,10.63599967956543 -27.636999130249023,10.63599967956543 C-27.636999130249023,10.63599967956543 -27.617000579833984,-0.05000000074505806 -27.617000579833984,-0.05000000074505806 C-18.413999557495117,0.7129999995231628 -10.253999710083008,16.274999618530273 -5.349999904632568,22.67799949645996 C-5.349999904632568,22.67799949645996 -5.349999904632568,-58.26599884033203 -5.349999904632568,-58.26599884033203z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,-5.28000020980835,5.28000020980835,0,258,146)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          className="arrowsvgcolor"
                          fill="rgb(255,255,255)"
                          fillOpacity="1"
                          d=" M-5.349999904632568,-45.553001403808594 C-5.349999904632568,-45.553001403808594 5.409999847412109,-45.553001403808594 5.409999847412109,-45.553001403808594 C5.409999847412109,-45.553001403808594 5.409999847412109,19.68199920654297 5.409999847412109,19.68199920654297 C10.314000129699707,13.279000282287598 18.475000381469727,7.468999862670898 27.67799949645996,6.705999851226807 C27.67799949645996,6.705999851226807 27.67799949645996,17.392000198364258 27.67799949645996,17.392000198364258 C21.548999786376953,17.392000198364258 6.336999893188477,25.263999938964844 5.409999847412109,38 C5.409999847412109,38 -5.349999904632568,38 -5.349999904632568,38 C-6.2769999504089355,25.263999938964844 -21.507999420166016,17.392000198364258 -27.636999130249023,17.392000198364258 C-27.636999130249023,17.392000198364258 -27.617000579833984,6.705999851226807 -27.617000579833984,6.705999851226807 C-18.413999557495117,7.468999862670898 -10.253999710083008,13.279000282287598 -5.349999904632568,19.68199920654297 C-5.349999904632568,19.68199920654297 -5.349999904632568,-45.553001403808594 -5.349999904632568,-45.553001403808594z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div
              className="navptags navp2"
              onClick={() => router.push("/Events-Page")}
            >
              <span>Events</span>
              <div className="arrowsvgcontainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 475 292"
                  width="475"
                  height="292"
                  preserveAspectRatio="xMidYMid meet"
                  className="arrowsvg1"
                >
                  <defs>
                    <clipPath id="_lottie_element_2">
                      <rect width="475" height="292" x="0" y="0"></rect>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#_lottie_element_2)">
                    <g
                      transform="matrix(0,-5.28000020980835,5.28000020980835,0,788,146)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(255,255,255)"
                          fillOpacity="1"
                          d=" M-5.349999904632568,-58.26599884033203 C-5.349999904632568,-58.26599884033203 5.409999847412109,-58.26599884033203 5.409999847412109,-58.26599884033203 C5.409999847412109,-58.26599884033203 5.409999847412109,22.67799949645996 5.409999847412109,22.67799949645996 C10.314000129699707,16.274999618530273 18.475000381469727,0.7129999995231628 27.67799949645996,-0.05000000074505806 C27.67799949645996,-0.05000000074505806 27.67799949645996,10.63599967956543 27.67799949645996,10.63599967956543 C21.548999786376953,10.63599967956543 6.336999893188477,29.843000411987305 5.409999847412109,42.57899856567383 C5.409999847412109,42.57899856567383 -5.349999904632568,42.57899856567383 -5.349999904632568,42.57899856567383 C-6.2769999504089355,29.843000411987305 -21.507999420166016,10.63599967956543 -27.636999130249023,10.63599967956543 C-27.636999130249023,10.63599967956543 -27.617000579833984,-0.05000000074505806 -27.617000579833984,-0.05000000074505806 C-18.413999557495117,0.7129999995231628 -10.253999710083008,16.274999618530273 -5.349999904632568,22.67799949645996 C-5.349999904632568,22.67799949645996 -5.349999904632568,-58.26599884033203 -5.349999904632568,-58.26599884033203z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,-5.28000020980835,5.28000020980835,0,258,146)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          className="arrowsvgcolor"
                          fill="rgb(255,255,255)"
                          fillOpacity="1"
                          d=" M-5.349999904632568,-45.553001403808594 C-5.349999904632568,-45.553001403808594 5.409999847412109,-45.553001403808594 5.409999847412109,-45.553001403808594 C5.409999847412109,-45.553001403808594 5.409999847412109,19.68199920654297 5.409999847412109,19.68199920654297 C10.314000129699707,13.279000282287598 18.475000381469727,7.468999862670898 27.67799949645996,6.705999851226807 C27.67799949645996,6.705999851226807 27.67799949645996,17.392000198364258 27.67799949645996,17.392000198364258 C21.548999786376953,17.392000198364258 6.336999893188477,25.263999938964844 5.409999847412109,38 C5.409999847412109,38 -5.349999904632568,38 -5.349999904632568,38 C-6.2769999504089355,25.263999938964844 -21.507999420166016,17.392000198364258 -27.636999130249023,17.392000198364258 C-27.636999130249023,17.392000198364258 -27.617000579833984,6.705999851226807 -27.617000579833984,6.705999851226807 C-18.413999557495117,7.468999862670898 -10.253999710083008,13.279000282287598 -5.349999904632568,19.68199920654297 C-5.349999904632568,19.68199920654297 -5.349999904632568,-45.553001403808594 -5.349999904632568,-45.553001403808594z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            

            {/* <a className='navptags navp3' href="./assets/event_schedule.pdf" >
                            <span>Schedule</span>
                            <div className="arrowsvgcontainer">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 475 292"
                                    width="475" height="292"
                                    preserveAspectRatio="xMidYMid meet"
                                    className="arrowsvg1"><defs>
                                        <clipPath id="_lottie_element_2"><rect width="475" height="292" x="0" y="0"></rect></clipPath></defs>
                                    <g clipPath="url(#_lottie_element_2)">
                                        <g transform="matrix(0,-5.28000020980835,5.28000020980835,0,788,146)" opacity="1">
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path fill="rgb(255,255,255)" fillOpacity="1" d=" M-5.349999904632568,-58.26599884033203 C-5.349999904632568,-58.26599884033203 5.409999847412109,-58.26599884033203 5.409999847412109,-58.26599884033203 C5.409999847412109,-58.26599884033203 5.409999847412109,22.67799949645996 5.409999847412109,22.67799949645996 C10.314000129699707,16.274999618530273 18.475000381469727,0.7129999995231628 27.67799949645996,-0.05000000074505806 C27.67799949645996,-0.05000000074505806 27.67799949645996,10.63599967956543 27.67799949645996,10.63599967956543 C21.548999786376953,10.63599967956543 6.336999893188477,29.843000411987305 5.409999847412109,42.57899856567383 C5.409999847412109,42.57899856567383 -5.349999904632568,42.57899856567383 -5.349999904632568,42.57899856567383 C-6.2769999504089355,29.843000411987305 -21.507999420166016,10.63599967956543 -27.636999130249023,10.63599967956543 C-27.636999130249023,10.63599967956543 -27.617000579833984,-0.05000000074505806 -27.617000579833984,-0.05000000074505806 C-18.413999557495117,0.7129999995231628 -10.253999710083008,16.274999618530273 -5.349999904632568,22.67799949645996 C-5.349999904632568,22.67799949645996 -5.349999904632568,-58.26599884033203 -5.349999904632568,-58.26599884033203z">
                                                </path>
                                            </g>
                                        </g>
                                        <g transform="matrix(0,-5.28000020980835,5.28000020980835,0,258,146)" opacity="1">
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path className="arrowsvgcolor" fill="rgb(255,255,255)" fillOpacity="1" d=" M-5.349999904632568,-45.553001403808594 C-5.349999904632568,-45.553001403808594 5.409999847412109,-45.553001403808594 5.409999847412109,-45.553001403808594 C5.409999847412109,-45.553001403808594 5.409999847412109,19.68199920654297 5.409999847412109,19.68199920654297 C10.314000129699707,13.279000282287598 18.475000381469727,7.468999862670898 27.67799949645996,6.705999851226807 C27.67799949645996,6.705999851226807 27.67799949645996,17.392000198364258 27.67799949645996,17.392000198364258 C21.548999786376953,17.392000198364258 6.336999893188477,25.263999938964844 5.409999847412109,38 C5.409999847412109,38 -5.349999904632568,38 -5.349999904632568,38 C-6.2769999504089355,25.263999938964844 -21.507999420166016,17.392000198364258 -27.636999130249023,17.392000198364258 C-27.636999130249023,17.392000198364258 -27.617000579833984,6.705999851226807 -27.617000579833984,6.705999851226807 C-18.413999557495117,7.468999862670898 -10.253999710083008,13.279000282287598 -5.349999904632568,19.68199920654297 C-5.349999904632568,19.68199920654297 -5.349999904632568,-45.553001403808594 -5.349999904632568,-45.553001403808594z">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </a>*/
                        // <div className='navptags navp4' onClick={() => router.push("/Team-page")} >
                        //     <span>Team</span>
                        //     <div className="arrowsvgcontainer">
                        //         <svg xmlns="http://www.w3.org/2000/svg"
                        //             viewBox="0 0 475 292"
                        //             width="475" height="292"
                        //             preserveAspectRatio="xMidYMid meet"
                        //             className="arrowsvg1"><defs>
                        //                 <clipPath id="_lottie_element_2"><rect width="475" height="292" x="0" y="0"></rect></clipPath></defs>
                        //             <g clipPath="url(#_lottie_element_2)">
                        //                 <g transform="matrix(0,-5.28000020980835,5.28000020980835,0,788,146)" opacity="1">
                        //                     <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        //                         <path fill="rgb(255,255,255)" fillOpacity="1" d=" M-5.349999904632568,-58.26599884033203 C-5.349999904632568,-58.26599884033203 5.409999847412109,-58.26599884033203 5.409999847412109,-58.26599884033203 C5.409999847412109,-58.26599884033203 5.409999847412109,22.67799949645996 5.409999847412109,22.67799949645996 C10.314000129699707,16.274999618530273 18.475000381469727,0.7129999995231628 27.67799949645996,-0.05000000074505806 C27.67799949645996,-0.05000000074505806 27.67799949645996,10.63599967956543 27.67799949645996,10.63599967956543 C21.548999786376953,10.63599967956543 6.336999893188477,29.843000411987305 5.409999847412109,42.57899856567383 C5.409999847412109,42.57899856567383 -5.349999904632568,42.57899856567383 -5.349999904632568,42.57899856567383 C-6.2769999504089355,29.843000411987305 -21.507999420166016,10.63599967956543 -27.636999130249023,10.63599967956543 C-27.636999130249023,10.63599967956543 -27.617000579833984,-0.05000000074505806 -27.617000579833984,-0.05000000074505806 C-18.413999557495117,0.7129999995231628 -10.253999710083008,16.274999618530273 -5.349999904632568,22.67799949645996 C-5.349999904632568,22.67799949645996 -5.349999904632568,-58.26599884033203 -5.349999904632568,-58.26599884033203z">
                        //                         </path>
                        //                     </g>
                        //                 </g>
                        //                 <g transform="matrix(0,-5.28000020980835,5.28000020980835,0,258,146)" opacity="1">
                        //                     <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        //                         <path className="arrowsvgcolor" fill="rgb(255,255,255)" fillOpacity="1" d=" M-5.349999904632568,-45.553001403808594 C-5.349999904632568,-45.553001403808594 5.409999847412109,-45.553001403808594 5.409999847412109,-45.553001403808594 C5.409999847412109,-45.553001403808594 5.409999847412109,19.68199920654297 5.409999847412109,19.68199920654297 C10.314000129699707,13.279000282287598 18.475000381469727,7.468999862670898 27.67799949645996,6.705999851226807 C27.67799949645996,6.705999851226807 27.67799949645996,17.392000198364258 27.67799949645996,17.392000198364258 C21.548999786376953,17.392000198364258 6.336999893188477,25.263999938964844 5.409999847412109,38 C5.409999847412109,38 -5.349999904632568,38 -5.349999904632568,38 C-6.2769999504089355,25.263999938964844 -21.507999420166016,17.392000198364258 -27.636999130249023,17.392000198364258 C-27.636999130249023,17.392000198364258 -27.617000579833984,6.705999851226807 -27.617000579833984,6.705999851226807 C-18.413999557495117,7.468999862670898 -10.253999710083008,13.279000282287598 -5.349999904632568,19.68199920654297 C-5.349999904632568,19.68199920654297 -5.349999904632568,-45.553001403808594 -5.349999904632568,-45.553001403808594z">
                        //                         </path>
                        //                     </g>
                        //                 </g>
                        //             </g>
                        //         </svg>
                        //     </div>
                        // </div>
                        /*
                        <div className='navptags navp5' onClick={() => changePageinApp('sponsors')} >
                            <span>Sponsors</span>
                            <div className="arrowsvgcontainer">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 475 292"
                                width="475" height="292"
                                preserveAspectRatio="xMidYMid meet"
                                className="arrowsvg1"><defs>
                                    <clipPath id="_lottie_element_2"><rect width="475" height="292" x="0" y="0"></rect></clipPath></defs>
                                <g clipPath="url(#_lottie_element_2)">
                                    <g transform="matrix(0,-5.28000020980835,5.28000020980835,0,788,146)" opacity="1">
                                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                            <path fill="rgb(255,255,255)" fillOpacity="1" d=" M-5.349999904632568,-58.26599884033203 C-5.349999904632568,-58.26599884033203 5.409999847412109,-58.26599884033203 5.409999847412109,-58.26599884033203 C5.409999847412109,-58.26599884033203 5.409999847412109,22.67799949645996 5.409999847412109,22.67799949645996 C10.314000129699707,16.274999618530273 18.475000381469727,0.7129999995231628 27.67799949645996,-0.05000000074505806 C27.67799949645996,-0.05000000074505806 27.67799949645996,10.63599967956543 27.67799949645996,10.63599967956543 C21.548999786376953,10.63599967956543 6.336999893188477,29.843000411987305 5.409999847412109,42.57899856567383 C5.409999847412109,42.57899856567383 -5.349999904632568,42.57899856567383 -5.349999904632568,42.57899856567383 C-6.2769999504089355,29.843000411987305 -21.507999420166016,10.63599967956543 -27.636999130249023,10.63599967956543 C-27.636999130249023,10.63599967956543 -27.617000579833984,-0.05000000074505806 -27.617000579833984,-0.05000000074505806 C-18.413999557495117,0.7129999995231628 -10.253999710083008,16.274999618530273 -5.349999904632568,22.67799949645996 C-5.349999904632568,22.67799949645996 -5.349999904632568,-58.26599884033203 -5.349999904632568,-58.26599884033203z">
                                            </path>
                                        </g>
                                    </g>
                                    <g transform="matrix(0,-5.28000020980835,5.28000020980835,0,258,146)" opacity="1">
                                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                            <path className="arrowsvgcolor" fill="rgb(255,255,255)" fillOpacity="1" d=" M-5.349999904632568,-45.553001403808594 C-5.349999904632568,-45.553001403808594 5.409999847412109,-45.553001403808594 5.409999847412109,-45.553001403808594 C5.409999847412109,-45.553001403808594 5.409999847412109,19.68199920654297 5.409999847412109,19.68199920654297 C10.314000129699707,13.279000282287598 18.475000381469727,7.468999862670898 27.67799949645996,6.705999851226807 C27.67799949645996,6.705999851226807 27.67799949645996,17.392000198364258 27.67799949645996,17.392000198364258 C21.548999786376953,17.392000198364258 6.336999893188477,25.263999938964844 5.409999847412109,38 C5.409999847412109,38 -5.349999904632568,38 -5.349999904632568,38 C-6.2769999504089355,25.263999938964844 -21.507999420166016,17.392000198364258 -27.636999130249023,17.392000198364258 C-27.636999130249023,17.392000198364258 -27.617000579833984,6.705999851226807 -27.617000579833984,6.705999851226807 C-18.413999557495117,7.468999862670898 -10.253999710083008,13.279000282287598 -5.349999904632568,19.68199920654297 C-5.349999904632568,19.68199920654297 -5.349999904632568,-45.553001403808594 -5.349999904632568,-45.553001403808594z">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            </div>
                        </div>  
                      */}
            <div
              className="navptags navp7"
              onClick={() => router.push("/Terms-and-condition")}
            >
              <span className="">Terms And Condition</span>
              <div className="arrowsvgcontainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 475 292"
                  width="475"
                  height="292"
                  preserveAspectRatio="xMidYMid meet"
                  className="arrowsvg1"
                >
                  <defs>
                    <clipPath id="_lottie_element_2">
                      <rect width="475" height="292" x="0" y="0"></rect>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#_lottie_element_2)">
                    <g
                      transform="matrix(0,-5.28000020980835,5.28000020980835,0,788,146)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(255,255,255)"
                          fillOpacity="1"
                          d=" M-5.349999904632568,-58.26599884033203 C-5.349999904632568,-58.26599884033203 5.409999847412109,-58.26599884033203 5.409999847412109,-58.26599884033203 C5.409999847412109,-58.26599884033203 5.409999847412109,22.67799949645996 5.409999847412109,22.67799949645996 C10.314000129699707,16.274999618530273 18.475000381469727,0.7129999995231628 27.67799949645996,-0.05000000074505806 C27.67799949645996,-0.05000000074505806 27.67799949645996,10.63599967956543 27.67799949645996,10.63599967956543 C21.548999786376953,10.63599967956543 6.336999893188477,29.843000411987305 5.409999847412109,42.57899856567383 C5.409999847412109,42.57899856567383 -5.349999904632568,42.57899856567383 -5.349999904632568,42.57899856567383 C-6.2769999504089355,29.843000411987305 -21.507999420166016,10.63599967956543 -27.636999130249023,10.63599967956543 C-27.636999130249023,10.63599967956543 -27.617000579833984,-0.05000000074505806 -27.617000579833984,-0.05000000074505806 C-18.413999557495117,0.7129999995231628 -10.253999710083008,16.274999618530273 -5.349999904632568,22.67799949645996 C-5.349999904632568,22.67799949645996 -5.349999904632568,-58.26599884033203 -5.349999904632568,-58.26599884033203z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,-5.28000020980835,5.28000020980835,0,258,146)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          className="arrowsvgcolor"
                          fill="rgb(255,255,255)"
                          fillOpacity="1"
                          d=" M-5.349999904632568,-45.553001403808594 C-5.349999904632568,-45.553001403808594 5.409999847412109,-45.553001403808594 5.409999847412109,-45.553001403808594 C5.409999847412109,-45.553001403808594 5.409999847412109,19.68199920654297 5.409999847412109,19.68199920654297 C10.314000129699707,13.279000282287598 18.475000381469727,7.468999862670898 27.67799949645996,6.705999851226807 C27.67799949645996,6.705999851226807 27.67799949645996,17.392000198364258 27.67799949645996,17.392000198364258 C21.548999786376953,17.392000198364258 6.336999893188477,25.263999938964844 5.409999847412109,38 C5.409999847412109,38 -5.349999904632568,38 -5.349999904632568,38 C-6.2769999504089355,25.263999938964844 -21.507999420166016,17.392000198364258 -27.636999130249023,17.392000198364258 C-27.636999130249023,17.392000198364258 -27.617000579833984,6.705999851226807 -27.617000579833984,6.705999851226807 C-18.413999557495117,7.468999862670898 -10.253999710083008,13.279000282287598 -5.349999904632568,19.68199920654297 C-5.349999904632568,19.68199920654297 -5.349999904632568,-45.553001403808594 -5.349999904632568,-45.553001403808594z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div
              className="navptags navp8"
              onClick={() => router.push("/Contact-us")}
            >
              <span>Contact Us</span>
              <div className="arrowsvgcontainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 475 292"
                  width="475"
                  height="292"
                  preserveAspectRatio="xMidYMid meet"
                  className="arrowsvg1"
                >
                  <defs>
                    <clipPath id="_lottie_element_2">
                      <rect width="475" height="292" x="0" y="0"></rect>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#_lottie_element_2)">
                    <g
                      transform="matrix(0,-5.28000020980835,5.28000020980835,0,788,146)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(255,255,255)"
                          fillOpacity="1"
                          d=" M-5.349999904632568,-58.26599884033203 C-5.349999904632568,-58.26599884033203 5.409999847412109,-58.26599884033203 5.409999847412109,-58.26599884033203 C5.409999847412109,-58.26599884033203 5.409999847412109,22.67799949645996 5.409999847412109,22.67799949645996 C10.314000129699707,16.274999618530273 18.475000381469727,0.7129999995231628 27.67799949645996,-0.05000000074505806 C27.67799949645996,-0.05000000074505806 27.67799949645996,10.63599967956543 27.67799949645996,10.63599967956543 C21.548999786376953,10.63599967956543 6.336999893188477,29.843000411987305 5.409999847412109,42.57899856567383 C5.409999847412109,42.57899856567383 -5.349999904632568,42.57899856567383 -5.349999904632568,42.57899856567383 C-6.2769999504089355,29.843000411987305 -21.507999420166016,10.63599967956543 -27.636999130249023,10.63599967956543 C-27.636999130249023,10.63599967956543 -27.617000579833984,-0.05000000074505806 -27.617000579833984,-0.05000000074505806 C-18.413999557495117,0.7129999995231628 -10.253999710083008,16.274999618530273 -5.349999904632568,22.67799949645996 C-5.349999904632568,22.67799949645996 -5.349999904632568,-58.26599884033203 -5.349999904632568,-58.26599884033203z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,-5.28000020980835,5.28000020980835,0,258,146)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          className="arrowsvgcolor"
                          fill="rgb(255,255,255)"
                          fillOpacity="1"
                          d=" M-5.349999904632568,-45.553001403808594 C-5.349999904632568,-45.553001403808594 5.409999847412109,-45.553001403808594 5.409999847412109,-45.553001403808594 C5.409999847412109,-45.553001403808594 5.409999847412109,19.68199920654297 5.409999847412109,19.68199920654297 C10.314000129699707,13.279000282287598 18.475000381469727,7.468999862670898 27.67799949645996,6.705999851226807 C27.67799949645996,6.705999851226807 27.67799949645996,17.392000198364258 27.67799949645996,17.392000198364258 C21.548999786376953,17.392000198364258 6.336999893188477,25.263999938964844 5.409999847412109,38 C5.409999847412109,38 -5.349999904632568,38 -5.349999904632568,38 C-6.2769999504089355,25.263999938964844 -21.507999420166016,17.392000198364258 -27.636999130249023,17.392000198364258 C-27.636999130249023,17.392000198364258 -27.617000579833984,6.705999851226807 -27.617000579833984,6.705999851226807 C-18.413999557495117,7.468999862670898 -10.253999710083008,13.279000282287598 -5.349999904632568,19.68199920654297 C-5.349999904632568,19.68199920654297 -5.349999904632568,-45.553001403808594 -5.349999904632568,-45.553001403808594z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div
              className="navptags navp2"
              onClick={() => router.push("/Profile-page")}
            >
              <span>Profile</span>
              <div className="arrowsvgcontainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 475 292"
                  width="475"
                  height="292"
                  preserveAspectRatio="xMidYMid meet"
                  className="arrowsvg1"
                >
                  <defs>
                    <clipPath id="_lottie_element_2">
                      <rect width="475" height="292" x="0" y="0"></rect>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#_lottie_element_2)">
                    <g
                      transform="matrix(0,-5.28000020980835,5.28000020980835,0,788,146)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(255,255,255)"
                          fillOpacity="1"
                          d=" M-5.349999904632568,-58.26599884033203 C-5.349999904632568,-58.26599884033203 5.409999847412109,-58.26599884033203 5.409999847412109,-58.26599884033203 C5.409999847412109,-58.26599884033203 5.409999847412109,22.67799949645996 5.409999847412109,22.67799949645996 C10.314000129699707,16.274999618530273 18.475000381469727,0.7129999995231628 27.67799949645996,-0.05000000074505806 C27.67799949645996,-0.05000000074505806 27.67799949645996,10.63599967956543 27.67799949645996,10.63599967956543 C21.548999786376953,10.63599967956543 6.336999893188477,29.843000411987305 5.409999847412109,42.57899856567383 C5.409999847412109,42.57899856567383 -5.349999904632568,42.57899856567383 -5.349999904632568,42.57899856567383 C-6.2769999504089355,29.843000411987305 -21.507999420166016,10.63599967956543 -27.636999130249023,10.63599967956543 C-27.636999130249023,10.63599967956543 -27.617000579833984,-0.05000000074505806 -27.617000579833984,-0.05000000074505806 C-18.413999557495117,0.7129999995231628 -10.253999710083008,16.274999618530273 -5.349999904632568,22.67799949645996 C-5.349999904632568,22.67799949645996 -5.349999904632568,-58.26599884033203 -5.349999904632568,-58.26599884033203z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,-5.28000020980835,5.28000020980835,0,258,146)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          className="arrowsvgcolor"
                          fill="rgb(255,255,255)"
                          fillOpacity="1"
                          d=" M-5.349999904632568,-45.553001403808594 C-5.349999904632568,-45.553001403808594 5.409999847412109,-45.553001403808594 5.409999847412109,-45.553001403808594 C5.409999847412109,-45.553001403808594 5.409999847412109,19.68199920654297 5.409999847412109,19.68199920654297 C10.314000129699707,13.279000282287598 18.475000381469727,7.468999862670898 27.67799949645996,6.705999851226807 C27.67799949645996,6.705999851226807 27.67799949645996,17.392000198364258 27.67799949645996,17.392000198364258 C21.548999786376953,17.392000198364258 6.336999893188477,25.263999938964844 5.409999847412109,38 C5.409999847412109,38 -5.349999904632568,38 -5.349999904632568,38 C-6.2769999504089355,25.263999938964844 -21.507999420166016,17.392000198364258 -27.636999130249023,17.392000198364258 C-27.636999130249023,17.392000198364258 -27.617000579833984,6.705999851226807 -27.617000579833984,6.705999851226807 C-18.413999557495117,7.468999862670898 -10.253999710083008,13.279000282287598 -5.349999904632568,19.68199920654297 C-5.349999904632568,19.68199920654297 -5.349999904632568,-45.553001403808594 -5.349999904632568,-45.553001403808594z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
