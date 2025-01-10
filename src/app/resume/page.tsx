import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Mon parcours atypique</Heading>
      <Paragraph className="max-w-xl mt-4">
      Je suis un développeur full-stack passionné par la création de <Highlight>solutions innovantes</Highlight> et d'applications web capables de faire une réelle différence.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
