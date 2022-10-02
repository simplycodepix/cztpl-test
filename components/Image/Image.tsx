const basePath = "https://ik.imagekit.io/baas"

const buildImageKitUrl = (width: number = 50, height: number = 50): string => {
  let transform = `tr:w-${width}`
  return `${basePath}/${transform}/images/`
}

const getProductPhotoPathFromImage = (
  item: any,
  width: number = 50,
  height: number = 50,
): string => {
  let i
  if (item?.Image?.Filename) {
    i = item.Image
    let parts = i.Filename.split("_")
    if (i.Origin == "Upload") {
      return `${buildImageKitUrl(width, height)}upload/test/${parts[0]}.${
        item.Image.FileExtension
      }`
    } else {
      return `${basePath}/tradelinq_commerce/${parts[0]}.${item.Image.FileExtension}`
    }
  } else {
    i = item
    let parts = i.Filename.split("_")
    if (i.Origin == "Upload") {
      return `${buildImageKitUrl(width, height)}upload/test/${parts[0]}.${
        item.FileExtension
      }`
    } else {
      return `${basePath}/tradelinq_commerce/${parts[0]}.${item.FileExtension}`
    }
  }
  return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAEDElEQVR4Xu3cvUo7QRAA8EknNoqk0c4PbH0BbdIo+ABqIxYiaC0GIXXAPIBp7fQRtLHR0kKw9aPTTrARu+isTFxzX3t7O7tzyV2jf+9u7vbHzOzy59ja3d1db2pqCsbGxqA64gW+vr7g/f0das/Pzz38ZWFhASYmJiqvAYGPjw94fHwETKja6+trb3x8XP2hAvsvRVDo8vn5+Ys1PT0N+okqwyDi8fb29oeFphXYb2bFOUSwKrDkhInFGmWwtMpKxBpFsKwWlIo1SmBZUGiRiTUKYCZQxljDDGYKlQtrGMHyQOXGGiawvFBWWMMAZgNljVVmMFuoQlhlBCsCVRirTGBFoZxglQHMBZQzLMlgrqCcYkkEcwnlHEsSmGsoFiwJYBxQbFghwbigWLFCgHFCsWP5BOOG8oLlA8wHlDcsTjBfUF6xOMB8QnnHcgnmGyoIlguwEFDBsIqAhYIKimUDFhIqOFYesNBQIrBMwCRAicFKA5MCJQorDkwSlDgsHQw/rsNvCyR9iWj0rQMOwufx8yWigkKwmZkZn49OfZY4LCq9KrMycmSwR1U9KwEsCUYSmIgyzALJOu+rqQXHMoUwvY4TLihWXoC817uGC4ZlO3Db+1zABcEqOuCi99vCecdyNVBXcfLAecVyPUDX8bLgvGFxDYwrbhycFyzuAXHHJzh2LF8D8fEcViwfA9DLhft5bFjcL57UjDmfy4LF+cJZM5bJ/+mbxPDS4END0SA53sNpZnG8oG0WcGSYMyxpUBwZ5gRLKpRrsMJY0qFcghXCKguUKzBrrLJBuQCzwiorVFGw3FhlhyoClgvLN9TFxQVsbW1Fllr7+/twenoKceefnp5gbm4ucXlWJKYxlm+ouNHe3t7CysoKEEin04Hr62u4vLy0XrteXV3B2toa3N/fw9LSEqTFNMKSAIUa+JHI3t4eHB0dKZyDgwP1E7PM9sCY29vbsL6+ruIfHx8nxszEkgJF5dPr9foumBE7Ozuwubn5zwoRu90u0LV0783NDSwvL/ev1WPSOJvNJuzu7kZi4k2l2YsGYRqNRj+r8OVrtRrMz8+rssTj5OSkfx6vx951eHiorjk/P48ADMZEsMnJSZidnYWXl5dIzEQsKRmFb/yzzV4fhZo3/Y0QqJ/pKIiJB00IevqlxWy326rEHx4eVI+kmLFYkqBwgFgurVZLbbOXdlA2UQ/DZo1lpZcu3Z8WUx//xsaGylCMGcGSBpWnketYlDlYgti4B2fMrMlB72GLi4tRLIlQiBXXyAeXEfRvauL6zInlONizTGLSsgKhV1dX/zJL8m6SOPCzs7N/MxmVp75o1aHwPJVt3GxoGhOh6vW6yk61m2S1T2n6Ko0qTu1TWu2Am72kpR1wvwF25yS1CK6J+QAAAABJRU5ErkJggg=="
}

export default function Image(props: any) {
  const { image, width, height, ...rest } = props

  const productPhoto = getProductPhotoPathFromImage(image, width, height)

  return (
    <img
      {...rest}
      data-zoom={productPhoto}
      src={productPhoto}
      alt={image.Title}
    />
  )
}
