import Head from "next/head";
import Image from "next/image";
import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import Login from "./Login";
import { AuthContextProvider } from "./context/AuthContext";
import { Route, Router, Routes } from "react-router-dom";

export default function Home() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <HomePage />
      </AuthContextProvider>
    </>
  );
}
