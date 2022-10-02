import React from "react"

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="star-rating">
      {rating === 0 && (
        <>
          <i className="star-rating-icon ci-star"></i>
          <i className="star-rating-icon ci-star"></i>
          <i className="star-rating-icon ci-star"></i>
          <i className="star-rating-icon ci-star"></i>
          <i className="star-rating-icon ci-star"></i>
        </>
      )}
      {rating === 1 && (
        <>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star"></i>
          <i className="star-rating-icon ci-star"></i>
          <i className="star-rating-icon ci-star"></i>
          <i className="star-rating-icon ci-star"></i>
        </>
      )}
      {rating === 1.5 && (
        <>
          <i className="star-rating-icon ci-star active"></i>
          <i className="star-rating-icon ci-star-half active"></i>
          <i className="star-rating-icon ci-star"></i>
          <i className="star-rating-icon ci-star"></i>
          <i className="star-rating-icon ci-star"></i>
        </>
      )}
      {rating === 2 && (
        <>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star"></i>
          <i className="star-rating-icon ci-star"></i>
          <i className="star-rating-icon ci-star"></i>
        </>
      )}
      {rating === 2.5 && (
        <>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-half active"></i>
          <i className="star-rating-icon ci-star"></i>
          <i className="star-rating-icon ci-star"></i>
        </>
      )}
      {rating === 3 && (
        <>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star"></i>
          <i className="star-rating-icon ci-star"></i>
        </>
      )}
      {rating === 3.5 && (
        <>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-half active"></i>
          <i className="star-rating-icon ci-star"></i>
        </>
      )}
      {rating === 4 && (
        <>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star"></i>
        </>
      )}
      {rating === 4.5 && (
        <>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-half active"></i>
        </>
      )}
      {rating === 5 && (
        <>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
          <i className="star-rating-icon ci-star-filled active"></i>
        </>
      )}
    </div>
  )
}

export default StarRating
