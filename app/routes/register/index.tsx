
import { Outlet } from 'remix'
import Foundation from '~/components/layoutAndWrappers/Foundation'



type Props = {}

function RegisterRoute({}: Props) {


  return (
    <Foundation>
<Outlet/>
    </Foundation>
  )
}

export default RegisterRoute