// import React from 'react'
import ContentLoader from 'react-content-loader'

const SingleCoinPageLoder = props => {
  return (
    <ContentLoader
      height={500}
      width={450}
      viewBox="0 0 450 300"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}
    >
      <circle cx="120" cy="120" r="100" />
      
     

      <rect x="315" y="15" rx="3" ry="3" width="150" height="15" />
      <rect x="370" y="15" rx="3" ry="3" width="50" height="15" />
      <rect x="425" y="15" rx="3" ry="3" width="50" height="15" />

    </ContentLoader>
  )
}

SingleCoinPageLoder.metadata = {
  name: 'Nikhil Anand', // My name
  github: 'anandnkhl', // Github username
  description: 'Latest Github Profile', // Little tagline
  filename: 'GithubProfile', // filename of your loaderr
}

export default SingleCoinPageLoder;