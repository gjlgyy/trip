import JLRequest from "../request/index"

export function getHotSuggest() {
  return JLRequest.get({
    url: "/home/hotSuggests"
  })
}
export function getCategory() {
  return JLRequest.get({
    url: "/home/categories"
  })
}