import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import css from "@emotion/css"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <div
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 100px;
            `}
        >
            <h1
                css={css`
                    background-color: #aa3333;
                `}
            >
                NOT FOUND
            </h1>
            <p
                css={css`
                    background-color: #aa3333;
                `}
            >
                You just hit a route that doesn&#39;t exist... the sadness.
            </p>
        </div>
    </Layout>
)

export default NotFoundPage
