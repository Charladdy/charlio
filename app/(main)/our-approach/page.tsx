'use client'

import React from 'react'
import {useState} from 'react'
import Lottie from 'lottie-react'
import './page-styles.css'
import animationData from '@/public/animations/mockup.json'
import flowchartData from '@/public/animations/flowchart_stand.json'

export default function page(){
    const [flowState, setFlowstate] = useState(0);

    return(
        <>
            <div className='hor-gfx-mask'/>
            <div className='vert-gfx-div'/>
            <div className='hor-gfx-div'/>          
            <div className='page-content'>
                <h1>Our Approach</h1>
                <p>We believe in the power of collaboration. By checking in with our customers at each key stage of the process, we seek to deliver websites and solutions that exceed expectations.</p>
                <p>The following interactive graphic shows the production process of a typical project:</p>
                <div className="flow-chart-container">
                    <div className="flow-chart-buttons">
                        <button className="flow-chart-card" onClick={()=>setFlowstate(1)}>Initial design and mockup
                            <span className="spark" style={{ top: '20%', left: '15%', '--dur': '1.1s', '--delay': '0s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '70%', left: '30%', '--dur': '1.4s', '--delay': '0.2s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '35%', left: '75%', '--dur': '0.9s', '--delay': '0.4s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '80%', left: '80%', '--dur': '1.3s', '--delay': '0.1s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '50%', left: '50%', '--dur': '1.0s', '--delay': '0.3s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '15%', left: '60%', '--dur': '1.5s', '--delay': '0.5s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '65%', left: '10%', '--dur': '1.2s', '--delay': '0.6s' } as React.CSSProperties}></span>
                        </button>
                        <button className="flow-chart-card" onClick={()=>setFlowstate(2)}>Build out the front end
                            <span className="spark" style={{ top: '20%', left: '15%', '--dur': '1.1s', '--delay': '0s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '70%', left: '30%', '--dur': '1.4s', '--delay': '0.2s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '35%', left: '75%', '--dur': '0.9s', '--delay': '0.4s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '80%', left: '80%', '--dur': '1.3s', '--delay': '0.1s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '50%', left: '50%', '--dur': '1.0s', '--delay': '0.3s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '15%', left: '60%', '--dur': '1.5s', '--delay': '0.5s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '65%', left: '10%', '--dur': '1.2s', '--delay': '0.6s' } as React.CSSProperties}></span>
                        </button>
                        <button className="flow-chart-card" onClick={()=>setFlowstate(3)}>Back end development
                            <span className="spark" style={{ top: '20%', left: '15%', '--dur': '1.1s', '--delay': '0s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '70%', left: '30%', '--dur': '1.4s', '--delay': '0.2s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '35%', left: '75%', '--dur': '0.9s', '--delay': '0.4s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '80%', left: '80%', '--dur': '1.3s', '--delay': '0.1s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '50%', left: '50%', '--dur': '1.0s', '--delay': '0.3s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '15%', left: '60%', '--dur': '1.5s', '--delay': '0.5s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '65%', left: '10%', '--dur': '1.2s', '--delay': '0.6s' } as React.CSSProperties}></span>
                        </button>
                        <button className="flow-chart-card" onClick={()=>setFlowstate(4)}>Go live and handover
                            <span className="spark" style={{ top: '20%', left: '15%', '--dur': '1.1s', '--delay': '0s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '70%', left: '30%', '--dur': '1.4s', '--delay': '0.2s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '35%', left: '75%', '--dur': '0.9s', '--delay': '0.4s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '80%', left: '80%', '--dur': '1.3s', '--delay': '0.1s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '50%', left: '50%', '--dur': '1.0s', '--delay': '0.3s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '15%', left: '60%', '--dur': '1.5s', '--delay': '0.5s' } as React.CSSProperties}></span>
                            <span className="spark" style={{ top: '65%', left: '10%', '--dur': '1.2s', '--delay': '0.6s' } as React.CSSProperties}></span>
                        </button>
                    </div> 
                    <div className="flow-chart-detail">
                        {flowState==0 && 
                        <>
                            <div>This graph demonstrates the lifecycle of a typical CharChar Webworks project. Click any of the buttons to the left to get started.</div>
                        </>                    
                        }
                        {flowState==1 && 
                        <>
                            <div className="flow-description">
                            <div className="lottie-left w-40">
                                <Lottie animationData={flowchartData} autoplay={true} loop={false}/>
                            </div>
                            After reviewing your requirements, CharChar puts together an initial design that includes a sitemap and a mockup of every page that will make up the site.</div>
                            <div>Both the sitemap and mockup will be sent to you for review and approval once they are complete.</div>
                        </>
                        }
                        {flowState==2 && 
                        <>                            
                            <div className="flow-description">                                
                                <div className="lottie-right w-40">
                                    <Lottie animationData={animationData} autoplay={true} loop={false}/>
                                </div>
                                We get to work on your website based on the mockups and your feedback. All of our sites are responsive and designed to look well on virtually any consumer device.
                            </div>                             
                            <div>Once the initial front end is complete, you will be able to try it out and request any changes you would like to see.</div>
                        </>
                        }
                        {flowState==3 && 
                        <>
                        <div>Once you sign off on the front end, we will implement and test any back end functionality specified in the project. This can be anything as simple as a contact form's functionality or as complex as integration of a product database.</div>
                        </>                    
                        }
                        {flowState==4 && 
                        <>
                        <div>Showtime! CharChar Webworks configures the hosting of your website on the hosting provider of your choice and updates any additional backend services for production on your new, live website!</div>
                        </>                    
                        }
                    </div>
                </div>
                        <p>To get started, you'll need to supply the content that will fill your site's pages — including copy, logos, product descriptions, pricing information, and photos.</p>
                        <p>Our websites follow a mobile-first approach. Multiple studies show that over half of web traffic is coming from mobile devices. In fact, Google’s algorithm ranks responsive pages that can adapt to mobile devices higher than their counterparts that do not.</p>
                        <p>CharChar also strongly recommends using analytics to track how users interact with your site. Analytics platforms like Google Analytics let you know where your users are visiting your site from (for example, search engine results, company posts on social media, etc.), which pages on your site they are viewing, and how long their visits last.</p>
            </div>
        </>
    )
}