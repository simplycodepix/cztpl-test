import type { ProductResponse } from "../redux/product.slice"

export const calculateReviewStars = (product: ProductResponse) => {
  const { Reviews } = product
  if (!Reviews?.length) return 0

  const starsAvg =
    Reviews.reduce((curr, review) => {
      return curr + +review.Stars
    }, 0) / Reviews.length

  return Math.round(starsAvg * 2) / 2
}
