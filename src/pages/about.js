import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ImageBanner from "./../components/banner/image-banner/image-banner";
import Snapshot from "./../components/snapshot/snapshot";
import { SiebelSnapshotData, BuildingSnapshotData, faqConfiguration, peopleGridData } from "./../content/about";

import LinkDrawer from "./../components/link-drawer/link-drawer";
import PeopleGrid from "./../components/grids/people-grid";
import TextSplit from "./../components/grids/text-split";


const AboutPage = () => (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>SCD / About</title>
    </Helmet>
    <Layout>
        <ImageBanner page="about"/>
          <div className="scd-cw-75">
            <TextSplit left={<h1 className="serif">What is SCD?</h1>} right={<><p className="serif">Our mission at the Siebel Center for Design is to foster multidisciplinary collaborations across campus, using design thinking as an approach to promote human-centered design and mandated quick iterations.</p><p className="serif">At SCD, we have a hard-working, collaborative team of individuals that help guide our mission. Though we are waiting for our BRAND NEW building to be built, we are piloting many initiatives in order to bring awareness to what SCD does to campus. </p></>}/>
            <PeopleGrid data={peopleGridData} anchor={"team"}/>
            <Snapshot data={SiebelSnapshotData}/>
            <Snapshot data={BuildingSnapshotData}/>
            <LinkDrawer anchor={`faq`} title={`Frequently Asked Questions`} options={faqConfiguration}/>
          </div>
    </Layout>
    </>
)

export default AboutPage
