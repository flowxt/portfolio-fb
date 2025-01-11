import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Florian Bajron",
  description:
    "Florian Barjon est un développeur passionné, créatif et déterminé. Autiste Asperger, il transforme sa passion pour le code en projets uniques et impactants.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contactes Moi</Heading>
      <Paragraph className="mb-10 max-w-xl">
      Contactez-moi par email ou via ce formulaire. Je vous répondrai au plus vite!{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
