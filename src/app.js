import React from 'react'
import { render } from 'react-dom'
import TodoApp from './components/TodoApp'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import './style.css'

const networkInterface = createNetworkInterface('https://api.graph.cool/simple/v1/cjt3vleay0wtf0154c9cu8189')

networkInterface.use([
  {
    applyMiddleware (req, next) {
      if (!req.options.headers) {
        // Create the header object if needed.
        req.options.headers = {}
      }
      req.options.headers['x-graphcool-source'] = 'todo-app'
      next()
    },
  },
])

const client = new ApolloClient({
  networkInterface,
})

function filter (previousState = 'SHOW_ALL', action) {
  if (action.type === 'SET_FILTER') {
    return action.filter
  }

  return previousState
}

const store = createStore(
  combineReducers({
    filter,
    apollo: client.reducer(),
  }),
  applyMiddleware(client.middleware()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

render(
  <ApolloProvider store={store} client={client}>
    <TodoApp />
  </ApolloProvider>,
  document.getElementById('root')
)
