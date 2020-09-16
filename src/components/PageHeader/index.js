import React from 'react'
import {Link} from 'react-router-dom'

export const PageHeader = props => (
  <header>
    <h1>Tunnel Logs</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tunnels">Tunnels</Link></li>
      </ul>
    </nav>
  </header>
)

export default PageHeader