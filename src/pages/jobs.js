import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ImageBanner from "./../components/banner/image-banner/image-banner";
import TiberianGrid from "./../components/grids/tiberian-grid";
import { tiberianGridData } from "./../content/jobs"

const ConnectPage = () => (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>SCD / Jobs</title>
    </Helmet>
    <Layout>
        <ImageBanner page="jobs" title="join the SCD squad!"/>
        <div className="scd-cw-75">
            <TiberianGrid data={tiberianGridData}/>
        </div>
    </Layout>
    </>
)

export default ConnectPage
