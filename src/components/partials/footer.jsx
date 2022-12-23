import React from "react";

const date = new Date

function Footer(){
    return (
    <footer>
        &copy; Kibe {date.getFullYear()}
    </footer>)
}

export default Footer;