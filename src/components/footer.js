import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { mediaQuery } from "../components/styled"

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 900px;
    width: 70%;
    margin: 0;
    margin-bottom: 20px;
    padding: 20px;

    ${mediaQuery("tablet")} {
        max-width: 100%;
        width: 100%;
    }
    
    ${mediaQuery("mobile")} {
        flex-direction: column;
        justify-content: flex-start;
        max-width: 100%;
        width: 100%;
    }
`

const FooterCopyright = styled.div`
    display: flex;
    justify-content: center;
    font-size: 0.8em;
    padding: 20px;
`

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    padding: 0 10px;

    ${mediaQuery("mobile")} {
        margin-bottom: 20px;
    }
`

const MediaNav = styled.nav`
    display: flex;
    padding-top: 5px;
`

const MediaLinkCss = css`
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    font-size: 0.8em;
    margin-right: 20px;
`

const ContactList = styled.ul`
    padding-top: 5px;
    margin: 0;
    font-size: 0.8em;
`

const ContactItem = styled.li`
    list-style: none;
    margin-bottom: 2px;
`

const FooterCss = css`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000;
    width: 100%;
    min-height: 300px;

    ${mediaQuery("mobile")} {
        position: relative;
    }
`

const FooterColumnTitle = styled.h3`
    margin-bottom: 5px;
`

const FooterColumnDescription = styled.p`
    margin-bottom: 5px;
    font-size: 0.9em;
`

const Footer = ({ siteTitle, siteDescription, siteContacts, siteSocial }) => (
    <footer css={FooterCss}>
        <FooterContainer>
            <FooterColumn>
                <FooterColumnTitle>Follow us</FooterColumnTitle>
                <FooterColumnDescription>
                    You can follow us in these social media platforms:
                </FooterColumnDescription>
                <MediaNav>
                    <a href={`https://twitter.com/${siteSocial.twitter}`} css={MediaLinkCss}>
                        Twitter
                    </a>
                    <a href={`https://facebook.com/${siteSocial.facebook}`} css={MediaLinkCss}>
                        Facebook
                    </a>
                    <a href={`https://instagram.com/${siteSocial.instagram}`} css={MediaLinkCss}>
                        Instagram
                    </a>
                </MediaNav>
            </FooterColumn>
            <FooterColumn>
                <FooterColumnTitle>Contact us</FooterColumnTitle>
                <FooterColumnDescription>
                    You can reach us through these contact channels:
                </FooterColumnDescription>
                <ContactList>
                    <ContactItem>{`Mobile: ${siteContacts.mobile}`}</ContactItem>
                    <ContactItem>{`Phone: ${siteContacts.phone}`}</ContactItem>
                    <ContactItem>
                        {`E-mail: ${siteContacts.email}`}
                    </ContactItem>
                </ContactList>
            </FooterColumn>
            <FooterColumn>
                <FooterColumnTitle>{siteTitle}</FooterColumnTitle>
                <FooterColumnDescription>
                    {siteDescription}
                </FooterColumnDescription>
            </FooterColumn>
        </FooterContainer>
        <FooterCopyright>
            <FooterColumnDescription>
                (C) 2018 Antonio's Unlimited Chicken and Pasta. All rights
                reserved.
            </FooterColumnDescription>
        </FooterCopyright>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
