import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { LinkTo, toast } from "@modules/composer";
import { formatDate, minutesToRead } from "@modules/helper";
import { useRouter } from "next/router";
import { useState } from "react";

export default function IdeaContent({ post, userData }) {
  const publishedDate = formatDate(post.dateUpdated);
  const readTime = minutesToRead(post.content);
  const router = useRouter();

  const [cloud, setCloud] = useState(0);

  const ideaMenuList = [
    {
      name: "#Dukung",
      icon: "✊",
      onclick: () => {
        setCloud(cloud + 1);
        toast.success("Berhasil memberikan dukungan 💪");
      },
    },
    {
      name: "#Bagikan",
      icon: "🖐",
      onclick: () => router.push("#idea-header"),
    },
    {
      name: "#Kirim Email",
      icon: "🤝",
      onclick: () =>
        router.push(
          encodeURI(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${userData.email}&su=iDekita - ${post.title}&body=Hai, ${userData.displayName} 👋! Sehubungan dengan ide yang Anda publikasi di tautan https://idekita.id/${post.username}/${post.slug}. Saya bermaksud untuk berdiskusi lebih jauh mengenai hal itu. `
          )
        ),
    },
    {
      name: "#Kembali",
      icon: "👈",
      onclick: () => router.back(),
    },
  ];

  const ideaMenu = () =>
    ideaMenuList.map((menu) => {
      return (
        <div
          key={menu.name}
          className="flex-1 cursor-pointer rounded-tr-full border-l-4 hover:translate-x-10 transition border-dashed border-fuchsia-500 rounded-br-full  bg-white  rounded-md content-center"
        >
          <div
            onClick={menu.onclick}
            className="p-5 flex active:bg-fuchsia-500 active:text-white rounded-br-full rounded-tr-full"
          >
            <div className="flex flex-1 text-lg font-bold text-fuchsia-500 active:text-white select-none">
              {menu.name}
            </div>
            <div className="flex-none w-8 text-center bg-gray-100 text-lg rounded-full p-[2px] prose justify-self-end select-none">
              {menu.icon}
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="flex my-5 relative">
      <div className="flex-auto w-[70%] bg-white rounded-md border border-gray-300 px-8 py-16">
        <article className="prose prose-a:text-fuchsia-500 prose-headings:text-fuchsia-500 lg:prose-lg mx-auto prose-a:underline prose-a:decoration-fuchsia-500">
          <h1 id="idea-header" className="scroll-mt-36">
            {post.title}
          </h1>
          <h5>
            📅 {publishedDate} • 📝
            <LinkTo href={`/${post.username}`}>{userData.displayName}</LinkTo> •
            ⌛ {readTime} menit membaca
          </h5>

          <hr />
          <blockquote>
            <b>Latar belakang: </b> {post.background}
          </blockquote>
          <ReactMarkdown children={post.content} remarkPlugins={[remarkGfm]} />
        </article>
      </div>

      <div className="flex-auto h-[100%] sticky top-24 space-y-2 rounded-md border flex flex-col">
        <div className="flex-1 font-bold text-3xl  p-5 rounded-md content-center">
          <button className="focus:animate-bounce duration-1000 transition select-none">
            ☁ {cloud}
          </button>
        </div>

        {ideaMenu()}
      </div>
    </div>
  );
}
