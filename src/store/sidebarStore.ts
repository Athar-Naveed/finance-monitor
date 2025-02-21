import {SidebarType} from "@/types";
import {create} from "zustand";
import {persist} from "zustand/middleware";

export const sidebarStore = create(
  persist<SidebarType>(
    (set) => ({
      isCollapsed: false,
      setIsCollapsed: () => set((state) => ({isCollapsed: !state.isCollapsed})),
    }),
    {
      name: "sidebar-storage", // unique name
    },
  ),
);
