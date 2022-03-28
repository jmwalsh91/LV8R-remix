
import Hero from "~/components/surfaces/Hero";

import { Outlet } from "remix";




export default function Index() {
  return (

    <div className="container h-400 object-center w-screen">
<Outlet/>
<Hero/>

</div>

  );
}
