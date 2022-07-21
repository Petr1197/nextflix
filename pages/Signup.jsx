import Link from "next/link";
import NavBar from "./components/NavBar";
import { UserAuth } from "./context/AuthContext";
import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { user, signUp } = UserAuth();
  console.log(UserAuth());

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   try {
  //     signUp(email, password);
  //     console.log(email, password);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <NavBar />
      <div className="w-full h-screen ">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="http://authors.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                // onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-400 pr-2">
                    Already Subscribed to Nextflix?
                  </span>
                  <Link href="/Login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
