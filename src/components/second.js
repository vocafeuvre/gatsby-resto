import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

import {
    SubHero,
    SubHeroContent,
    SubHeroContentDetail,
    SubHeroContentTitle,
    mediaQuery
} from "./styled"

const Second = () => (
    <StaticQuery
        query={secondQuery}
        render={data => {
            const fluidImage = data.secondImage.childImageSharp.fluid
            return (
                <SubHero
                    css={css`
                        background-color: #ffffff;
                        color: #000000;
                    `}
                >
                    <SubHeroContent>
                        <div
                            css={css`
                                display: flex;
                                flex-direction: column;
                            `}
                        >
                            <SubHeroContentTitle>
                                Good, Unlimited Food
                            </SubHeroContentTitle>
                            <SubHeroContentDetail>
                                Authentic Italian pasta in our signature tomato
                                marinara sauce is served along a side of
                                piping-hot chicken wings flavored in either
                                Parmesan or Buffalo! Best of all, you get to
                                have unlimited servings!
                            </SubHeroContentDetail>
                        </div>
                    </SubHeroContent>
                    <SubHeroContent>
                        <div
                            css={css`
                                border: 10px solid white;
                                box-shadow: 3px 3px 3px 3px #ccc;
                                height: 230px;
                                width: 390px;

                                ${mediaQuery("mobile")} {
                                    height: 180px;
                                    width: 300px;
                                }
                            `}
                        >
                            <Img fluid={fluidImage} style={{
                                display: "block"
                            }}/>
                        </div>
                    </SubHeroContent>
                </SubHero>
            )
        }}
    />
)

const secondQuery = graphql`
    query SecondQuery {
        secondImage: file(relativePath: { eq: "pasta-sub.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default Second
