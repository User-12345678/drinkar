import React from "react"
import ContentLoader from "react-content-loader"
import './Skeleton.css'
const MyLoader = (props) => (
    <div className="loader">
  <ContentLoader 
    speed={2}
    width={352}
    height={550}
    viewBox="0 0 352 550"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="70" y="20" rx="3" ry="3" width="200" height="24" /> 
    <rect x="12" y="60" rx="3" ry="3" width="320" height="240" /> 
    <rect x="76" y="325" rx="3" ry="3" width="200" height="24" /> 
    <rect x="63" y="365" rx="3" ry="3" width="225" height="24" /> 
    <rect x="81" y="405" rx="3" ry="3" width="190" height="24" /> 
    <rect x="88" y="445" rx="3" ry="3" width="175" height="24" /> 
    <rect x="113" y="485" rx="3" ry="3" width="125" height="40" /> 
  </ContentLoader>
  </div>
)

export default MyLoader