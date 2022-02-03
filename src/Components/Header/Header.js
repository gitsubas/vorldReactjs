import React, { useState} from "react";
import useCurrentWidth from "../../hoc/CurrentWidht";

import HeaderLogo from '../../assets/Logo/headerLogo.png'

import { IconButton, Icon } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header (props) {


    const currentWidth = useCurrentWidth()

    // handling mobie menu
    const [mobileMenuOpened, setSetMobileMenu] = useState(false);

    const clickMenuButton = () => {
        setSetMobileMenu(!mobileMenuOpened);
        console.log('hello');
    }


    var menus = <div className="flex-center"> 
            <div className="menuItem-main flex-center">
                <div className="menuItem">
                    <div>
                        Whitepaper
                    </div>
                </div>
                <div className="menuItem">
                    <div>
                        Roadmap
                    </div>
                </div>
            </div>
            <div className="menuItem-main logo_item flex-center">
                <div className="headerLogo">
                    <img src={HeaderLogo} alt="Vorld" />
                </div>
            </div>
            <div className="menuItem-main flex-center">
                <div className="menuItem">
                    <div>
                        Staking
                    </div>
                </div>
                <div className="menuItem">
                    <div>
                        Blog
                    </div>
                </div>
            </div>
        </div>

    var mobileMenuClass = 'none';
    if(currentWidth < 991) {
        menus = <div className="flex-center short_menu"> 
            <div className="menuItem">
                <div className="headerLogo">
                    <img src={HeaderLogo} alt="Vorld" />
                </div>
            </div>
            <div className="menuItem">
                <div>
                    <IconButton onClick={clickMenuButton}>
                        <Icon> 
                            <MenuIcon className="white" />
                        </Icon>
                    </IconButton>
                </div>
            </div>
        </div>

        mobileMenuClass = ''
    }


    var mobileMenus = null;
    if(mobileMenuOpened) {
        mobileMenus = <div className={"mobileMenus " + mobileMenuClass}>
            <div className="mobile_menu_wrapper">
                <div className="menuItem close_button">
                    <div>
                        <IconButton onClick={clickMenuButton}>
                            <Icon> 
                                <CloseIcon className="white" />
                            </Icon>
                        </IconButton>
                    </div>
                </div>
                <div className="menuItem"> Whitepaper </div>
                <div className="menuItem">Roadmap</div>
                <div className="menuItem">Staking</div>
                <div className="menuItem">Blog</div>
            </div>
        </div>
    }





    return(
        <>
            <div className="header">
                <div className="headerwrapper">

                    {menus}

                </div>
            </div>

            {mobileMenus}
        </>
    )

}


export default Header