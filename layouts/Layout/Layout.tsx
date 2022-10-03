import React from "react"

// import Navbar from "../../components/Navbar"
import PageTitle from "../../components/PageTitle"
import FooterDark from "../../components/FooterDark"
// import Toolbar from "../../components/Toolbar"

import styles from "./Layout.module.scss"

const Layout: React.FC<{
  children: React.ReactNode
  pageTitle: string
  loading?: boolean
}> = ({ children, pageTitle, loading }) => {
  return (
    <React.Fragment>
      <main className="page-wrapper">
        {/* <Navbar /> */}
        <PageTitle pageTitle={pageTitle} />

        {!loading ? children : null}
      </main>

      <FooterDark />
      {/* <Toolbar /> */}
    </React.Fragment>
  )
}

export default Layout
