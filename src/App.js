/// --- APP.JS --- ///

// -- IMPORT SCSS -- //
import "./App.scss";
import "./styles/partials/_typography.scss";

// -- IMPORT COMPONENTS -- //
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Comments from "./components/Comments/Comments";
import VideosNext from "./components/VideosNext/VideosNext";

// -- COMPONENT DECLARATION -- //
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Comments />
      <VideosNext />
    </>
  );
}

export default App;
