"use client";

import {fadeInUp, staggerChildren} from "@/utils/helpers/framer-motion-helper";
import {motion} from "framer-motion";
import {ArrowRight, ListTodo, PieChart, TrendingUp} from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent">
            Master Your Money & Tasks
            <br />
            <span className="text-white">All in One Place</span>
          </h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
          >
            Take control of your finances and productivity with ExpenseFlow. Track expenses, manage
            tasks, and achieve your goals with our all-in-one solution.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-4 sm:gap-x-6"
          >
            <Link
              href={"sign-up"}
              className="w-full sm:w-auto bg-white text-black px-6 py-2 rounded hover:bg-neutral-200 transition-colors flex items-center justify-center gap-x-2"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* <Link  className="w-full sm:w-auto bg-black border border-neutral-800 text-white px-6 py-2 rounded hover:bg-neutral-800 transition-colors">
              View Demo
            </Link> */}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {/* Features highlight */}
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <PieChart className="h-5 w-5 text-primary" />
              <span>Smart Expense Tracking</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <ListTodo className="h-5 w-5 text-primary" />
              <span>Task Management</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Financial Insights</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
