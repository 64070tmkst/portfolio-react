import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Skill from "../components/skill"
import Header from "../components/header"





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

        <div className="aboutMe">
          <h1>About Me</h1>

          <div className="intro">
            
            <img src={require('../images/profile/profile.png')}/>
            <div className="introCaption"> 
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
             <Skill 
              title="Figma"
              description="UI Design, Prototyping"
              image={require('../images/skill/figma.png')}
             />

             <Skill
              title="Illustrator"
              description="Graphic Design, Logo Design"
              image={require('../images/skill/ai.png')}
              />
            <Skill
              title="After Effects"
              description="Motion Graphics, Prototyping"
              image={require('../images/skill/ae.png')}
              />
             <Skill
              title="XD"
              description="UI Design, Prototyping"
              image={require('../images/skill/xd.png')}
              />
             <Skill
              title="Photoshop"
              description="Graphic design, Photo Editing"
              image={require('../images/skill/ps.png')}
              />
             <Skill
              title="HTML"
              description="Markup"
              image={require('../images/skill/html.png')}
              />
             <Skill
              title="CSS"
              description="styling"
              image={require('../images/skill/css.png')}
              />
             <Skill
              title="Java Script"
              description="Web App Development"
              image={require('../images/skill/js.png')}
              />

            </div>
          </div>

          <div className="introMore">
            <h2> Why do I design?</h2>
            <h4>「デザイン」を広めたい</h4>
            <p>留学中にデザイン思考という概念に触れ、従来のビジネスとは違い、ユーザーの体験にフォーカスを当て設計するというデザインのアプローチに感銘を受けた。日本において広く受け入れられている表層のビジュアルを創るデザインのイメージを正し、ビジネスを「デザイン」する思考を広めることに貢献したいと考えている。</p>
            <h4>論理的に考え表現するのがデザイナー</h4>
            <p>自分にとってやりがいとなることを考えたときに、自分のアイディアで難題を解決すること、表現することの二つが思い浮かんだ。デザイナーという仕事はその両方の面を持ち合わせていて大きな魅力を感じた。</p>
          </div>

          <div className="introMore">
            <h2> How do I design?</h2>
            <h4>作戦としてのデザイン</h4>
            <p>デザインは問題を解決するものであり、論理に基づいていなければいけない。問題解決のための最良の作戦を常に考え、それをビジュアルで実現することを目指す。</p>
            <h4>ビジネスのためのデザイン</h4>
            <p>問題解決はビジネスとして成り立たない限りサステイナブルではない。プロダクトがどのようにビジネスの成功につながるのかを常に考えたい。</p>
          </div>



        </div>

        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}



export default IndexPage
