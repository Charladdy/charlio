import React from "react";
import Image from "next/image";

export default function page(){
    return(
        <div className="page-content">
            <h1 className="text-2xl font-semibold mb-5">Knowhow. Expertise. Service. It's in our blood.</h1>
            <div>                
                <Image className="w-[50%] float-left mr-2" src="/ypc/ypc_family.png" width={500} height={500} alt={"Three generations of expertise"}/>
                <div className="mb-5">For more than 50 years, three generations of the Plum family have 
                provided the greater Yardsdale community with plumbing and HVAC services.</div>
                <div>Charlio has nowhere near that level of expertise. Fifty years ago, most 
                people would have been looking up plumbers in their local paper or in the 
                phone book. Word of mouth is still important, but having a website is indispensable 
                when people search for plumbers or other local businesses with Google or other similar 
                search engines.</div>
                <div>When you choose Charlio to make your website, you're choosing a 
                partner you can trust in. We not only give your business a presence that 
                stands out on the internet, but we can also optimize it so that it is easy for 
                prospective customers to find and contact your business.</div>                
            </div>
        </div>
    );
}