import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon from '../images/favicon.png'
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import './index.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ef8310" />
      <title>TPOHS</title>
      <link rel="shortcut icon" href={favicon} />
      <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,600" rel="stylesheet"/>
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
    <Footer></Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
