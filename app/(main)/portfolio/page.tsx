import Image from "next/image"

export default function page(){
    return(
        <div className="page-content">
            <h1 className="text-3xl">Portfolio</h1>
            <p>Browse some demo sites that showcase Charlio's capabilities, as well as some affiliated web applications that we have produced.</p>
            <h2 className="text-2xl mb-5">Demo Sites</h2>
            <div className="md:flex">
                <div className="flex-1 pl-5 md:pr-5 md:pl-0  border-b md:border-r md:border-b-0">
                    <div className="h-35 mb-5 dark:mb-15">
                        <a href="/jakes-bistro" target="_blank"><Image className="absolute p-5 w-75 hover:w-78 dark:bg-gray-200 dark: rounded-lg" src="/jakes-bistro/JakesBistro.png" width={300} height={300} alt="Jake's Bistro"/></a>
                    </div>
                    <p>A menu for a restaurant that includes a contact form for events, as well as a menu that makes use of our menu internationalization platform Tradulio, which makes ordering at restaurants easier with less errors.</p>                    
                </div>
                <div className="flex-1 pl-5">
                    <div className="h-48 mb-5 dark:my-10">
                        <a href="/yardsdale-plumbing-co" target="_blank"><Image className="absolute p-5 w-75 hover:w-78 dark:bg-gray-200 dark: rounded-lg" src="/plumb-logo3.png" width={250} height={250} alt="Jake's Bistro"/></a>
                    </div>            
                    <p>A static website for an area business that includes a homepage, an 'About Us' page, a page featuring the services it offers, and a contact page with a form. Everything included in our Basic Package is on this site.</p>
                </div>
            </div>
            <h2 className="text-2xl mb-5">Existing Projects</h2>
            <div className="md:flex">
                <div className="flex-1 pl-5 md:pr-5 md:pl-0 border-b md:border-r md:border-b-0">
                    <div className="h-30 mb-5">
                        <a href="https://tradulio.com" target="_blank"><Image className="absolute p-5 w-75 hover:w-78"src="/tradulio wordmark dark.png" width={300} height={300} alt="Tradulio"/></a>
                    </div>
                    <p>Our B2B SaaS platform that makes restaurant menus available in up to 20 languages. 
                        With Tradulio, international restaurant patrons can place their order in their own language and the 
                        order is then immediately translated into the service staff's primary language.</p>
                </div>
                <div className="flex-1 pl-5 border-b md:border-b-0">
                    <div className="h-38 mb-5 dark:my-10">
                        <a href="https://charladdy.com"><Image className="absolute p-5 w-75 hover:w-78 dark:bg-gray-200 dark: rounded-lg" src="/Charladdy_Wordmark_Green.png" width={250} height={250} alt="Charladdy"/></a>
                    </div>
                    <p>Our parent company's website that details our organization's information and policies, as well as 
                        showcases our published web applications and projects.</p>
                </div>
            </div>
            <div className="md:flex">
                <div className="flex-1 pl-5 md:pr-5 md:pl-0 pt-8 border-b md:border-r md:border-b-0">
                    <div className="h-16 mb-5">
                        <a href="https://mathematika.io"><Image className="absolute p-5 w-75 hover:w-78 dark:bg-gray-200 dark: rounded-lg" src="/mathematika_wordmark.png" width={250} height={250} alt="Mathematika"/></a>
                    </div>
                    <p>Develop your math skills with endless practice questions in basic arithmetic, algebra, geometry, and trigonometry.</p>
                </div>
                <div className="flex-1 pl-5 pt-8">
                    <div className="h-16 mb-5">
                        <a href="https://vocabulizer.io"><Image className="absolute p-5 w-75 hover:w-78 dark:bg-gray-200 dark: rounded-lg" src="/vocabulizer_wordmark.png" width={250} height={250} alt="Vocabulizer"/></a>
                    </div>
                    <p>Play crosswords and develop your foreign language skills at the same time with algorithmically-generated puzzles in five languages.</p>
                </div>
            </div>
        </div>
    )
}