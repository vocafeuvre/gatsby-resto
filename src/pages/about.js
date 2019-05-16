import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"

const AboutSection = styled.section`
    width: 100%;
    padding: 20px;
    padding-top: 120px;
    padding-bottom: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const AboutTitle = styled.h1`
    font-size: 3em;
    text-align: center;
    margin-bottom: 5px;
    background-color: #aa3333;
`

const AboutSubtitle = styled.h2`
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 5px;
    font-weight: 500;
    background-color: #aa3333;
`

const AboutArticle = styled.article`
    margin-top: 30px;
    max-width: 500px;
    width: 50%;
    background-color: #aa3333;
    text-align: center;
`

const IndexPage = ({ data }) => (
    <Layout>
        <AboutSection>
            <AboutTitle>{data.site.siteMetadata.title}</AboutTitle>
            <AboutSubtitle>
                Authentic Italian pasta and chicken wings
            </AboutSubtitle>
            <AboutArticle>
                <p>{data.site.siteMetadata.description}</p>
            </AboutArticle>
        </AboutSection>
    </Layout>
)

export const pageQuery = graphql`
    query SiteQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`

export default IndexPage
