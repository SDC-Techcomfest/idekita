/** The home route providing home components, right and left sidebar and the nav search */

import { useContext, useState } from "react";
import { UserContext } from "@modules/contexter";
import {
  getDocs,
  orderBy,
  limit,
  startAfter,
  collectionGroup,
  db,
  query,
} from "@modules/firebaser";
import { docToJSON } from "@modules/helper";
import { LeftSidebar, RightSidebar, Feed, Spinner } from "@modules/composer";
import { Meta, toast } from "@modules/composer";
import { emoji } from "@modules/emojier";

const LIMIT = 10;

export async function getServerSideProps(context) {
  try {
    const postsQuery = query(
      collectionGroup(db, "posts"),
      orderBy("dateUpdated", "desc"),
      limit(LIMIT)
    );
    const postsFetched = (await getDocs(postsQuery)).docs.map(docToJSON);

    return {
      props: { postsFetched },
    };
  } catch (error) {
    console.log(error);
  }
}

export default function Sky({ postsFetched }) {
  const { username } = useContext(UserContext);
  const [posts, setPosts] = useState(postsFetched);
  const [loading, setLoading] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false);

  const getMorePosts = async () => {
    try {
      setLoading(true);
      const lastPost = posts[posts.length - 1];

      const newPostsQuery = query(
        collectionGroup(db, "posts"),
        orderBy("dateCreated", "desc"),
        startAfter(lastPost.dateCreated),
        limit(LIMIT)
      );

      const newPosts = (await getDocs(newPostsQuery)).docs.map(docToJSON);

      setPosts(posts.concat(newPosts));
      setLoading(false);

      if (newPosts.length < LIMIT) {
        setPostsEnd(true);
      }
    } catch (error) {
      console.log(error);
      toast.error("Terjadi kesalahan, coba kembali nanti");
    }
  };

  return (
    <>
      <Meta
        title={`iDekita ${emoji.buku} Temukan Ide-ide Kreatif`}
        description="Cari, temukan, dan publikasikan ide-ide kreatif bersama dengan Idekiawan di seluruh Indonesia demi masa depan yang lebih baik lagi"
      />
      <div className="big-heading">
        <h1>
          <span className="text-fuchsia-500">#Langit</span> ide
        </h1>
      </div>
      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-7 my-6">
        <LeftSidebar />

        <div className="col-span-2">
          {posts.length !== 0 && (
            <>
              <div className="mb-4">
                <a href="#" className="li-top-menu font-bold">
                  Terbaru
                </a>
                <a href="#" className="li-top-menu">
                  Jelajah
                </a>
              </div>

              <Feed posts={posts} idekiawan={false} />

              {!loading && !postsEnd && (
                <div className="flex justify-center">
                  <button
                    onClick={getMorePosts}
                    className="btn-fuchsia rounded-full hover:bg-fuchsia-600"
                  >
                    Lihat lebih banyak
                  </button>
                </div>
              )}

              <Spinner show={loading} />

              {postsEnd && (
                <p className="text-center">
                  Kamu telah mencapai batas akhir eksplorasi
                </p>
              )}
            </>
          )}
          {posts.length === 0 && (
            <h1 className="article-prose text-center">
              Tidak ada ide untuk saat ini
            </h1>
          )}
        </div>
        <RightSidebar username={username} />
      </div>
    </>
  );
}
