import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro";
import Second from "../components/second";
import Third from "../components/third";
import Location from "../components/location";
import ActionCall from "../components/action-call";

const IndexPage = () => <Layout>
	<Intro />
	<Second />
	<Third />
	<Location />
	<ActionCall />
</Layout>

export default IndexPage
