import React from "react"
import { Review } from "../../../redux/product.slice"
import StarRating from "../../StarRating"

const ProductReviews: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="container pt-md-2" id="reviews">
      <div className="row pb-3">
        <div className="col-lg-4 col-md-5">
          <h2 className="h3 mb-4">{reviews?.length} Reviews</h2>
          <div className="star-rating me-2">
            <i className="ci-star-filled fs-sm text-accent me-1"></i>
            <i className="ci-star-filled fs-sm text-accent me-1"></i>
            <i className="ci-star-filled fs-sm text-accent me-1"></i>
            <i className="ci-star-filled fs-sm text-accent me-1"></i>
            <i className="ci-star fs-sm text-muted me-1"></i>
          </div>
          <span className="d-inline-block align-middle">
            4.1 Overall rating
          </span>
          <p className="pt-3 fs-sm text-muted">
            58 out of 74 (77%)
            <br />
            Customers recommended this product
          </p>
        </div>
        <div className="col-lg-8 col-md-7">
          <div className="d-flex align-items-center mb-2">
            <div className="text-nowrap me-3">
              <span className="d-inline-block align-middle text-muted">5</span>
              <i className="ci-star-filled fs-xs ms-1"></i>
            </div>
            <div className="w-100">
              <div className="progress" style={{ height: "4px" }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <span className="text-muted ms-3">43</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="text-nowrap me-3">
              <span className="d-inline-block align-middle text-muted">4</span>
              <i className="ci-star-filled fs-xs ms-1"></i>
            </div>
            <div className="w-100">
              <div className="progress" style={{ height: "4px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "27%", backgroundColor: "#a7e453" }}
                  aria-valuenow={27}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <span className="text-muted ms-3">16</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="text-nowrap me-3">
              <span className="d-inline-block align-middle text-muted">3</span>
              <i className="ci-star-filled fs-xs ms-1"></i>
            </div>
            <div className="w-100">
              <div className="progress" style={{ height: "4px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "17%", backgroundColor: "#ffda75" }}
                  aria-valuenow={17}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <span className="text-muted ms-3">9</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="text-nowrap me-3">
              <span className="d-inline-block align-middle text-muted">2</span>
              <i className="ci-star-filled fs-xs ms-1"></i>
            </div>
            <div className="w-100">
              <div className="progress" style={{ height: "4px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "9%", backgroundColor: "#fea569" }}
                  aria-valuenow={9}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <span className="text-muted ms-3">4</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="text-nowrap me-3">
              <span className="d-inline-block align-middle text-muted">1</span>
              <i className="ci-star-filled fs-xs ms-1"></i>
            </div>
            <div className="w-100">
              <div className="progress" style={{ height: "4px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "4%" }}
                  aria-valuenow={4}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <span className="text-muted ms-3">2</span>
          </div>
        </div>
      </div>
      <hr className="mt-4 mb-3" />
      <div className="row pt-4">
        <div className="col-md-7">
          <div className="d-flex justify-content-end pb-4">
            <div className="d-flex align-items-center flex-nowrap">
              <label
                className="fs-sm text-muted text-nowrap me-2 d-none d-sm-block"
                htmlFor="sort-reviews"
              >
                Sort by:
              </label>
              <select className="form-select form-select-sm" id="sort-reviews">
                <option>Newest</option>
                <option>Oldest</option>
                <option>Popular</option>
                <option>High rating</option>
                <option>Low rating</option>
              </select>
            </div>
          </div>

          {reviews.map((review) => (
            <div
              key={review.Id}
              className="product-review pb-4 mb-4 border-bottom"
            >
              <div className="d-flex mb-3">
                <div className="d-flex align-items-center me-4 pe-2">
                  <img
                    className="rounded-circle"
                    src="img/shop/reviews/01.jpg"
                    width="50"
                    alt="Rafael Marquez"
                  />
                  <div className="ps-3">
                    <h6 className="fs-sm mb-0">{review.Name}</h6>
                    <span className="fs-ms text-muted">{review.Name}</span>
                  </div>
                </div>
                <div>
                  <StarRating rating={+review.Stars || 0} />
                </div>
              </div>
              <p className="fs-md mb-2">{review.Content}</p>
            </div>
          ))}

          {reviews.length > 0 && (
            <div className="text-center">
              <button className="btn btn-outline-accent" type="button">
                <i className="ci-reload me-2"></i>Load more reviews
              </button>
            </div>
          )}
        </div>

        <div className="col-md-5 mt-2 pt-4 mt-md-0 pt-md-0">
          <div className="bg-secondary py-grid-gutter px-grid-gutter rounded-3">
            <h3 className="h4 pb-2">Write a review</h3>
            <form className="needs-validation" method="post" noValidate={true}>
              <div className="mb-3">
                <label className="form-label" htmlFor="review-name">
                  Your name<span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  required={true}
                  id="review-name"
                />
                <div className="invalid-feedback">Please enter your name!</div>
                <small className="form-text text-muted">
                  Will be displayed on the comment.
                </small>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="review-email">
                  Your email<span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="email"
                  required={true}
                  id="review-email"
                />
                <div className="invalid-feedback">
                  Please provide valid email address!
                </div>
                <small className="form-text text-muted">
                  Authentication only - we won't spam you.
                </small>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="review-rating">
                  Rating<span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  required={true}
                  id="review-rating"
                >
                  <option value="">Choose rating</option>
                  <option value="5">5 stars</option>
                  <option value="4">4 stars</option>
                  <option value="3">3 stars</option>
                  <option value="2">2 stars</option>
                  <option value="1">1 star</option>
                </select>
                <div className="invalid-feedback">Please choose rating!</div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="review-text">
                  Review<span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  rows={6}
                  required={true}
                  id="review-text"
                ></textarea>
                <div className="invalid-feedback">Please write a review!</div>
                <small className="form-text text-muted">
                  Your review must be at least 50 characters.
                </small>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="review-pros">
                  Pros
                </label>
                <textarea
                  className="form-control"
                  rows={2}
                  placeholder="Separated by commas"
                  id="review-pros"
                ></textarea>
              </div>
              <div className="mb-3 mb-4">
                <label className="form-label" htmlFor="review-cons">
                  Cons
                </label>
                <textarea
                  className="form-control"
                  rows={2}
                  placeholder="Separated by commas"
                  id="review-cons"
                ></textarea>
              </div>
              <button
                className="btn btn-primary btn-shadow d-block w-100"
                type="submit"
              >
                Submit a Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductReviews
