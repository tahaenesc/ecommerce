import Hero from "./sections/hero";
import Products from "./sections/product";
export const revalidate = 0;
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
}
