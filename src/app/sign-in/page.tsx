"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {fadeInUp} from "@/utils/helpers/framer-motion-helper";
import {Eye, EyeOff, Mail, Lock} from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import {HandleLogin} from "@/handler/HandleReglo";
import {useRouter} from "next/navigation";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    )
    .required("Password is required"),
});

export default function SignIn() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const route = useRouter();

  const handleSubmit = async (
    values: {
      email: string;
      password: string;
    },
    {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void},
  ) => {
    try {
      setLoading(true);
      const resp = await HandleLogin(values, route);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In | ExpenseFlow</title>
        <meta
          name="description"
          content="Sign in to ExpenseFlow to manage your expenses and tasks efficiently"
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
                Welcome Back
              </h1>
              <p className="text-neutral-400 mt-2">Sign in to continue to ExpenseFlow</p>
            </div>

            <Formik
              initialValues={{email: "", password: ""}}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({errors, touched, isSubmitting}) => (
                <Form className="space-y-6">
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
                      <div className="text-red-500 text-sm mt-1">{errors.email}</div>
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
                        placeholder="Enter your password"
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
                      <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg py-2 hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                  </button>

                  <div className="relative flex items-center gap-4 py-4">
                    <div className="flex-grow border-t border-neutral-800"></div>
                    <span className="flex-shrink text-neutral-400">or</span>
                    <div className="flex-grow border-t border-neutral-800"></div>
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
            {error && (
              <div className="error bg-red-500 text-white">
                <p>{error}</p>
              </div>
            )}
            <div className="mt-6 text-center text-sm">
              <Link href="/forgot-password" className="text-purple-400 hover:text-purple-300">
                Forgot password?
              </Link>
              <p className="mt-4 text-neutral-400">
                {"Don't have an account?"}
                <Link href="/sign-up" className="text-purple-400 hover:text-purple-300">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
