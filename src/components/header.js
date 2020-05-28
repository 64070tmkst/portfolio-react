import { Link } from "gatsby"
import styled from 'styled-components'
import PropTypes from "prop-types"
import React from "react"


// const HeaderGroup= styled.div`
//   height: 55px;
//   width: 100%;
//   margin: 40px auto;
// `

// const NavList= styled.ul`
//   display: grid;
//   grid-template-columns: repeat(4, auto);
// `
// const NavItem= styled.li`
  
// `


const Header = ({ siteTitle }) => (
//   <Header>
//     <HeaderGroup>
//       <NavList>
//         <NavItem>
//           logo
//         </NavItem>
//         <NavItem>
//           About Me
//         </NavItem>
//         <NavItem>
//           Works
//         </NavItem>
//         <NavItem>
//           Contact Info
//         </NavItem>

//       </NavList>
//     </HeaderGroup>
//   </Header>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Tomoki Sato`,
}

export default Header
