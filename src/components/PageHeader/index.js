import React from 'react'
import {NavLink} from 'react-router-dom'
import {TUNNEL_LOGS} from '../../graphql/TunnelLog'
import {useQuery} from '@apollo/client'
import styles from './styles.module.css'

export const PageHeaderDisplay = ({tunnelLogs}) => {
  console.log(tunnelLogs)
  const tunnelLinks = tunnelLogs.map(tunnel => (
    <li key={`page-navlink-${tunnel.id}`}><NavLink to={`/tunnels/${tunnel.id}`}>{tunnel.slug}</NavLink></li>
  ))
  return (
    <header className={styles.header}>
      <h1>Tunnel Logs</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/tunnels">Tunnels</NavLink></li>
          {tunnelLinks}
        </ul>
      </nav>
    </header>
  )
}

export const PageHeaderLoading = (props) => {
  return (
    <header className={styles.header}>
      <h1>Tunnel Logs</h1>
      <nav>
        <ul>
          <li>Setting things up</li>
        </ul>
      </nav>
    </header>
  )
}

export const PageHeaderError = (props) => {
  return (
    <header className={styles.error}>
      <h1>Tunnel Logs</h1>
      <nav>
        <ul>
          <li>COMMUNICATION ERROR</li>
        </ul>
      </nav>
    </header>
  )
}

export const PageHeader = props => {
  const { data, loading, error } = useQuery(TUNNEL_LOGS)
  if (loading) return (<PageHeaderLoading />)
  if (error) return (<PageHeaderError />)
  return (<PageHeaderDisplay tunnelLogs={data.tunnelLogs.all.map(({tunnel}) => tunnel)} />)
}



export default PageHeader
