import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ImageBanner from "./../components/banner/image-banner/image-banner";

import TextSplit from "./../components/grids/text-split";
import SocialLinks from './../components/social-links/social-links';
import Snapshot from "./../components/snapshot/snapshot";


const leftColumnDefinition = 
    <>
        <p class="serif">
        Check out our <a href="https://us19.campaign-archive.com/home/?u=fcccbe1307680e3038edbfb62&id=b41078f80a">past newsletters</a>
        </p>
        <p class="serif">
        Wanna chat? Shoot us an email at <a href="mailto: designcenter@illinois.edu">designcenter@illinois.edu</a>
        </p>
        <p class="serif">
        Connect with us over social media
        <SocialLinks theme="black"/>
        </p>
    </>;



const rightColumnDefinition = 
    <>
        <p class="serif">
        We always have events and activities happening, so sign up for our <a href="https://illinois.us19.list-manage.com/subscribe?u=fcccbe1307680e3038edbfb62&id=b41078f80a">Newsletter</a> and follow us on social media to stay up-to-date on all things SCD!
        </p>
        <p class="serif">
        Are you a professor? Interested in integrating design thinking into your courses? Send us an email <a href="mailto: designcenter@illinois.edu">here</a>!
        </p>
        <p class="serif">
        Check out our <a href="/jobs">employment opportunities</a> in the Jobs page or read our FAQ <a href="/jobs">here</a>!
        </p>
    </>;

const donateSnapshotData = {
    heading: "Donate to SCD",
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
    <Layout>
        <ImageBanner page="connect" title="connect with us!"/>
        <div className="scd-cw-75">
            <h1 className="serif">Stay Up-to-Date on All Things SCD</h1>
            <TextSplit left={leftColumnDefinition} right={rightColumnDefinition}/>
            <Snapshot data={donateSnapshotData}/>
        </div>
    </Layout>
    </>
)

export default ConnectPage
