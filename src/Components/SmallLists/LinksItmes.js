import React from "react";
import { Link } from "@mui/material";

function LinksItems() {


    return(

        <div className="LinkItems">
            <div className="Wrapper">
                <div className="Item">
                    <Link to="/" target="_blank" className="mini-text white">
                        Privacy Policy
                    </Link>
                </div>
                <div className="Item">
                    <Link to="/" target="_blank" className="mini-text white">
                        Terms Of Use
                    </Link>
                </div>
                <div className="Item">
                    <Link to="/" target="_blank" className="mini-text white">
                        Content Policy
                    </Link>
                </div>
                <div className="Item">
                    <Link to="/" target="_blank" className="mini-text white">
                        Code Of Ethics
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default LinksItems