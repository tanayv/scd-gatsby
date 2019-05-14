import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ImageBanner from "../components/banner/image-banner/image-banner";
import Snapshot from "./../components/snapshot/snapshot";


/** Content */
import { storySnapshotData } from "./../content/stories";


const StoriesPage = () => (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>SCD / Stories</title>
    </Helmet>
    <Layout activePage="stories">
        <ImageBanner page="stories" title="stories past, present, and future!"/>
        <div className="scd-cw-75">
            <h1 className="serif" align="center">As designers, we are storytellers.</h1>
            <h3 className="serif">{`Here at SCD, we have a LOT going on! From courses to coffee hours and everything in between, we have many stories to share about our experiences on campus. We thought that, rather than keep our adventures to ourselves, we should have a space where we can share them. Feel free to look around and explore our past, present, and future!
            `}</h3>
            <h1 className="serif">Event Snapshots</h1>
            {storySnapshotData.map((snapshot, key) => {
              return (
                <Snapshot data={snapshot} key={key}/>
              )
            })}
        </div>
    </Layout>
    </>
)

  

export default StoriesPage
