import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import "bootstrap/dist/js/bootstrap.bundle"

import { ProductPrice } from "../../../redux/product.slice"
import { RootState } from "../../../redux/store"
import { replaceMarkdownLink } from "../../../utils/markdown-link"

const ProductDetails = () => {
  const [selectedPrice, setSelectedPrice] = useState<ProductPrice | null>(null)

  const { Contents } = useSelector((state: RootState) => state.product)

  React.useEffect(() => {
    if (!Contents?.Prices) return
    setSelectedPrice((value) => {
      if (value) return value
      return Contents.Prices[0]
    })
  }, [Contents])

  return (
    <div className="product-details ms-auto pb-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <a href="#reviews" data-scroll="data-scroll">
          <span className="d-inline-block fs-sm text-body align-middle mt-1 ms-1">
            {Contents?.Reviews?.length} Reviews
          </span>
        </a>
        <button
          className="btn-wishlist me-0 me-lg-n3"
          type="button"
          data-bs-toggle="tooltip"
          title="Add to wishlist"
        >
          <i className="ci-heart"></i>
        </button>
      </div>
      <div className="mb-3">
        <span className="h3 fw-normal text-accent me-2">
          € {selectedPrice?.Price?.toFixed(2)}
        </span>
        <span className="badge bg-danger badge-shadow align-middle mt-n2">
          PER 10 KILO
        </span>
      </div>

      <div className="position-relative me-n4 mb-3">
        {Contents && Contents?.Stock > 0 && (
          <div className="product-badge product-available mt-n1">
            <i className="ci-security-check"></i>Product available
          </div>
        )}
      </div>
      <form className="mb-grid-gutter" method="post">
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center pb-1">
            <label className="form-label" htmlFor="product-options">
              Options:
            </label>
          </div>
          <select
            className="form-select"
            required={true}
            value={selectedPrice?.Amount}
            id="product-options"
            onChange={(e) => {
              const amount = +e.currentTarget.value
              const option = Contents?.Prices.find(
                (price) => price.Amount === amount,
              )
              setSelectedPrice(option || null)
            }}
          >
            {Contents?.Prices?.map((price) => (
              <option key={`option-${price.Price}`} value={price.Amount}>
                {price.Amount}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <button
            className="btn btn-primary btn-shadow d-block w-100"
            type="submit"
          >
            <i className="ci-cart fs-lg me-2"></i>Add to Cart
          </button>
        </div>
      </form>

      <div className="accordion mb-4" id="productPanels">
        <div className="accordion-item">
          <h3 className="accordion-header">
            <a
              className="accordion-button collapsed"
              href="#productInfo"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="productInfo"
            >
              <i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>
              Gerelateerde producten
            </a>
          </h3>
          <div
            className="accordion-collapse collapse"
            id="productInfo"
            data-bs-parent="#productPanels"
          >
            <div className="accordion-body">
              <p
                dangerouslySetInnerHTML={{
                  __html: replaceMarkdownLink(Contents?.Information || ""),
                }}
              />

              <h6 className="fs-sm mb-2">Art. No.</h6>
              <ul className="fs-sm ps-4 mb-0">
                <li>{Contents?.ForeignProductId}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h3 className="accordion-header">
            <a
              className="accordion-button collapsed"
              href="#productAttrs"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="productAttrs"
            >
              <i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>
              Omschrijving
            </a>
          </h3>
          <div
            className="accordion-collapse collapse"
            id="productAttrs"
            data-bs-parent="#productPanels"
          >
            <div className="accordion-body">
              <ul className="fs-sm ps-4">
                {Contents?.Attributes &&
                  Object.values(Contents.Attributes).map((attribute) => (
                    <li key={attribute.Name}>
                      {attribute.Name}: {attribute.Value} {attribute.Unit}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h3 className="accordion-header">
            <a
              className="accordion-button collapsed"
              href="#shippingOptions"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="shippingOptions"
            >
              <i className="ci-delivery text-muted lead align-middle mt-n1 me-2"></i>
              Shipping options
            </a>
          </h3>
          <div
            className="accordion-collapse collapse"
            id="shippingOptions"
            data-bs-parent="#productPanels"
          >
            <div className="accordion-body fs-sm">
              <div className="d-flex justify-content-between border-bottom pb-2">
                <div>
                  <div className="fw-semibold text-dark">Courier</div>
                  <div className="fs-sm text-muted">2 - 4 days</div>
                </div>
                <div>$26.50</div>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <div>
                  <div className="fw-semibold text-dark">Local shipping</div>
                  <div className="fs-sm text-muted">up to one week</div>
                </div>
                <div>$10.00</div>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <div>
                  <div className="fw-semibold text-dark">Flat rate</div>
                  <div className="fs-sm text-muted">5 - 7 days</div>
                </div>
                <div>$33.85</div>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <div>
                  <div className="fw-semibold text-dark">
                    UPS ground shipping
                  </div>
                  <div className="fs-sm text-muted">4 - 6 days</div>
                </div>
                <div>$18.00</div>
              </div>
              <div className="d-flex justify-content-between pt-2">
                <div>
                  <div className="fw-semibold text-dark">
                    Local pickup from store
                  </div>
                  <div className="fs-sm text-muted">&mdash;</div>
                </div>
                <div>$0.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h3 className="accordion-header">
            <a
              className="accordion-button collapsed"
              href="#localStore"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="localStore"
            >
              <i className="ci-location text-muted fs-lg align-middle mt-n1 me-2"></i>
              Find in local store
            </a>
          </h3>
          <div
            className="accordion-collapse collapse"
            id="localStore"
            data-bs-parent="#productPanels"
          >
            <div className="accordion-body">
              <select className="form-select">
                <option value="value">Select your country</option>
                <option value="Argentina">Argentina</option>
                <option value="Belgium">Belgium</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Spain">Spain</option>
                <option value="UK">United Kingdom</option>
                <option value="USA">USA</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <label className="form-label d-inline-block align-middle my-2 me-3">
        Share:
      </label>
      <a className="btn-share btn-twitter me-2 my-2" href="#">
        <i className="ci-twitter"></i>Twitter
      </a>
      <a className="btn-share btn-instagram me-2 my-2" href="#">
        <i className="ci-instagram"></i>Instagram
      </a>
      <a className="btn-share btn-facebook my-2" href="#">
        <i className="ci-facebook"></i>Facebook
      </a>
    </div>
  )
}

export default ProductDetails
