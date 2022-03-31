//rfc => tab
import React from 'react'
import Banner from '../Banner'
//import an image for the banner to display - passing the image as a prop into the Banner component
import bannerImage from '../../images/react-components-props.png'
import './AboutReact.css'
import Intro from '../Intro'
import introImage from '../../images/componentIntro.png'

export default function AboutReact() {
    //LOGIC
  return (
    //UI
    <section className="components">
        {/* Banner Component will be rendered below, but first we must create it */}
        <Banner
            image={bannerImage}
            description="About React Components w/ logo"
            heading="Components"/>
        <Intro
            image={introImage}
            alt="React component graphic"
            blurb={
                <>
                    <p>
                        In React, the UI is broken down into small pieces and placed in components. Components are reusable and you can have components nested inside of other components (called a Component Tree) Think of components like img tags: 
                        <br/>
                        <br/>
                        <code>
                            <em>
                                &lt;img src="filepath" alt="description"/&gt;
                            </em>
                        </code>
                        <br/>
                        <br/>
                        Without the src or alt attributes, an immage will not sork properly. Much likee this, props are the way we can pass specifin information from parent implements to child implements.
                    </p>
                </>
            }   />
    </section>
  )
}
