'use client'

import React, { useState } from 'react'
import Lottie from 'lottie-react'
import animationData from '@/public/animations/mockup.json'
import flowchartData from '@/public/animations/flowchart_stand.json'

interface OurApproachFlowchartDict {
    buttons: readonly string[]
    idle: string
    step1a: string
    step1b: string
    step2a: string
    step2b: string
    step3: string
    step4: string
}

interface OurApproachFlowchartProps {
    dict: OurApproachFlowchartDict
}

export default function OurApproachFlowchart({ dict }: OurApproachFlowchartProps) {
    const [flowState, setFlowstate] = useState(0);

    return(
        <div className="flow-chart-container">
            <div className="flow-chart-buttons">
                <button className="flow-chart-card" onClick={()=>setFlowstate(1)}>{dict.buttons[0]}
                    <span className="spark" style={{ top: '20%', left: '15%', '--dur': '1.1s', '--delay': '0s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '70%', left: '30%', '--dur': '1.4s', '--delay': '0.2s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '35%', left: '75%', '--dur': '0.9s', '--delay': '0.4s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '80%', left: '80%', '--dur': '1.3s', '--delay': '0.1s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '50%', left: '50%', '--dur': '1.0s', '--delay': '0.3s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '15%', left: '60%', '--dur': '1.5s', '--delay': '0.5s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '65%', left: '10%', '--dur': '1.2s', '--delay': '0.6s' } as React.CSSProperties}></span>
                </button>
                <button className="flow-chart-card" onClick={()=>setFlowstate(2)}>{dict.buttons[1]}
                    <span className="spark" style={{ top: '20%', left: '15%', '--dur': '1.1s', '--delay': '0s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '70%', left: '30%', '--dur': '1.4s', '--delay': '0.2s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '35%', left: '75%', '--dur': '0.9s', '--delay': '0.4s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '80%', left: '80%', '--dur': '1.3s', '--delay': '0.1s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '50%', left: '50%', '--dur': '1.0s', '--delay': '0.3s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '15%', left: '60%', '--dur': '1.5s', '--delay': '0.5s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '65%', left: '10%', '--dur': '1.2s', '--delay': '0.6s' } as React.CSSProperties}></span>
                </button>
                <button className="flow-chart-card" onClick={()=>setFlowstate(3)}>{dict.buttons[2]}
                    <span className="spark" style={{ top: '20%', left: '15%', '--dur': '1.1s', '--delay': '0s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '70%', left: '30%', '--dur': '1.4s', '--delay': '0.2s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '35%', left: '75%', '--dur': '0.9s', '--delay': '0.4s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '80%', left: '80%', '--dur': '1.3s', '--delay': '0.1s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '50%', left: '50%', '--dur': '1.0s', '--delay': '0.3s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '15%', left: '60%', '--dur': '1.5s', '--delay': '0.5s' } as React.CSSProperties}></span>
                    <span className="spark" style={{ top: '65%', left: '10%', '--dur': '1.2s', '--delay': '0.6s' } as React.CSSProperties}></span>
                </button>
                <button className="flow-chart-card" onClick={()=>setFlowstate(4)}>{dict.buttons[3]}
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
                    <div>{dict.idle}</div>
                </>
                }
                {flowState==1 &&
                <>
                    <div className="flow-description">
                    <div className="lottie-left w-40">
                        <Lottie animationData={flowchartData} autoplay={true} loop={false}/>
                    </div>
                    {dict.step1a}</div>
                    <div>{dict.step1b}</div>
                </>
                }
                {flowState==2 &&
                <>
                    <div className="flow-description">
                        <div className="lottie-right w-40">
                            <Lottie animationData={animationData} autoplay={true} loop={false}/>
                        </div>
                        <p className="mt-4">{dict.step2a}</p>
                    </div>
                    <div>{dict.step2b}</div>
                </>
                }
                {flowState==3 &&
                <>
                <div>{dict.step3}</div>
                </>
                }
                {flowState==4 &&
                <>
                <div>{dict.step4}</div>
                </>
                }
            </div>
        </div>
    )
}
