import ContentLoader from "react-content-loader"

const WeatherSideLoader = () => (
    <ContentLoader 
      speed={2}
      width={306}
      height={408}
      viewBox="0 0 306 408"
      backgroundColor="#f3f3f3"
      foregroundColor="#ffffff"
    >
      <rect x="0" y="0" rx="25" ry="25" width="300" height="400" />
    </ContentLoader>
  )
  
  export default WeatherSideLoader
  