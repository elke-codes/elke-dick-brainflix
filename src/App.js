/// --- APP.JS --- ///

// -- IMPORT SCSS -- //
import "./App.scss";

// -- IMPORT COMPONENTS -- //
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Comments from "./components/Comments/Comments"
import VideosNext from "./components/VideosNext/VideosNext";
import Button from "./components/Button/Button";

// -- COMPONENT DECLARATION -- //
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Comments />
      <VideosNext />
      <Button />
    </>
  );
}

export default App;
