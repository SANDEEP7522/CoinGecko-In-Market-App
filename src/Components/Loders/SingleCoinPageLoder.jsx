// import React from 'react'
import ContentLoader from 'react-content-loader'

const SingleCoinPageLoder = props => {
  return (
   
      <ContentLoader
        height={200}
        speed={1}
        backgroundColor={'#555'}
        foregroundColor={'#999'}
        viewBox="0 0 380 70"
      >
       
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
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