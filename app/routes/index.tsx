
import Hero from "~/components/surfaces/Hero";

import { Outlet } from "remix";
import { LoaderFunction } from "remix";
import { authenticator } from "~/services/auth.server";

/* export let loader: LoaderFunction = async ({ request}) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/logreg",
  })
} */

export default function Index() {
  return (

    <div className="container h-400 object-center">
<Outlet/>
<Hero/>

</div>

  );
}
