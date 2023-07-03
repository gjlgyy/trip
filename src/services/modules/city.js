import JLRequest from "../request/index"

export function getCityAll() {
  return JLRequest.get({
    url: "/city/all"
  })
}