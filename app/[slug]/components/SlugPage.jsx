"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Client, Databases, Query } from "appwrite";
import "./SlugPage.css";

const SlugPage = () => {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = new Client();
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66119b0b4242be90dfe0");

    const fetchData = async () => {
      try {
        const databases = new Databases(client);
        const response = await databases.listDocuments(
          "66119d55452d9f051ed9",
          "66119d5f63c467350a5b",
          [Query.equal("slug", slug)]
        );
        if (response.documents.length > 0) {
          setBlogData(response.documents[0]);
        } else {
          console.log("No document found for the given slug.");
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
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: blogData.content }}
            />
          </div>
        </>
      )}
      {!loading && (
        <div className="likes">
          <button className="likes_button ">Like 💓</button>
        </div>
      )}
    </div>
  );
};

export default SlugPage;
