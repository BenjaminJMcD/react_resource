import React from "react";
//Below we import an image and give it a name (logo) to be referred to in this file.
import logo from '../images/logo192.png'

export default function Header() {
  return (
    <header>
        <nav className="nabvar navbar-expand-lg p-2">
            <button className="navbar-brand">
              ReactJS
              {/* This is a JSX comment. It's kind of like a Razor comment in that you will not see this in the inspector. Curly braces will allow us to inject JS code into this JSX syntax. */}
              {/* Below we place an image. Images must be imported into the files that we are using them in, like objects. See above for the syntax to import an image. */}
              <img src={logo} alt="React logo" />
            </button>
        </nav>
    </header>
  )
}

