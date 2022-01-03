import { useDocument } from "react-firebase-hooks/firestore";
import { toast } from "@modules/composer";
import { db, doc, writeBatch, increment } from "@modules/firebaser";
import { useContext } from "react";
import { UserContext } from "@modules/contexter";

export default function Cloud({ post, update }) {
  const { user } = useContext(UserContext);

  const cloudRef = doc(
    db,
    `users/${post.uid}/posts/${post.slug}/clouds`,
    user.uid
  );
  const postRef = doc(db, `users/${post.uid}/posts`, post.slug);
  const [cloudDoc] = useDocument(cloudRef);
  const addCloud = async () => {
    try {
      const uid = user.uid;
      const batch = writeBatch(db);

      batch.update(postRef, { cloud: increment(1) });
      batch.set(cloudRef, { uid });

      await batch.commit();
      update();
      toast.success("Berhasil memberikan dukungan 🥳");
    } catch (error) {
      console.log(error);
      toast.error("Terjadi kesalahan, silakan coba kembali");
    }
  };

  return (
    <>
      <div
        key="#Dukung"
        className={
          cloudDoc?.exists()
            ? "btn-idea-right bg-fuchsia-500 cursor-default"
            : "btn-idea-right bg-white cursor-pointer"
        }
      >
        <button
          onClick={addCloud}
          disabled={cloudDoc?.exists()}
          className="p-5 flex active:bg-fuchsia-500 active:outline-none w-full  rounded-br-full rounded-tr-full"
        >
          <div
            className={
              cloudDoc?.exists()
                ? "btn-idea-right-after text-white"
                : "btn-idea-right-after text-fuchsia-500 active:text-white"
            }
          >
            {cloudDoc?.exists() ? "#Didukung" : "#Dukung"}
          </div>
          <div className="btn-idea-icon">{"✊"}</div>
        </button>
      </div>
    </>
  );
}
