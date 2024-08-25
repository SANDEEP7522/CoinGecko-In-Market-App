import ContentLoader from 'react-content-loader'

const MultiMorePage = props => {
  return (
    <ContentLoader
      height={1200}
      width={1060}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
     <rect x="80" y="5" rx="0" ry="0" width="1000" height="35" />
      <rect x="102" y="160" rx="3" ry="3" width="900" height="30" />
      <circle cx="44" cy="42" r="38" />
      <circle cx="44" cy="147" r="38" />
      <circle cx="44" cy="251" r="38" />
      
      <rect x="105" y="48" rx="3" ry="3" width="900" height="30" />
      <rect x="104" y="257" rx="3" ry="3" width="900" height="30" />
    </ContentLoader>
  )
}
MultiMorePage.metadata = {
  name: 'Rituraj ratan',
  github: 'riturajratan',
  description: 'Listing with thumbnail',
  filename: 'ListingWithThumbnail',
}

export default MultiMorePage