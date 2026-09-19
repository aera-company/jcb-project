import { Composition, registerRoot } from "remotion";
import { BrandFilm } from "./BrandFilm";

function Root() {
  return (
    <Composition
      id="PlusJCB"
      component={BrandFilm}
      width={1080}
      height={1200}
      fps={30}
      durationInFrames={270}
    />
  );
}
registerRoot(Root);
