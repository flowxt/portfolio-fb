import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Bonjour à tous, je suis Florian</Heading>
      <Paragraph className="max-w-xl mt-4">
        Je suis un développeur front-end passionné par la création{" "}
        <Highlight>d'applications web</Highlight> et de produits numériques capables de transformer l'expérience utilisateur et d'avoir un impact significatif. 
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Avec mon expérience et mon regard unique, je conçois des {" "}
        <Highlight>solutions performantes</Highlight>, esthétique et évolutives, alliant fonctionnalité et design intuitif.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Mon travail en action :
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
