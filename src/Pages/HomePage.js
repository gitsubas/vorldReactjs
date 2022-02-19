import React from "react";

import HeroComponents from "../Components/HeroComponents/HeroComponents";

import WhyVorld from "../Components/PageContents/WhyVorld";
import Recreate from "../Components/PageContents/Recreate";
import LaptopSection from "../Components/PageContents/LaptopSection";

function HomePage(props) {


    return(
        <div className="PageWrapper">

            <HeroComponents />

            <div className="page_content_wraper">

                <div className="divider-40"></div>

                <WhyVorld />
                <Recreate />
                <LaptopSection />

            </div>
        </div>
    )

}

export default HomePage