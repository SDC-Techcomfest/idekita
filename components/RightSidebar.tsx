import React from "react";

export default function RightSidebar() {
  const menuList = [
    {
      icon: "🏠",
      name: "#Beranda",
      route: "/langit-ide",
    },
    {
      icon: "🙍",
      name: "#Profil",
      route: "/",
    },
    {
      icon: "💡",
      name: "#Buat Ide",
      route: "/",
    },
    {
      icon: "📕",
      name: "#Terminologi",
      route: "/",
    },
    {
      icon: "📐",
      name: "#Kebijakan",
      route: "/",
    },
    {
      icon: "🚪",
      name: "#Keluar",
      route: "/bergabung",
    },
  ];

  const Menus = () => (
    <>
      {menuList.map((menu) => (
        <React.Fragment key={menu.name}>
          <li className={menu.icon !== "🚪" ? "pb-3 hover:text-fuchsia-500 hover:scale-110 b-transition hover:rotate-2" : "pb-3 text-fuchsia-500 b-transition hover:scale-110 hover:rotate-2"}>
            <a href={menu.route}>
              <div className="flex">
                <div className="flex-none w-8">{menu.icon}</div>
                <div className="flex-1 w-64">{menu.name}</div>
              </div>
            </a>
          </li>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className="relative md:block hidden">
      <ul className="sticky top-24 text-lg font-semibold ">
        <Menus />
      </ul>
    </div>
  );
}
