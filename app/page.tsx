"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  let name = "abhishek";
  return (
    <>
    hello abhishek lets start the project in next js
    <div className="w-36 m-4" >
    <Button> abhishek  hi.... </Button>
    </div>

    <p>{name}</p>
    </>
  );
}
