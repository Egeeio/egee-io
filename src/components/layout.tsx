import * as React from "react";
import * as PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import favicon from '../images/favicon.ico';
import Footer from "./footer";
import Header from "./header";
import "bulma/css/bulma.css";
import "./site.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          meta={[
            { name: "description", content: "An Alternative PC Gaming Community" },
            { name: "keywords", content: "linux, gaming" },
            { name: "charset", content: "utf-8"}
          ]}
        >
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600" rel="stylesheet"/>
          <link href={favicon} rel="icon" type="image/x-icon"/>
        </Helmet>
        <Header/>
        <div>
          {children}
        </div>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
