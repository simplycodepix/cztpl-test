import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { RootState } from "../../../redux/store"
import { ProductImage } from "../../../redux/product.slice"

import Image from "../../Image"

const ProductGallery: React.FC<{ images: ProductImage[] }> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(
    images.length > 0 ? images[0] : null,
  )
  const { Contents, Status } = useSelector((state: RootState) => state.product)

  useEffect(() => {
    let Drift
    if (typeof window !== "undefined") {
      Drift = require("drift-zoom").default
    }

    const activeImage = document.querySelector(
      ".product-gallery-preview-item.active img",
    )
    const paneContainer = document.querySelector(
      ".product-gallery-preview-item.active .image-zoom-pane",
    )
    if (activeImage) {
      new Drift(activeImage, {
        paneContainer: paneContainer,
      })
    }
  }, [activeImage])

  return (
    <div className="product-gallery">
      <div className="product-gallery-preview order-sm-2">
        {Contents &&
          images?.length > 0 &&
          images.map((image, index) => (
            <div
              className={`product-gallery-preview-item ${
                activeImage?.ImageId === image.ImageId ? "active" : ""
              }`}
              id={image.Filename}
              key={image.ImageId}
            >
              <Image
                className="image-zoom"
                image={image}
                width={571}
                height={571}
              />
              <div className="image-zoom-pane"></div>
            </div>
          ))}
      </div>
      <div className="product-gallery-thumblist order-sm-1">
        {images?.length > 0 &&
          images.map((image, index) => (
            <a
              className={`product-gallery-thumblist-item ${
                activeImage?.ImageId === image.ImageId ? "active" : ""
              }`}
              href={image.Filename}
              key={`thumb-${image.Filename}`}
              onClick={(e) => {
                e.preventDefault()
                setActiveImage(image)
              }}
            >
              <Image image={image} width={78} height={78} />
            </a>
          ))}
      </div>
    </div>
  )
}

export default ProductGallery
