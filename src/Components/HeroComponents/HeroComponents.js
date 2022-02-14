import React from "react";
import Radium from 'radium';

import useCurrentWidth from "../../hoc/CurrentWidht";

// hero image
import HeroImg from '../../assets/background/HeroImg.png';
import HeroImgOverlay from '../../assets/background/HeroImgoverlay.png';

// header
import Header from "../Header/Header";


import SocialIcons from "../SmallLists/SocialIcons";
import LinksItems from "../SmallLists/LinksItmes";


function HeroComponents (props) {

    const currentWidth = useCurrentWidth()

    const style = {
        height: "100vh",
        maxHeight: "100vh",
        backgroundImage: 'url('+ HeroImgOverlay +'), url('+ HeroImg +')',
        backgroundPosition: "center",
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "100% 100%, cover",

        // '@media (max-width: 1200px)': {
        //     height: currentWidth / 2
        // },
        // '@media (max-width: 991px)': {
        //   height: currentWidth / 1.5
        // },
        // '@media (max-width: 768px)': {
        //     height: currentWidth / 1.2
        // },
        // '@media (max-width: 481px)': {
        //     height: currentWidth * 1.5
        // },
      };


    var bottom = <div className="bottom">
                <div className="flex-center space-between">
                    <div className="Itme">
                        <LinksItems />
                    </div>
                    <div className="Itme">
                        <SocialIcons />
                    </div>
                </div>
            </div>
    var goToBottom = <div className="gotoBottom">
        <div className="flex-center">
            <div className="wrapp">
                <div className="arrow down"></div>
                <div className="arrow down"></div>
                <div className="arrow down"></div>
            </div>
        </div>
    </div>
    if(currentWidth < 991) {
        bottom = null;
        goToBottom = null;
    }


    return(
        <div 
            className='HeroComponent' 
            style={style}
        >

            <div className="top_to_bottom_shadow"></div>

            <Header />

            
            <div className="HeroComponentsWrapper">

                <div className="HeroComponentText">
                    <div>
                        <h1 className="HeroHeading">
                            Welcome to Vorld
                        </h1>
                        <h3>
                            Community owned virtual world powered by Blockchain and Artificial Intelligence
                        </h3>
                    </div>
                </div>


                {goToBottom}
                {bottom}


            </div>


        </div>
    )
}

export default Radium(HeroComponents)