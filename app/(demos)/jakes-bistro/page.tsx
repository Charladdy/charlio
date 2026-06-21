import Image from 'next/image'
import './page-styles.css'

export default function Page(){
    return(
        <div className="hero-div">
            <div className="formula-div">
                <Image className="splash-image" src="/jakes-bistro/jakes-bistro-splash.png" width={2000} height={2000} alt="Jakes Bistro splash image"/>
                <h1 className="hero-copy">A Time-Tested Formula</h1>
            </div>
            <div className ="ingredients-div">
                <Image className="ingredients-img" src="/jakes-bistro/ingredients.png" width={2000} height={2000} alt="Fresh ingredients"/>
                <h2 className="ingredients-copy">Fresh ingredients</h2>
            </div>
            <div className ="cooking-div">
                <Image className="cooking-img" src="/jakes-bistro/pan_searing.png" width={2000} height={2000} alt="Pan seared steak"/>
                <h2 className="cooking-copy">Made right</h2>
            </div>
        </div>
    );
}