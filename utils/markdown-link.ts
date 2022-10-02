export const replaceMarkdownLink = (text: string) => {
  let changedText = text.replace(/(?:\r\n|\r|\n)/g, "<br>")
  let elements = changedText.match(/\[.*?\)/g)
  if (elements != null && elements.length > 0) {
    elements.forEach((element: string) => {
      let txt = element.match(/\[(.*?)\]/)[1] //get only the txt
      let url = element.match(/\((.*?)\)/)[1] //get only the link
      changedText = changedText.replace(
        element,
        '<a href="' + url + '" target="_blank">' + txt + "</a>",
      )
    })
  }
  return changedText
}
