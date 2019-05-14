import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ImageBanner from "./../components/banner/image-banner/image-banner";
import { Link } from "gatsby";
import TextSplit from "./../components/grids/text-split";
import SocialLinks from './../components/social-links/social-links';
import Snapshot from "./../components/snapshot/snapshot";


const leftColumnDefinition = 
    <>
        <p className="serif">
        Check out our <a target="_blank" rel="noopener noreferrer" href="https://us19.campaign-archive.com/home/?u=fcccbe1307680e3038edbfb62&id=b41078f80a">past newsletters.</a>
        </p>
        <p className="serif">
        Wanna chat? Shoot us an email at <a href="mailto: designcenter@illinois.edu">designcenter@illinois.edu</a>.
        </p>
        <p className="serif no-space-bottom">
        Connect with us over social media:
        </p>
        <SocialLinks theme="black"/>
    </>;



const rightColumnDefinition = 
    <>
        <ul>
            <li>
                <h3 className="serif-bullet">Stay Connected</h3>
                <p className="serif">
                    We always have events and activities happening, so sign up for our <a target="_blank" rel="noopener noreferrer" href="https://illinois.us19.list-manage.com/subscribe?u=fcccbe1307680e3038edbfb62&id=b41078f80a">Newsletter</a> and follow us on social media to stay up-to-date on all things SCD!
                </p>
                <p className="serif">
                    Make sure you also check out our <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/SCDillinois/">Facebook page</a> for all our upcoming events.
                </p>
            </li>
            <li>
                <h3 className="serif-bullet">Engage with Us</h3>
                <p className="serif">
                    If you’re a professor on campus and feel that design thinking would be a great addition to your course, send us an email at <a href="mailto: designcenter@illinois.edu" >designcenter@illinois.edu</a>! We’re looking to work with as many courses as we can.
                </p>
                <p className="serif">
                    If you are interested in sponsoring or being involved in a project and are not part of the University of Illinois, send us an email at <a href="mailto: designcenter@illinois.edu" >designcenter@illinois.edu</a>.
                </p>
                <p className="serif">
                If you would like to connect with Director Rachel Switzky, please email her at <a href="mailto: rswitzky@illinois.edu" >rswitzky@illinois.edu</a>.
                </p>
            </li>
            <li>
                <h3 className="serif-bullet">Work with Us</h3>
                <p className="serif">
                    If you are looking for employment opportunities at SCD, head over to our <a href="/jobs">Jobs page</a> to see what openings we have!
                </p>
            </li>
        </ul>
    </>;

const donateSnapshotData = {
    heading: "Donate to SCD",
    anchor: "donate",
    title: "",
    body: <>
            <p className="serif">
            If you would like to donate to SCD, first off, THANK YOU!!
            </p>
            <p className="serif">
            Please, <a href="mailto: designcenter@illinois.edu">send us an email</a> and we will work with you to determine what your donation will be used for!
            </p>
          </>,
    mainImage: "connect1",
    images: []
  }


const ConnectPage = () => (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>SCD / Connect</title>
    </Helmet>
    <Layout activePage="connect">
        <ImageBanner page="connect" title="connect with us!"/>
        <div className="scd-cw-75">
            <h1 className="serif">Stay Up-to-Date on All Things SCD</h1>
            <TextSplit left={leftColumnDefinition} right={rightColumnDefinition}/>
        </div>
    </Layout>
    </>
)

export default ConnectPage
