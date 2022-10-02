import React from "react"

import Breadcrumbs from "../Breadcrumbs"

const PageTitle: React.FC<{ pageTitle: string }> = ({ pageTitle }) => {
  return (
    <div className="page-title-overlap bg-dark pt-4">
      <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <Breadcrumbs
            skin="light"
            breadcrumbs={[
              { title: "Shop", link: "#" },
              { title: "Product Page v.1", link: "" },
            ]}
          />
        </div>
        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
          <h1 className="h3 text-light mb-0">{pageTitle}</h1>
        </div>
      </div>
    </div>
  )
}

export default PageTitle
