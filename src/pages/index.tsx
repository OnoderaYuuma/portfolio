import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Profile from "@/components/profile";
import Skill from "@/components/skill";
import Works from "@/components/works";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Header/>
    <Profile/>
    <Skill/>
    <Works/>
    <Footer/>
    </>
  );
}
