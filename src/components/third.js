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

const Third = () => (
    <StaticQuery
        query={thirdQuery}
        render={data => {
            const fixedImage = data.thirdImage.childImageSharp.fixed
            return (
                <SubHero>
                    <SubHeroContent>
                        <div
                            css={css`
                                border: 10px solid white;
                            `}
                        >
                            <Img
                                fixed={fixedImage}
                                style={{
                                    display: "block",
                                }}
                            />
                        </div>
                    </SubHeroContent>
                    <SubHeroContent>
                        <div
                            css={css`
                                display: flex;
                                flex-direction: column;
                                background-color: #aa3333;
                            `}
                        >
                            <SubHeroContentTitle>
                                Eat It Here, or Dine Away
                            </SubHeroContentTitle>
                            <SubHeroContentDetail>
                                Table for two? Or maybe a trio won't do? We can
                                accommodate groups of all sizes below 30,
                                provided that we still have enough free seats!
                                Don't worry though, we've got food packages
                                ready for take out that'll still make you feel
                                your money's worth!
                            </SubHeroContentDetail>
                        </div>
                    </SubHeroContent>
                </SubHero>
            )
        }}
    />
)

const thirdQuery = graphql`
    query ThirdQuery {
        thirdImage: file(relativePath: { eq: "happy-resto.jpg" }) {
            childImageSharp {
                fixed(width: 400, height: 300) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default Third
