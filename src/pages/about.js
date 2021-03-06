import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ImageBanner from "./../components/banner/image-banner/image-banner";
import Snapshot from "./../components/snapshot/snapshot";
import { SiebelSnapshotData, BuildingSnapshotData, faqConfiguration, peopleGridData, directorSnapshotData, alumniGridData } from "./../content/about";
import LinkDrawer from "./../components/link-drawer/link-drawer";
import PeopleGrid from "./../components/grids/people-grid";
import TextSplit from "./../components/grids/text-split";
import AnchorWrapper from "./../components/anchor-wrapper";


const AboutPage = () => (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>SCD / About</title>
    </Helmet>
    <Layout activePage="about">
        <ImageBanner page="about"/>
          <div className="scd-cw-75">
            <TextSplit left={<h1 className="serif">What is SCD?</h1>} right={<><p className="serif">Our mission at the Siebel Center for Design is to foster multidisciplinary collaborations across campus, using design thinking as an approach to promote human-centered design and mandated quick iterations.</p><p className="serif">At SCD, we have a hard-working, collaborative team of individuals that help guide our mission. Though we are waiting for our BRAND NEW building to be built, we are piloting many initiatives in order to bring awareness to what SCD does to campus. </p></>}/>
            <Snapshot shape="square" data={directorSnapshotData}/>
            <hr className="invisible"/>
            <AnchorWrapper anchor={`team`}>
              <PeopleGrid data={peopleGridData}/>
            </AnchorWrapper>
            <AnchorWrapper title="SCD Alumni">
              <PeopleGrid special="only-two" data={alumniGridData}/>
            </AnchorWrapper>
            <Snapshot data={SiebelSnapshotData} shape="square"/>
            <Snapshot data={BuildingSnapshotData}/>
            <LinkDrawer anchor={`faq`} title={`Frequently Asked Questions`} options={faqConfiguration}/>
          </div>
    </Layout>
    </>
)

export default AboutPage
