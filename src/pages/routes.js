import Groomer from './Groomer'
import PestControl from './PestControl'
import {Home} from './Home'
import {Tunnels} from './Tunnels'

export const routes = [
  ['/',Home, {exact: true,}],
  ['/tunnels',Tunnels],

] // add additional routes above

export default routes
