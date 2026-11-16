import type { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "Sobre | Henrique Godoy",
  description:
    "Henrique Godoy, estudante de Engenharia de Software na UNAERP, focado em aplicações web modernas.",
};

export default function Page() {
  return <About />;
}
