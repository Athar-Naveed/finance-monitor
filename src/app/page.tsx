"use client";

import HomePage from "@/components/HomePage";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="ExpenseFlow - Master Your Money & Tasks All in One Place"
        description="Track expenses, manage tasks, and achieve your financial goals with ExpenseFlow. Smart expense tracking, task management, and financial insights in one solution."
        canonical="https://expenseflow.com"
        openGraph={{
          url: "https://expenseflow.com",
          title: "ExpenseFlow - Master Your Money & Tasks",
          description:
            "All-in-one solution for expense tracking and task management",
          images: [
            {
              url: "https://expenseflow.com/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "ExpenseFlow Dashboard",
            },
          ],
        }}
      />

      <HomePage />
    </>
  );
}
