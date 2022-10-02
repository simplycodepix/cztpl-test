import React from "react"
import Link from "next/link"

const Breadcrumbs: React.FC<{
  skin?: string
  breadcrumbs: { title: string; link: string }[]
}> = ({ skin, breadcrumbs }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol
        className={
          skin === "light"
            ? "breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start"
            : "breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start"
        }
      >
        <li className="breadcrumb-item">
          <a className="text-nowrap" href="/">
            <i className="ci-home"></i>Home
          </a>
        </li>
        {breadcrumbs.map((breadcrumb) =>
          breadcrumb.link ? (
            <li
              className="breadcrumb-item text-nowrap"
              key={`breadcrumb-${breadcrumb.link}`}
            >
              <Link href={breadcrumb.link}>
                <a>{breadcrumb.title}</a>
              </Link>
            </li>
          ) : (
            <li
              className="breadcrumb-item text-nowrap active"
              aria-current="page"
              key={`breadcrumb-${breadcrumb.link}`}
            >
              Product Page v.1
            </li>
          ),
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
