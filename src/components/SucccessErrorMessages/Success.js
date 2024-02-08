import React from "react";
import './Success.css'
import { Link } from "react-router-dom";

export default function Success(success_str){

    return(
        <div className="outer-container-success">
            <div className="success-box-success">
                <h1 className="success-success">Success</h1>
                <Link to="/">
                    <button type="submit" className="send-mail-button-success">Go Back</button>
                </Link>
            </div>
        </div>
    )
}