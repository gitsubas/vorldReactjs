import React from 'react';

import ReacreateImage from '../../assets/page_contents/recreate.png'
import Era from '../../assets/page_contents/era.png'
import Explore from '../../assets/page_contents/explore.png'
import TimeTravel from '../../assets/page_contents/time_travel.png'

function Recreate(props) {
    return (
        <>
        
            {/* recreate */}
            <div className='recreate_content page_content_wraper_container pageContentContainer'>
                
                <div className='title_area'>
                    <div className='recreate'>Recreate</div>
                    <div className='title'>Recreate the world you wanted it to be</div>
                    <div className='content_area'>
                        Vorld constructs a duplicate of Earth that is devoid of all assets. 
                        Users may use the wonderful vorld ai tools to create hills, mountains, 
                        forests, buildings, roads, and anything else that exists in the actual world 
                        as digital assets called NFT and fill the empty space on Earth. 
                    </div>
                </div>

                <div className='image'>
                    <img src={ReacreateImage} alt="Reacreate" />
                </div>

            </div>


            {/* explore */}
            <div className='recreate_content page_content_wraper_container reverse pageContentContainer'>

                <div className='title_area right'>
                    <div className='recreate'>explore</div>
                    <div className='title'>Explore the land while enjoying gameplay</div>
                    <div className='content_area'>
                        Users can travel and explore diverse lands on Vorld using virtual reality gear or smart displays. 
                        Users will be able to participate in a variety of games created in the playgrounds. 
                        Vorld is indeed a one-stop destination for social engagement and virtual-world gaming experience.
                    </div>
                </div>

                <div className='image'>
                    <img src={Explore} alt="Reacreate" />
                </div>

            </div>


            {/* Time travel */}
            <div className='recreate_content page_content_wraper_container pageContentContainer'>
                
                <div className='title_area'>
                    <div className='recreate'>Time travel</div>
                    <div className='title'>Virtual Journey from Stone Age to World war</div>
                    <div className='content_area'>
                        The Vorld roadmap is divided into levels, with level 0 reflecting the stone era, 
                        when countries and expires were first founded. Users of the Vorld will be able to travel 
                        through time from the Stone Age to the Modern Era and virtually experience the history.
                    </div>
                </div>

                <div className='image'>
                    <img src={TimeTravel} alt="Reacreate" />
                </div>

            </div>


            {/* Era */}
            <div className='recreate_content page_content_wraper_container reverse pageContentContainer'>

                <div className='title_area right'>
                    <div className='recreate'>Era</div>
                    <div className='title'>Modern Era to Spacingfaring</div>
                    <div className='content_area'>
                        The vorld's ultimate stage allows players to interact with current economy.  
                        Various development initiatives, such as factories, colleges, airways, 
                        telecommunications, and so on, will happen in this era, leading in huge changes 
                        in the tokenomy of the world nations. Users will be able to travel across space while also exploring it.
                    </div>
                </div>

                <div className='image'>
                    <img src={Era} alt="Reacreate" />
                </div>


            </div>
        
        </>
    );
}

export default Recreate