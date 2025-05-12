import { FormEvent, useState } from "react";

export default function useTogglePassword() {
  const [type, setType] = useState("password");
  const [visible, setVisible] = useState(false);

  const togglePassword = (e: FormEvent) => {
    e.preventDefault();
    setVisible((prev) => !prev);
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  return { type, visible, togglePassword };
}