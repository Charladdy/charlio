import React from "react";
import Image from "next/image";

export default function page(){
    return(
        <>
        <div className="hero-div">
            <Image className="splash-photo" src="/plumber_sink.png" height={1000} width={1000} alt="Piping background element" style={{}}/>
            <div className="hero-pane">
            <Image className="hero-logo" src="/plumb-logo3.png" height={500} width={500} alt="Plumb Perfect logo"/>
            </div>
                <div className="brand-pipe-copy-container">
                    <div className ="brand-pipe-copy1">Yardsdale's hometown plumber</div>
                    <div className ="brand-pipe-copy2">Since 1973</div>
                </div>         
            <a href="/contact" className="hero-btn">Get an estimate</a>
        </div>
        </>
    )
}