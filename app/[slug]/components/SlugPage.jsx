"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Client, Databases, Query } from "appwrite";
import Markdown from "react-markdown";
import "./SlugPage.css";
import Footer from "@/app/components/Footer/Footer";

const SlugPage = () => {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notnull, setNotNull] = useState(false);

  useEffect(() => {
    const client = new Client();
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(process.env.NEXT_PUBLIC_CLOUD_ID);

    const fetchData = async () => {
      try {
        const databases = new Databases(client);
        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_COLLECTION_ID,
          [Query.equal("slug", slug)]
        );
        if (response.documents.length > 0) {
          setBlogData(response.documents[0]);
        } else {
          console.log("No document found for the given slug.");
          setNotNull(true);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && blogData && (
        <>
          <div className="article">
            <h1>{blogData.title}</h1>
            <div className="content">
              <Markdown className="foo">{blogData.content}</Markdown>
            </div>
          </div>
        </>
      )}
      {notnull === true && (
        <h1 className="my-10 text-white font-bold text-2xl mx-10">
          There are no documents with this provided slug.
        </h1>
      )}
      {!loading && notnull === false && (
        <>
          <div className="likes">
            <button className="likes_button ">Like 💓</button>
          </div>
          <Footer loaded={true} fixed={false}></Footer>
        </>
      )}
    </div>
  );
};

export default SlugPage;
