import React from "react"
import { StaticQuery, graphql } from "gatsby"
import GoogleMapReact from "google-map-react"
import { css } from "@emotion/core"

import { Hero, HeroTitle, HeroSubtitle, HeroContent } from "./styled"

const MapMarker = ({ text }) => (
    <div
        css={css`
            background-color: #aa3333;
            color: #ffffff;
            height: 1.9em;
            width: 150px;
            text-align: center;
            padding: 5px;
            border-radius: 10px;
            font-size: 1.6em;
        `}
    >
        {text}
    </div>
)

const Location = () => (
    <StaticQuery
        query={locationQuery}
        render={data => {
            const address = data.site.siteMetadata.location.address
            const latitude = data.site.siteMetadata.location.latitude
            const longitude = data.site.siteMetadata.location.longitude

            return (
                <Hero
                    css={css`
                        background-color: #ffffff;
                        color: #000000;
                    `}
                >
                    <HeroTitle>We're located right here!</HeroTitle>
                    <HeroSubtitle>{address}</HeroSubtitle>
                    <HeroContent>
                        <div
                            css={css`
                                border: 10px solid white;
                                box-shadow: 3px 3px 3px 3px #ccc;
                                height: 400px;
                                width: 700px;
                            `}
                        >
                            <GoogleMapReact
                                bootstrapURLKeys={{
                                    key: process.env.GATSBY_GOOGLE_MAP_KEY,
                                }}
                                defaultCenter={[latitude, longitude]}
                                defaultZoom={17}
                            >
                                <MapMarker
                                    lat={latitude}
                                    lng={longitude}
                                    text="Antonio's is here!"
                                />
                            </GoogleMapReact>
                        </div>
                    </HeroContent>
                </Hero>
            )
        }}
    />
)

const locationQuery = graphql`
    query LocationQuery {
        site {
            siteMetadata {
                location {
                    address
                    latitude
                    longitude
                }
            }
        }
    }
`

export default Location
