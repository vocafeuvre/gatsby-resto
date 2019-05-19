import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { mediaQuery } from "../components/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PromoPageSection = styled.section`
    width: 100%;
    padding: 20px;
    padding-top: 120px;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${mediaQuery("mobile")} {
        padding: 20px;
    }
`

const PromoPageTitle = styled.h1`
    font-size: 3em;
    text-align: center;
    margin-bottom: 5px;
    background-color: #aa3333;
`

const PromoPageSubtitle = styled.h2`
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 5px;
    font-weight: 500;
    background-color: #aa3333;
`

const PromoPageArticle = styled.article`
    margin-top: 30px;
    max-width: 600px;
    width: 60%;
    text-align: left;
    background-color: #aa3333;

    ${mediaQuery("mobile")} {
        width: 100%;
    }
`

class PromoPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <PromoPageSection>
            <PromoPageTitle>{post.frontmatter.title}</PromoPageTitle>
            <PromoPageSubtitle>
                {post.frontmatter.date}
            </PromoPageSubtitle>
            <PromoPageArticle dangerouslySetInnerHTML={{ __html: post.html }} />
        </PromoPageSection>
      </Layout>
    )
  }
}

export default PromoPostTemplate

export const pageQuery = graphql`
  query PromoByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
      }
    }
  }
`
