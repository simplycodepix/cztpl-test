import React, { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { tns } from "tiny-slider"

import { ProductResponse } from "../../../redux/product.slice"

import StarRating from "../../StarRating"
import Image from "../../Image"

const generateCarouselId = () =>
  `carousel-${Math.random().toString(16).slice(2)}`

const calculateReviewStars = (product: ProductResponse) => {
  const { Reviews } = product
  if (!Reviews?.length) return 0

  const starsAvg =
    Reviews.reduce((curr, review) => {
      return curr + +review.Stars
    }, 0) / Reviews.length

  return Math.round(starsAvg * 2) / 2
}

const ProductCarousel: React.FC<{ products: ProductResponse[] }> = ({
  products,
}) => {
  const [carouselId] = useState(generateCarouselId())
  const carouselRef = useRef<any>(null)

  const initCarousel = (carouselId: string) => {
    const container = document.getElementById(carouselId)
    if (!container) return

    const settings: any = {
      container: container,
      controlsText: [
        '<i class="ci-arrow-left"></i>',
        '<i class="ci-arrow-right"></i>',
      ],
      navPosition: "bottom",
      mouseDrag: true,
      speed: 500,
      autoplayHoverPause: true,
      autoplayButtonOutput: false,
      items: 2,
      controls: true,
      nav: false,
      responsive: {
        "0": { items: 4 },
        "500": { items: 2, gutter: 18 },
        "768": { items: 3, gutter: 20 },
        "1100": { items: 4, gutter: 30 },
      },
    }

    carouselRef.current = tns(settings)
  }

  useEffect(() => {
    initCarousel(carouselId)
    return () => {
      if (carouselRef?.current?.destroy) carouselRef.current.destroy()
    }
  }, [carouselId])

  return (
    <div className="tns-carousel tns-controls-static tns-controls-outside">
      <div id={carouselId} className="tns-carousel-inner">
        {products.map((product) => {
          return (
            <div key={product.Id}>
              <div className="card product-card card-static">
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add to wishlist"
                >
                  <i className="ci-heart"></i>
                </button>
                <Link href={`/product/${product.Id}`}>
                  <a className="card-img-top d-block overflow-hidden">
                    <Image image={product.Images[0]} width={274} height={274} />
                  </a>
                </Link>
                <div className="card-body py-2">
                  <Link href={`/product/${product.Id}`}>
                    <a className="product-meta d-block fs-xs pb-1">
                      {product?.LegacyId}
                    </a>
                  </Link>
                  <h3 className="product-title fs-sm">
                    <Link href={`/product/${product.Id}`}>
                      <a>{product.Description}</a>
                    </Link>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        € {product.Prices[0].Price.toFixed(2)}
                      </span>
                    </div>
                    <StarRating rating={calculateReviewStars(product)} />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(ProductCarousel)
