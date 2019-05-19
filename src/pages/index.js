import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Second from "../components/second"
import Third from "../components/third"
import Location from "../components/location"
import ActionCall from "../components/action-call"
import NotifContext from "../components/contexts/notifContext";

const IndexPage = ({ data }) => (
    <Layout>
		<SEO title={data.site.siteMetadata.title} />
		<NotifContext.Consumer>
			{ ({ notifySuccess, notifyError }) => (
				<>
					<Intro />
					<Second />
					<Third />
					<Location />
					<ActionCall notifySuccess={notifySuccess} notifyError={notifyError} />
				</>
			)}
		</NotifContext.Consumer>
    </Layout>
)

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`

export default IndexPage
