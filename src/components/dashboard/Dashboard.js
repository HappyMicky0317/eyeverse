import Header from "../include/header";
import World from "./World";
import Story from './Story';
import Nfts from "./Nfts";
import Game from "./Game";
import Tools from "./Tools";
import Footer from "../include/footer";

function Dashboard() {
  return (
    <div>
      <Header />
      <World />
      <Story />
      <Nfts />
      <Game />
      <Tools />
      {/* <Footer /> */}
    </div>
  );
}
export default Dashboard