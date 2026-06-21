import './page-styles.css'


export default function page(){
    return(
        <>
            <div className='hor-gfx-mask'/>
            <div className='vert-gfx-div'/>
            <div className='hor-gfx-div'/>           
            <div className="page-content">
            <h1>Packages</h1>
            <p>Four packages designed to fit the needs of most businesses. To place a work order, request a quote, or to request additional information, 
                please reach out to us via our <a className="copy-link">Contact Page</a>.
            </p>
            <p style={{fontStyle:'italic'}}>All prices in USD. International customers will be billed the equivalent in their local currency via Wise Quick Pay.</p>
            <div className="package-grid">
                <div/>
                <h2 className="grid-box">Basic</h2>
                <h2 className="grid-box">Basic Plus</h2>
                <h2 className="grid-box">Ecommerce</h2>
                <h2 className="grid-box">Ecommerce Plus</h2>
                <h2 className="grid-box">Price</h2>
                <h2 className="grid-box">$300</h2>
                <h2 className="grid-box">$400</h2>
                <h2 className="grid-box">$750</h2>
                <h2 className="grid-box">$950</h2>
                <h2 className="grid-box">Page Count</h2>
                <h2 className="grid-box">4</h2>
                <h2 className="grid-box">6</h2>
                <h2 className="grid-box">8</h2>
                <h2 className="grid-box">12</h2>
                <h2 className="grid-box">Website Mockup</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">Contact Form</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">Hosting Setup</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">CMS Setup</h2>
                <h2 className="grid-box"></h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">Google Analytics Setup</h2>
                <h2 className="grid-box"></h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">Ecommerce Platform Setup</h2>
                <h2 className="grid-box"></h2>
                <h2 className="grid-box"></h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">&#10004;</h2>
                <h2 className="grid-box">User Authentication Setup</h2>
                <h2 className="grid-box"></h2>
                <h2 className="grid-box"></h2>
                <h2 className="grid-box"></h2>
                <h2 className="grid-box">&#10004;</h2>
            </div>

            <h1>A la Carte</h1>
            <div className="alacarte-grid">
                <h1 className="grid-box mb-0">Item</h1>
                <h1 className="grid-box mb-0">Price</h1>
                <h2 className="grid-box">Website Mockup - Per Page</h2>
                <h2 className="grid-box">$15</h2>
                <h2 className="grid-box">Page</h2>
                <h2 className="grid-box">$60</h2>
                <h2 className="grid-box">Hosting Setup</h2>
                <h2 className="grid-box">$80</h2>
                <h2 className="grid-box">CMS Setup</h2>
                <h2 className="grid-box">$120</h2>
                <h2 className="grid-box">Google Analytics Setup - General</h2>
                <h2 className="grid-box">$50</h2>
                <h2 className="grid-box">Google Analytics Setup - Per Page</h2>
                <h2 className="grid-box">$15</h2>
                <h2 className="grid-box">Ecommerce Platform Setup</h2>
                <h2 className="grid-box">$250</h2>
                <h2 className="grid-box">User Authentication Setup</h2>
                <h2 className="grid-box">$300</h2>
                <h2 className="grid-box">Custom Product Management Database</h2>
                <h2 className="grid-box">Contact for price</h2>
                <h2 className="grid-box">Custom Graphical Assets - Small</h2>
                <h2 className="grid-box">$30</h2>
                <h2 className="grid-box">Custom Graphical Assets - Medium</h2>
                <h2 className="grid-box">$50</h2>
                <h2 className="grid-box">Custom Graphical Assets - Large</h2>
                <h2 className="grid-box">$60</h2>
            </div>
            </div>
        </>
    )
}