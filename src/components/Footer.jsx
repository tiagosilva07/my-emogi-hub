import React from "react";

const currentYear = new Date().getFullYear();

function Footer(){
    return(
        <footer class="container">
        <p>Copyright &copy; {currentYear}</p>
      </footer>
    )
}
export default Footer;