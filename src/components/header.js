import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { mediaQuery } from "./styled"

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
	max-width: 900px;
	width: 70%;
    margin: 0;

    ${mediaQuery("tablet")} {
        width: 100%;
    }

    ${mediaQuery("mobile")} {
        width: 100%;
        flex-direction: column;
        justify-content: center;
    }
`

const HeaderElement = styled.div`
    padding: 10px;
	background-color: #aa3333;
`

const HeaderNav = styled.nav`
    display: flex;
	justify-content: space-around;

    ${mediaQuery("mobile")} {
        font-size: .7em;
    }
`
const HeaderNavLinkCss = css`
    display: block;
    padding: 2.75px 12.5px;
    text-decoration: none;
    cursor: pointer;
    color: inherit;
`

const HeaderCss = css`
	position: absolute;
	top: 0;
    display: flex;
	justify-content: center;
	background: inherit;
    color: #ffffff;
	width: 100%;
    z-index: 1;
    
    ${mediaQuery("mobile")} {
        position: relative;
    }
`

const Header = ({ siteTitle }) => (
    <header css={HeaderCss}>
        <HeaderContainer>
            <HeaderElement>
                <h1
                    css={css`
                        margin: 0;
                        text-align: center;
                    `}
                >
                    {siteTitle}
                </h1>
            </HeaderElement>
            <HeaderElement>
                <HeaderNav>
                    <Link to="/" css={HeaderNavLinkCss}>
                        Home
                    </Link>
                    <Link to="/menu" css={HeaderNavLinkCss}>
                        Our Menu
                    </Link>
                    <Link to="/promos" css={HeaderNavLinkCss}>
                        Promos
                    </Link>
                    <Link to="/about" css={HeaderNavLinkCss}>
                        About Us
                    </Link>
                </HeaderNav>
            </HeaderElement>
        </HeaderContainer>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
