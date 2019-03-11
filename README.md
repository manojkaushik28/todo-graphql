# ToDo Demo

## Getting Started

### 1. Create an account

To run this example, please create a [graph.cool](http://graph.cool) account and **copy your `PROJECT_ID`**.

GraphQL data model:

```graphql
type Todo {
  text: String!
  complete: Boolean!
}
```

### 2. Configure app data endpoint

Open `src/app.js` and paste your `PROJECT_ID` to the following line:

```js
const networkInterface = createNetworkInterface('https://api.graph.cool/simple/v1/__PROJECT_ID__')
```


### 3. Run the example

Please run the following command and open [localhost:3000](http://localhost:3000) in your browser.

```sh
npm install
npm start
```