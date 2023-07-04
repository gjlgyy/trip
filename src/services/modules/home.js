import JLRequest from "../request/index"

export function getHotSuggest() {
  return JLRequest.get({
    url: "/home/hotSuggests"
  })
}