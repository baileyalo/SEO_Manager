import React from "react";
import { NavLink } from "react-router-dom";


const Footer: React.FC = () => (
    <footer>
        <div className="flex space-x-1 text-seo-blue justify-center text-xs -mt-6">
            <p><NavLink to="/" target='_blank' className="hover:underline">Disclaimer</NavLink></p>
            <p> | ACreations® is a registered trademark of ACreations </p>
            <p> | Version: {process.env.REACT_APP_VERSION}</p>
        </div>
    </footer>
);

export default Footer;