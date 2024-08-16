import Image from "next/image";
import AddCustomer from "./add/AddCustomer";
import Total from "./components/Total";
import Customers from './components/Customers'

interface HomeConst{

}

const Home = () => {
  
  return (
    <main className="">
      <Total/>
     <Customers/>
    </main>
  );
}
export default Home;
