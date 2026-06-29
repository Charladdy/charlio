'use client'

export default function Footer(){
    return(
            <div className="footer-div">
                <p className="footer-copyright">Copyright &copy;{new Date().getFullYear()} Charladdy Interactive. All rights reserved.</p>
                <div className="absolute flex right w-[80%] md:w-[50%] right-5 bottom-4 md:top-8 md:bottom-auto">
                    <div className="text-white underline border-r hover:font-semibold flex-1 text-center"><a href="/cookies" target="_blank">Cookies</a></div>
                    <div className="text-white underline border-r hover:font-semibold flex-1 text-center"><a href="https://charladdy.com/tos" target="_blank">Terms of Service</a></div>
                    <div className="text-white underline hover:font-semibold flex-1 text-center"><a href="https://charladdy.com/privacy" target="_blank">Privacy</a></div>
                </div>
            </div>
    )
}