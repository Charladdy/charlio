import IconHeaderDiv from "@/components/IconHeaderDiv";

export default function Page(){
    return(
    <>
        <div className='hor-gfx-mask'/>
        <div className='vert-gfx-div'/>
        <div className='hor-gfx-div'/>  
        <div className="page-content">
            <p>From design and development to ecommerce and SEO, CharChar Webworks offers everything you need to build a powerful online presence. We handle the technical side so you can focus on running your business.</p>
            <IconHeaderDiv iconSrcStr="/icons/design.png" iconWidth={80} iconHeight={80} 
            iconAltTxt="Web Design" headerStr="Web Design">
                <p>CharChar designs a website that meets your organization's needs and goals.</p>
            </IconHeaderDiv>

            <IconHeaderDiv iconSrcStr="/icons/front_end.png" iconWidth={80} iconHeight={80} 
            iconAltTxt="Front end development" headerStr="Front End Development">
                <p>CharChar creates pages that conform to your specifications using a responsive, mobile-first approach.</p>
            </IconHeaderDiv>

            <IconHeaderDiv iconSrcStr="/icons/back_end.png" iconWidth={80} iconHeight={80} 
            iconAltTxt="Back end development" headerStr="Back End Development">
                <p>Everything needed to make your website interactive for visitors.</p>
            </IconHeaderDiv>

            <IconHeaderDiv iconSrcStr="/icons/blogging.png" iconWidth={80} iconHeight={80} 
            iconAltTxt="Content management" headerStr="Content Management">
                <p>Keep your website fresh with new content that you can add via a number of content management systems like WordPress.</p>
            </IconHeaderDiv>

            <IconHeaderDiv iconSrcStr="/icons/ecommerce.png" iconWidth={80} iconHeight={80} 
            iconAltTxt="Ecommerce" headerStr="Ecommerce">
                <p>Turn your website into a revenue-generating storefront with a fully integrated ecommerce platform.</p>
            </IconHeaderDiv>

            <IconHeaderDiv iconSrcStr="/icons/seo.png" iconWidth={80} iconHeight={80} 
            iconAltTxt="Search Engine Optimization" headerStr="Search Engine Optimization">
                <p>Improve your site's visibility in search engine by following the latest SEO strategies and practices.</p>
            </IconHeaderDiv>

            <IconHeaderDiv iconSrcStr="/icons/art.png" iconWidth={80} iconHeight={80} 
            iconAltTxt="Search Engine Optimization" headerStr="Graphic Asset Creation">
                <p>CharChar can create graphical assets to suit your page's theme and needs. Note that this is limited to vector art like custom buttons or backgrounds and does not include logo design or photography.</p>
            </IconHeaderDiv>
        </div>
        </>
    )
}