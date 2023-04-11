import ContentLoader from "react-content-loader";

const TodayInfoLoader = () => (
    <ContentLoader 
      speed={2}
      height={45}
      viewBox="0 0 722 45"
      backgroundColor="#f3f3f3"
      foregroundColor="#ffffff"
      style={{width:'100%'}}
    >
      <rect x="0" y="0" rx="0" ry="0" width="82" height="19" /> 
      <rect x="-2" y="26" rx="0" ry="0" width="50" height="20" /> 
      <rect x="666" y="0" rx="0" ry="0" width="56" height="20" /> 
      <rect x="666" y="26" rx="0" ry="0" width="56" height="20" />
    </ContentLoader>
  
  )
  export default TodayInfoLoader