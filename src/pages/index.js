import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import lottie from "lottie-web"






class IndexPage extends React.Component {
  render() {

    return (
      // Move all content between parentheses to here.\
      <Layout>
        <SEO title="Home" />

        
        <div className="Hero">
          
          <h1>Hello. I’m <span>Tomoki Sato</span><br/>
          I’m a UI/UX designer. 
          </h1>
          
        </div>

        <div className="HeroAnimation" id="bm" />

        <div className="aboutMe">
          <h1>About Me</h1>

          <div className="intro">
            
            <div>写真</div>
            <div> 
              <h2>Tomoki Sato</h2>
              <h4>佐藤　大輝</h4>
              <p>国際教養大学５年<br/>
                  大学ではリベラルアーツを専攻しメディア学などをはじめ様々な分野を学んだ。 
                  卒業後の進路に悩んだ結果、論理的に考え表現することのできる、もの作りが自分のやりたいことだと気付く。
                  大学三年時のデンマークでの交換留学中にDesign Thinkingにであい自分が従来のビジネスに抱えていた疑問への解だと考えUI/UXデザイナーを志した。

              </p>  
            </div>
          </div>

          <div className="skills">
            <h2>Skills and Tools</h2>
            <div className="skillsGrid">

              <div className="skillCard">
                <div className="icon">
                  <img src="#"></img>
                </div>
                <div className="skillCaption">
                  <h5>Figma</h5>
                  <p>UI Design,<br/>Prototyping</p>
                </div>
              </div>

              <div className="skillCard">
                <div className="icon">
                  <img src="#"></img>
                </div>
                <div className="skillCaption">
                  <h5>Figma</h5>
                  <p>UI Design,<br/>Prototyping</p>
                </div>
              </div>

              <div className="skillCard">
                <div className="icon">
                  <img src="#"></img>
                </div>
                <div className="skillCaption">
                  <h5>Figma</h5>
                  <p>UI Design,<br/>Prototyping</p>
                </div>
              </div>

              <div className="skillCard">
                <div className="icon">
                  <img src="#"></img>
                </div>
                <div className="skillCaption">
                  <h5>Figma</h5>
                  <p>UI Design,<br/>Prototyping</p>
                </div>
              </div>

            </div>
          </div>

          <div className="why">
            <h2> Why do I design?</h2>

          </div>




        </div>

        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}



export default IndexPage
