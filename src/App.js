import './App.scss';
import Header from "./components/Header/Header";
import "./components/Header/Header.scss"
import Hero from "./components/Hero/Hero";
import "./components/Hero/Hero.scss";
import Comments from "./components/Comments/Comments";
import "./components/Comments/Comments.scss";
import VideosNext from "./components/VideosNext/VideosNext";
import "./components/VideosNext/VideosNext.scss";

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
