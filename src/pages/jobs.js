import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ImageBanner from "./../components/banner/image-banner/image-banner";
import TextSplit from "./../components/grids/text-split";
import { jobData } from "./../content/jobs";

const ConnectPage = () => (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>SCD / Jobs</title>
    </Helmet>
    <Layout>
        <ImageBanner page="jobs" title="join the SCD squad!"/>
        <div className="scd-cw-75">
            <TextSplit left={<h1 className="serif">Check out our Job Openings!</h1>} right={<p className="serif">Do YOU heart SCD so much that you want to join our team? We have several job opportunities open at this time, and are always adding more! Check back later if you don’t see a position that fits your specific talents.</p>}/>
            <hr/>
            {jobData.map((listing, key) => {

                if (!listing.comingSoon) return (
                <TextSplit left={<><h2 className="job-listing">{listing.titlePosition}</h2><h1 className="job-listing">{listing.titleOps}</h1></>} right={<p className="serif">{listing.description} <br/><br/> <a href={listing.link}>Full job description and application here.</a></p>}/>
                )

                else return (
                    <TextSplit left={<><h2 className="job-listing">{listing.titlePosition}</h2><h1 className="job-listing">{listing.titleOps}</h1></>} right={<p className="serif">{listing.description} <br/><br/> Coming Soon!</p>}/>
                )
            })}
        </div>
    </Layout>
    </>
)

export default ConnectPage
