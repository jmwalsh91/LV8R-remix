import CardGlass from "~/components/surfaces/CardGlass";
import NavBar from "~/components/navigation/NavBar";
import Hero from "~/components/surfaces/Hero";
import LogIn from "~/components/Forms/LogIn";
export default function Index() {
  return (
    <>
    <NavBar/>
    <div className="container h-400 object-center">
{/*   <p className="text-2xl">Let's see this</p> */}
{/* <CardGlass/> */}

<Hero/>

</div>
</>
  );
}
