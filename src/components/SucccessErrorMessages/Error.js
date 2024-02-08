import React from "react";
import './Error.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Error(error_str){
    const location = useLocation();
    const data = location.state ? location.state.error : [];
    return(
        <div className="outer-container-error">
            <div className="error-box-error">
                <h1 className="error-error">Internal Server Error</h1>
                <p>{data}</p>
                <Link to="/">
                    <button type="submit" className="go-back-button-error">Go Back</button>
                </Link>
            </div>
        </div>
    )
}