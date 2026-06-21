import React from "react";
import Image from "next/image";

export default function page(){
    return(
        <>
            <div className="hero-div">
                <div className="splash-photo">
                    <Image src="/plumber_sink.png" height={1000} width={1000} alt="Piping background element" style={{}}/>
                </div>
                <div className="hero-pane">
                <Image className="hero-logo" src="/plumb-logo3.png" height={500} width={500} alt="Plumb Perfect logo"/>
                </div>
                    <div className="hero-text-wrapper absolute right-[10%] top-[40%] text-white text-[4vw] sm:text-2xl text-shadow-[3px_3px_2px_rgb(0_0_0_/_0.65)]">
                        <div className ="">Yardsdale's hometown plumber</div>
                        <div className ="italic">Since 1973</div>
                    </div>         
                <a href="/contact" className="hero-btn">Get an estimate</a>
            </div>
            <div className="h-[50vh] m-auto py-15 min-h-80 w-md">
                <div>Yardsdale Plumbing Company is your one-stop-shop for all of your 
                    plumbing and HVAC needs in the greater Yardsdale area. Our team of over 
                    30 professionals are available to provide repair and installation services 
                    with quick turnaround time.
                </div>
                <div className="mt-5">When you choose YPC, you are choosing experience, expertise and 
                    quality. <span className="text-blue-700 hover:text-blue-600"><a href="/yardsdale-plumbing-co/contact">Contact us</a></span> today to get an estimate or find out 
                    more about <span className="text-blue-700 hover:text-blue-600"><a href="/yardsdale-plumbing-co/services">our services</a></span>.
                </div>
                <div className="mt-5">Yardsdale Plumbing Company - Quality you can trust. Value you can believe in.
                </div>
            </div>
        </>
    )
}