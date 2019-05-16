import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 900px;
    width: 70%;
    margin: 0;
    margin-bottom: 20px;
    padding: 20px;
`

const FooterCopyright = styled.div`
    display: flex;
    justify-content: center;
    font-size: 0.8em;
`

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    padding: 0 10px;
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
                    <Link to={`https://twitter.com/${siteSocial.twitter}`} css={MediaLinkCss}>
                        Twitter
                    </Link>
                    <Link to={`https://facebook.com/${siteSocial.facebook}`} css={MediaLinkCss}>
                        Facebook
                    </Link>
                    <Link to={`https://instagram.com/${siteSocial.instagram}`} css={MediaLinkCss}>
                        Instagram
                    </Link>
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
