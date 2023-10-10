import { Heading } from '../src/components/Heading/Heading';

export default function Home() {
  return (
    <section>
      <Heading as="h1" variant="h4">
        Particles UI
      </Heading>
      <Heading variant="subtitle-md">
        Please select a component from the list on the left
      </Heading>
    </section>
  );
}