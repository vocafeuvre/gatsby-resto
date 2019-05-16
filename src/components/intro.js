import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

import { Hero, HeroTitle, HeroSubtitle, HeroContent } from "./styled"

const Intro = () => (
    <StaticQuery
        query={introQuery}
        render={data => {
            const fluidImage = data.introImage.childImageSharp.fluid
            return (
                <Hero
                    css={css`
                        padding-top: 140px;
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
                            `}
                        >
                            <Img
                                fluid={fluidImage}
                                style={{
                                    height: "400px",
                                    width: "700px",
                                }}
                            />
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
