/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
						title
                        description
                        mobile
                        email
                        phone
                        twitter
                        facebook
                        instagram
                    }
                }
            }
        `}
        render={data => (
            <>
                <Header
                    siteTitle={data.site.siteMetadata.title}
                />
				<main css={css`padding-bottom: 300px; min-height: 100%;`}>
					{children}
				</main>
				<Footer 
					siteTitle={data.site.siteMetadata.title}
                    siteDescription={data.site.siteMetadata.description}
                    siteContacts={{
                        mobile: data.site.siteMetadata.mobile,
                        email: data.site.siteMetadata.email,
                        phone: data.site.siteMetadata.phone
                    }}
                    siteSocial={{
                        twitter: data.site.siteMetadata.twitter,
                        facebook: data.site.siteMetadata.facebook,
                        instagram: data.site.siteMetadata.instagram
                    }}
				/>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
