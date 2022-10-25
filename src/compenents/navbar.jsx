import React from "react";

function NavBar() {



    return <div>
        <nav className="navbar navbar-dark" >
            <div>
                <img className="imglogo" src='https://github.com/OriyaHajbi/Portfolio/blob/master/public/photos/me.jpeg?raw=true' />
                <a className="navbar-brand namelogo" href="#aboutme">Oriya Hajbi</a>
            </div>
            <div class=" navbritems" >
                <ul class="navbar-nav text-right">
                    <li class="nav-item active">
                        <a className="navbar" href="#aboutme">About me</a>
                    </li>
                    <a className="navbar" href="#projects">Projects</a>
                    <li class="nav-item active">
                    </li>
                    <li class="nav-item active">
                        <a className="navbar" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
}




export default NavBar;