import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

import {
    Hero,
    HeroTitle,
    HeroSubtitle,
    HeroContent,
    mediaQuery,
} from "./styled"

const Intro = () => (
    <StaticQuery
        query={introQuery}
        render={data => {
            const fluidImage = data.introImage.childImageSharp.fluid
            console.log(mediaQuery("mobile"))
            return (
                <Hero
                    css={css`
                        padding-top: 80px;
                        color: #ffffff;
                    `}
                >
                    <HeroTitle
                        css={css`
                            background-color: #aa3333;
                        `}
                    >
                        Unlimited Chicken and Pasta for only PHP 299!
                    </HeroTitle>
                    <HeroSubtitle
                        css={css`
                            background-color: #aa3333;
                        `}
                    >
                        Sumptuous authentic Italian pasta paired with
                        buffalo-hot chicken wings!
                    </HeroSubtitle>
                    <HeroContent>
                        <div
                            css={css`
                                border: 10px solid white;

                                ${mediaQuery("tablet")} {
                                    height: 300px;
                                    width: 440px;
                                }

                                ${mediaQuery("mobile")} {
                                    height: 205px;
                                    width: 300px;
                                }

                                height: 460px;
                                width: 680px;
                            `}
                        >
                            <Img fluid={fluidImage} />
                        </div>
                    </HeroContent>
                </Hero>
            )
        }}
    />
)

const introQuery = graphql`
    query IntroQuery {
        introImage: file(relativePath: { eq: "pasta-intro.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default Intro
