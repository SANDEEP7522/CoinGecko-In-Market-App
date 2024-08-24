// import React from 'react'
import ContentLoader from 'react-content-loader'

const MultiCoinPageLoder = props => {
  return (
    <ContentLoader 
    viewBox="20 70 500 200"
    height={600} width={1300}
    {...props}>

    
    <rect x="477" y="39" rx="0" ry="0" width="10" height="8" />

    <rect x="19" y="64" rx="0" ry="0" width="465" height="155" />

    <rect x="18" y="500" rx="0" ry="0" width="141" height="38" />
    <rect x="18" y="270" rx="0" ry="0" width="141" height="38" />
    <rect x="18" y="310" rx="0" ry="0" width="141" height="38" />
    <rect x="18" y="360" rx="0" ry="0" width="141" height="38" />
    <rect x="18" y="410" rx="0" ry="0" width="141" height="38" />
    <rect x="18" y="460" rx="0" ry="0" width="141" height="38" />
  </ContentLoader>
)


}

MultiCoinPageLoder.metadata = {
  name: 'Akash Bambhaniya',
  github: 'Akashnb', 
  description: 'Avatar With Text (circle)',
  filename: 'AvatarWithText', 
}
  

export default MultiCoinPageLoder;