import React from "react"
import ContentLoader from "react-content-loader"

const DayWeekLoader = () => (
  <ContentLoader 
    speed={2}
    width={112}
    height={142}
    viewBox="0 0 112 142"
    backgroundColor="#f3f3f3"
    foregroundColor="#ffffff"
  >
    <rect x="0" y="0" rx="10" ry="10" width="112" height="142" />
  </ContentLoader>
)

export default DayWeekLoader