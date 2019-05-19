import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"

import { mediaQuery } from "../components/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PromoSection = styled.section`
    width: 100%;
    padding: 20px;
    padding-top: 120px;

    ${mediaQuery("mobile")} {
        padding-top: 20px;
    }
`

const PromoTitle = styled.h1`
    font-size: 3em;
    text-align: center;
    margin-bottom: 5px;
    background-color: #aa3333;
`

const PromoSubtitle = styled.h2`
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 5px;
    font-weight: 500;
    background-color: #aa3333;
`

const PromoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`

const PromoItem = styled.div`
    display: flex;
    padding: 20px;
    max-width: 700px;
    margin-bottom: 10px;
    background-color: white;

    ${mediaQuery("mobile")} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
    }
`

const PromoItemContent = styled.div`
    color: black;

    & h2 {
        margin-bottom: 5px;

        a {
            color: inherit;
        }
    }

    & h3 {
        color: rgb(66, 62, 62);
        margin-bottom: 10px;
    }

    & p {
        font-size: 0.9em;
        margin: 0;
    }

    ${mediaQuery("mobile")} {
        padding-left: 0px;
    }
`

class Promos extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title={siteTitle} />
                <PromoSection>
                    <PromoTitle>Our Promos</PromoTitle>
                    <PromoSubtitle>
                        Fan of our food? Check out how you can dine at our place
                        more!
                    </PromoSubtitle>
                    <PromoContainer>
                        {posts.map(({ node }) => {
                            const title =
                                node.frontmatter.title || "Antonio's Promo"
                            const date = node.frontmatter.date || "--"
                            return (
                                <PromoItem key={node.frontmatter.path}>
                                    <PromoItemContent>
                                        <h2><Link to={node.frontmatter.path}>{title}</Link></h2>
                                        <h3>{date}</h3>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: node.excerpt,
                                            }}
                                        />
                                    </PromoItemContent>
                                </PromoItem>
                            )
                        })}
                    </PromoContainer>
                </PromoSection>
            </Layout>
        )
    }
}

export default Promos

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt (pruneLength: 190)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        path
                    }
                }
            }
        }
    }
`
