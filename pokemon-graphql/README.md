# TODO

- `npx create-react-app pokemon-graphql --template typescript`

[https://www.graphql-code-generator.com/docs/getting-started/installation]([https://www.graphql-code-generator.com/docs/getting-started/installation])

- `yarn add graphql`
- `yarn add -D @graphql-codegen/cli`
- `yarn add -D @graphql-codegen/schema-ast`
- `yarn add -D typescript-operations`
- `yarn graphql-codegen init`

- yarn add @apollo/client


## docs

[graphql-pokemon](https://github.com/lucasbento/graphql-pokemon)



visit `https://graphql-pokemon2.vercel.app/`


```graphql
 {
  pokemons(first: 1) {
    id
  }
}
```


### src/graphql/client.ts

```ts
import { ApolloClient, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache()
})

export { apolloClient }
```

### App.tsx

```tsx
import './App.css';
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "./graphql/client"

function App() {
  return (
    <ApolloProvider client={apolloClient}>
     <div>pokemon</div>
    </ApolloProvider>
  );
}

export default App;
```

## Troubleshooting

- `Unable to find template plugin matching typescript-operations`
 -> ocur after write package.json
 -> `yarn`



