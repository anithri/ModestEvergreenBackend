import { gql} from '@apollo/client'

export const TUNNEL_LOGS = gql`
  query GetTunnelLogs {
    tunnelLogs {
      all: edges {
        tunnel: node {
          id
          slug
        }
      }
    }
  }
`


