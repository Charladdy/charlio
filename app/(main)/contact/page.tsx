import ContactForm from '@/components/ContactForm'
import './page-styles.css'

export default function page(){
    return(
        <>
            <div className='hor-gfx-mask'/>
            <div className='vert-gfx-div'/>
            <div className='hor-gfx-div'/>  
            <div className="page-content">
                <p className="px-5">We want to hear from you. Tell us what you're looking to build, and we'll handle the rest.</p>
                <ContactForm categories={["General Inquiry","Work Order","Request for Quote"]}/>
            </div>
        </>
    )
}