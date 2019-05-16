import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import Layout from "../components/layout"
import { graphql } from "gatsby"

const MenuSection = styled.section`
    width: 100%;
    padding: 20px;
    padding-top: 120px;
`

const MenuTitle = styled.h1`
    font-size: 3em;
    text-align: center;
    margin-bottom: 5px;
    background-color: #aa3333;
`

const MenuSubtitle = styled.h2`
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 5px;
    font-weight: 500;
    background-color: #aa3333;
`

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`

const MenuItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    max-width: 700px;
    margin-bottom: 10px;

    background-color: white;
`

const MenuItemImage = styled.div`
    width: 150px;
    height: 150px;

    & img {
        border-radius: 50%;
        display: block;
    }
`

const MenuItemContent = styled.div`
    color: black;
    padding-top: 20px;
    padding-left: 30px;

    & h2 {
        margin-bottom: 5px;
    }

    & h3 {
        color: rgb(66, 62, 62);
        margin-bottom: 10px;
    }

    & p {
        font-size: 0.9em;
        margin: 0;
    }
`

const MenuPage = ({ data }) => {
    const menu = data.allMenuJson.edges[0].node.menu
    return (
        <Layout>
            <MenuSection>
                <MenuTitle>Our Menu</MenuTitle>
                <MenuSubtitle>
                    Good, unlimited food. And some extras too!
                </MenuSubtitle>
                <MenuContainer>
                    {menu.map((value, index) => (
                        <MenuItem key={index}>
                            <MenuItemImage>
                                <Img
                                    fixed={
                                        value.image.src.childImageSharp.fixed
                                    }
                                    alt={`Image`}
                                />
                            </MenuItemImage>
                            <MenuItemContent>
                                <h2>{value.name}</h2>
                                <h3>{value.price}</h3>
                                <p>{value.description}</p>
                            </MenuItemContent>
                        </MenuItem>
                    ))}
                </MenuContainer>
            </MenuSection>
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        allMenuJson {
            edges {
                node {
                    menu {
                        name
                        price
                        description
                        image {
                            src {
                                childImageSharp {
                                    fixed(width: 150, height: 150) {
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default MenuPage
