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
import NotifProvider, {
    SUCCESS_NOTIF,
    ERROR_NOTIF,
} from "./contexts/notifProvider"
import NotifContext from "./contexts/notifContext"
import {
    SuccessNotification,
    ErrorNotification,
    DefaultNotification,
    NOTIF_HEIGHT_PX,
    NOTIF_DIST_TO_EDGE,
    mediaQuery
} from "./styled"

const Layout = ({ children }) => {
    const displayNotif = (notif, key = 0) => {
        const position = (key * NOTIF_HEIGHT_PX) + (NOTIF_DIST_TO_EDGE * (key + 1))

        switch (notif.type) {
            case SUCCESS_NOTIF:
                return (
                    <SuccessNotification
                        key={key}
                        text={notif.text}
                        position={position}
                    />
                )
            case ERROR_NOTIF:
                return (
                    <ErrorNotification
                        key={key}
                        text={notif.text}
                        position={position}
                    />
                )
            default:
                return (
                    <DefaultNotification
                        key={key}
                        text={notif.text}
                        position={position}
                    />
                )
        }
    }

    return (
        <NotifProvider>
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
                        <Header siteTitle={data.site.siteMetadata.title} />
                        <main
                            css={css`
                                padding-bottom: 300px;
                                min-height: 100%;
                                overflow: scroll;

                                ${mediaQuery("tablet")} {
                                    padding-bottom: 20px;
                                }

                                ${mediaQuery("mobile")} {
                                    padding-bottom: 20px;
                                }
                            `}
                        >
                            {children}
                        </main>
                        <Footer
                            siteTitle={data.site.siteMetadata.title}
                            siteDescription={data.site.siteMetadata.description}
                            siteContacts={{
                                mobile: data.site.siteMetadata.mobile,
                                email: data.site.siteMetadata.email,
                                phone: data.site.siteMetadata.phone,
                            }}
                            siteSocial={{
                                twitter: data.site.siteMetadata.twitter,
                                facebook: data.site.siteMetadata.facebook,
                                instagram: data.site.siteMetadata.instagram,
                            }}
                        />
                        <NotifContext.Consumer>
                            {({ notifs }) => {
                                return notifs.map((val, index) => {
                                    return displayNotif(val, index)
                                })
                            }}
                        </NotifContext.Consumer>
                    </>
                )}
            />
        </NotifProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
