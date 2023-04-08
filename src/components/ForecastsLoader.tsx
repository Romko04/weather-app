import ContentLoader from "react-content-loader"
const ForecastsLoader = () => (
  <ContentLoader 
    speed={2}
    width={700}
    height={460}
    viewBox="0 0 700 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ffffff"
  >
    <rect x="160" y="155" rx="9" ry="9" width="370" height="227" /> 
    <rect x="10" y="144" rx="17" ry="17" width="170" height="251" />
  </ContentLoader>
)

export default ForecastsLoader
