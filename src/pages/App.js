import React from 'react'
import Router from './Router'
import {GraphqlClient} from '../graphql/GraphqlClient'
import {PageHeader} from '../components/PageHeader'

export const App = () => (
  <GraphqlClient>
    <Router>
      <PageHeader />
    </Router>
  </GraphqlClient>
)

