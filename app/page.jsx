import Brands from "./components/Brands";
import Contacts from "./components/Contacts";
import FeaturedProject from "./components/FeaturedProject";
import Hero from "./components/Hero";
import Stats from "./components/Stats";


export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Hero />
      <Stats/>
      <FeaturedProject/>
      <Contacts/>
      <Brands />
    </div>
  );
}
