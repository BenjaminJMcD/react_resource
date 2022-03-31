import React from 'react'

//We will use this component at the top of each 'page', while creating a banner image that will display a heading and an image. We create the necessary HTML structure, but to make this component reusable, we can pass props (variables that store some data) thru from the parent component to this child component (AboutReact = Parent because banner will be rendered inside of the AboutReact component). Below we passed props through the banner function to make this UI more dynamic and reusable.
export default function Banner(props) {
  return (
    <article className="banner">
        <img src={props.image} alt={props.description}/>
        <h2>{props.heading}</h2>
    </article>

  )
}
