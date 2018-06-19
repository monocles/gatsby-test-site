module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
	  {
	  	resolve: 'gatsby-plugin-react-helmet'
	  },{
    	resolve: `gatsby-source-contentful`,
    	options: {
      	spaceId: `79so78j1e542`,
      	accessToken: `b3b1b0234d946b980809a1bde7bfd1f7f696086c03a62a3e5de1f50979ab7683`,
    	},
	  },
  ],
}
