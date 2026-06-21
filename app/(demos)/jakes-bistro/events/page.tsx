import Image from 'next/image'
import ContactFormJakes from '@/components/ContactFormJakes';
import './page-styles.css'

export default function Page(){
    return(
        <>
            <h1 className="page-header w-2xl h-fit m-auto">Events</h1>
            <h1 className="title-header w-2xl h-fit text-xl m-auto pt-10">Let us make your special day exceptional</h1>
            <div className="w-2xl h-fit m-auto flex pt-5 pb-5 border-b">
                <Image className="w-60 h-auto flex-1" src="/jakes-bistro/jakes-events.png" height={500} width={500} alt="Your event at Jake's" />
                <div className="w-40 flex-1 ml-10 my-auto">
                    <p>Whether you're celebrating a wedding, birthday, retirement or any other of life's special moments, 
                        let Jake's make your day truly special. Let us know how many people you plan on hosting, your 
                        preferred date and time of day and one of our event coordinators will get in touch with you.
                    </p>
                </div>
            </div>
            <ContactFormJakes categories={["< 20","20 - 50","50 - 80","> 80"]}></ContactFormJakes>
        </>
    );
}