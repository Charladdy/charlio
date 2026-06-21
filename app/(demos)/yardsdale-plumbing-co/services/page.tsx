import React from "react";
import Image from "next/image";

export default function page(){
    return(
        <div className="page-content">
            <h1 className="text-2xl font-semibold mb-5">Our Services</h1>
            <div>                
                <Image className="w-[50%] float-right ml-2" src="/ypc/ypc_van.png" width={500} height={500} alt={"YPC Van"}/>
                <div className="mb-5">For more than 50 years, three generations of the Plum family have 
                provided the greater Yardsdale community with plumbing and HVAC services.</div>
                <h2 className="text-lg font-semibold mt-5 mb-2">Plumbing</h2>
                <div>Charlio has nowhere near that level of expertise. Fifty years ago, most 
                people would have been looking up plumbers in their local paper or in the 
                phone book. Word of mouth is still important, but having a website is indispensable 
                when people search for plumbers or other local businesses with Google or other similar 
                search engines.</div>               
            </div>
            <div>
                <h2 className="text-lg font-semibold mt-5 mb-2">HVAC</h2>
                <Image className="w-[60%] float-left mr-2" src="/ypc/ypc_hvac.png" width={500} height={500} alt={"HVAC"}/>
                <div>When you choose Charlio to make your website, you're choosing a 
                partner you can trust in. We not only give your business a presence that 
                stands out on the internet, but we can also optimize it so that it is easy for 
                prospective customers to find and contact your business.</div> 
            </div>
        </div>
    );
}