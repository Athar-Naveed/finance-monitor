"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {fadeInUp} from "@/utils/helpers/framer-motion-helper";
import {Eye, EyeOff, Mail, Lock, User} from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    )
    .required("Password is required"),
});

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (
    values: {
      name: string;
      email: string;
      password: string;
    },
    {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void},
  ) => {
    try {
      // Add registration logic here
      console.log(values);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up | ExpenseFlow</title>
        <meta
          name="description"
          content="Create your ExpenseFlow account to start managing your finances and tasks effectively"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative w-full max-w-md"
        >
          <div className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-neutral-800 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Create Account
              </h1>
              <p className="text-neutral-400 mt-2">Join ExpenseFlow today</p>
            </div>

            <Formik
              initialValues={{name: "", email: "", password: ""}}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({errors, touched, isSubmitting}) => (
                <Form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-200 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                      <Field
                        type="text"
                        name="name"
                        className="w-full bg-black/50 border border-neutral-800 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    {errors.name && touched.name && (
                      <motion.p
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-200 mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                      <Field
                        type="email"
                        name="email"
                        className="w-full bg-black/50 border border-neutral-800 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && touched.email && (
                      <motion.p
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-200 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="w-full bg-black/50 border border-neutral-800 rounded-lg py-2 pl-10 pr-12 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Create a password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && touched.password && (
                      <motion.p
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.password}
                      </motion.p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg py-2 hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-neutral-800"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-black/40 text-neutral-400">Or continue with</span>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className="w-full flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white rounded-lg py-2 hover:bg-white/20 transition-all"
                    onClick={() => {
                      /* Add Google sign-in logic */
                    }}
                  >
                    <motion.svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      initial={{rotate: 0}}
                      animate={{rotate: 360}}
                      transition={{duration: 0.5, delay: 0.2}}
                    >
                      <path
                        fill="#EA4335"
                        d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                      />
                      <path
                        fill="#34A853"
                        d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                      />
                      <path
                        fill="#4A90E2"
                        d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5818182 23.1818182,9.90909091 L12,9.90909091 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                      />
                    </motion.svg>
                    Continue with Google
                  </motion.button>
                </Form>
              )}
            </Formik>

            <div className="mt-6 text-center text-sm text-neutral-400">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-purple-400 hover:text-purple-300">
                Sign in
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
