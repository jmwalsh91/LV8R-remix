import CardGlass from "~/components/surfaces/CardGlass";
import NavBar from "~/components/navigation/NavBar";
import Hero from "~/components/surfaces/Hero";
import LogIn from "~/components/Forms/LogIn";
import { Outlet } from "remix";
export default function Index() {
  return (

    <div className="container h-400 object-center">
<Outlet/>
<Hero/>

</div>

  );
}
