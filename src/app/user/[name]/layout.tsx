"use client";
import "./styles.css";
import {sidebarStore} from "@/store/sidebarStore";
import {Sidebar} from "./components/Sidebar";

export default function RootLayout({children}: {children: React.ReactNode}) {
  const {isCollapsed} = sidebarStore();

  return (
    <div className="">
      <div className="flex">
        <Sidebar />
        <main className={`${isCollapsed ? "lg:ml-20" : "lg:ml-64"} flex-1 h-screen`}>
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}
