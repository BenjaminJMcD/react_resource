//This component will be reusable across every 'page' of our app. Here we will create a component to display an image, intro blurb, and we will conditionally render a button if thre are probs passed for art;
import React from 'react'
import './Intro.css'

export default function Intro(props) {
    return (
        <article className="component-intro">
            <img src={props.image} alt={props.alt} />
            <div className="text">
                {props.blurb}

                {/* The below syntax is called conditional rendering. We check to see if props.url exists and if it does, we render an anchor tag. This is called a JSX conditional statement and is similar to Razor, where we check to see if the User.IsInRole("Admin") */}
                {props.url &&
                    <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-color">
                        {props.linkText}
                        </a>
                }
            </div>
        </article>
        
    )
}