import CarouselComponent from "./CarouselComponent";
import Suggestion from "./Suggestion";
import Subscribe from "./Subscribe";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <main>
      <CarouselComponent />
      <Suggestion />
      <Subscribe />
    </main>
  );
}

export default Home;
