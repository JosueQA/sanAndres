import Layout from "../../Components/Layout";
import LayoutGap from "../../Components/LayoutGap";
import Landing from "./Landing.jsx";
import Presentation from "./Presentation.jsx";
import Bridge from "./Bridge.jsx";
import Process from "./Process";
import Sales from "./Sales";

function Home() {
  return (
    <Layout>
      <Landing />
      <Presentation />
      <LayoutGap flexDirection='flex-col'>
        <Bridge />
        <Process />
        <Sales />
      </LayoutGap>
    </Layout>
  );
}

export default Home;
