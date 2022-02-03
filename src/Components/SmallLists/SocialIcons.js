import React from "react";
import { Link } from "@mui/material";

import { IconButton, Icon } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function SocialIcons() {


    return(

        <div className="LinkItems socialIcons">
            <div className="Wrapper">
                <div className="Item">
                    <Link to="/" target="_blank">
                        <IconButton> 
                            <Icon>
                                <TwitterIcon />
                            </Icon>
                        </IconButton>
                    </Link>
                </div>
                <div className="Item">
                    <Link to="/" target="_blank">
                        <IconButton> 
                            <Icon>
                                <TelegramIcon />
                            </Icon>
                        </IconButton>
                    </Link>
                </div>
                <div className="Item">
                    <Link to="/" target="_blank">
                        <IconButton> 
                            <Icon>
                                <InstagramIcon />
                            </Icon>
                        </IconButton>
                    </Link>
                </div>
                <div className="Item">
                    <Link to="/" target="_blank">
                        <IconButton> 
                            <Icon>
                                <GitHubIcon />
                            </Icon>
                        </IconButton>
                    </Link>
                </div>
                <div className="Item">
                    <Link to="/" target="_blank">
                        <IconButton> 
                            <Icon>
                                <FacebookIcon />
                            </Icon>
                        </IconButton>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default SocialIcons