"use client";
import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";
import { useRef } from "react";
export default function Home() {
  const value = useRef<HTMLInputElement>(null);
  console.log(value.current);
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Button>Yadda saxla</Button>
      <Input placeholder="Ad" onChange={(e) => console.log(e.target.value)} ref={value} />
    </div>
  );
}
