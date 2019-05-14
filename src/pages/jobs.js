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
    <Layout activePage="jobs">
        <ImageBanner page="jobs" title="join the SCD squad!"/>
        <div className="scd-cw-75">
            <TextSplit left={<h1 className="serif">Check out our Job Openings!</h1>} right={<p className="serif">Do YOU ❤️ SCD so much that you want to join our team? We are in the process of growing our team, so keep checking back for new openings!</p>}/>
            <TextSplit left={<h1 className="serif">Looking for a student internship?</h1>} right={<p className="serif">If you are interested in working with SCD in some capacity but don't see any internship openings listed, please send us an email at <a href="mailto: designcenter@illinois.edu">designcenter@illinois.edu</a> so we can keep you in mind for future openings!</p>}/>
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
