import React from "react"
import "./layout.css"
import styled from "styled-components"

const Layout = ({ children }) => {
  const LayoutWrapper = styled.section`
    main {
      padding: 32px;
    }
  `

  return (
    <LayoutWrapper>
      <main>{children}</main>
    </LayoutWrapper>
  )
}

export default Layout
