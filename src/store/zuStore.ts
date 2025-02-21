import {StateType} from "@/types";
import {create} from "zustand";
import {persist} from "zustand/middleware";

export const stateStore = create(
  persist<StateType>(
    (set) => ({
      currency: "PKR",
      setCurrency: (currency: string) => set({currency}),
    }),
    {
      name: "currency-storage", // unique name
    },
  ),
);
