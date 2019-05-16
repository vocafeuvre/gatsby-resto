import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

import {
    SubHero,
    SubHeroContent,
    SubHeroContentDetail,
    SubHeroContentTitle,
} from "./styled"

const Second = () => (
    <StaticQuery
        query={secondQuery}
        render={data => {
            const fixedImage = data.secondImage.childImageSharp.fixed
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
                            `}
                        >
                            <Img fixed={fixedImage} style={{
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
                fixed(width: 400, height: 300) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default Second
