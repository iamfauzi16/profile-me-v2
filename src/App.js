import Navbar from "./components/Navbar";
import Container from "./components/Container";

import Content from "./components/Content";
import About from "./components/About";
import Banner from "./components/Banner";
export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Content />
      <About />
      <Container></Container>
    </>
  );
}
