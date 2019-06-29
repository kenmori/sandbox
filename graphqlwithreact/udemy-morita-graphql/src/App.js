import React, { Component } from "react";
import { ApolloProvider, Mutation, Query } from "react-apollo";
import client from "./client";
import { SEARCH_REPOSITORIES, REMOVE_STAR, ADD_STAR } from "./graphql";

const PER_PAGE = 5;
const DEFAULT_STATE = {
  after: null,
  before: null,
  first: PER_PAGE,
  last: null,
  query: "フロントエンドエンジニア"
};



const StarButton = (props) => {
  const node = props.node
  const { query, first, last, before, after } = props;
  const totalCount = node.stargazers.totalCount;
  const viewerHasStarred = node.viewerHasStarred;
  const starCount = totalCount === 1 ? '1 star' : `${totalCount} stars`;
  const StarStatus = ({addorRemoveStar}) => (
    <button onClick={() => addorRemoveStar({
      variables: {input: {starrableId: node.id}},
      update: (store)=> {
        const data = store.readQuery({
          query: SEARCH_REPOSITORIES,
          variables: { query, first, last, before, after }
        });
        const edges = data.search.edges;
        const newEdges = edges.map(edge => {
            if(edge.node.id === node.id){
              const totalCount = edge.node.stargazers.totalCount;
              const diff = viewerHasStarred ? -1 : 1
              const newTotalCount = totalCount + diff
              edge.node.stargazers.totalCount = newTotalCount;
            }
            return edge
        })
        data.search.edges = newEdges;
        store.writeQuery({query: SEARCH_REPOSITORIES, data})
        }
      }
    )}>
      {starCount} | {viewerHasStarred ? "stared" : "-"}
    </button>
  )
  return  (
    <Mutation mutation={viewerHasStarred ? REMOVE_STAR : ADD_STAR}
    >
    {(addorRemoveStar) => <StarStatus addorRemoveStar={addorRemoveStar} />}
    </Mutation>
    )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      ...DEFAULT_STATE,
      query: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  goNext(search) {
    this.setState({
      first: PER_PAGE,
      after: search.pageInfo.endCursor,
      last: null,
      before: null
    });
  }
  goPreviousPage(search){
    this.setState({
      first: null,
      after: null,
      last: PER_PAGE,
      before: search.pageInfo.startCursor
    })
  }
  render() {
    const { query, first, last, before, after } = this.state;
    return (
      <ApolloProvider client={client}>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={query} />
        </form>
        <Query
          query={SEARCH_REPOSITORIES}
          variables={{ query, first, last, before, after }}
        >
          {({ loading, error, data }) => {
            if (loading) return "loading";
            if (error) return `Error! ${error.message}`;
            const search = data.search;
            const repositoryCount = search.repositoryCount;
            const repositoryUnit =
              repositoryCount === 1 ? "Repository" : "Repositories";
            const title = `GitHub Repositories Search Results ${
              data.search.repositoryCount
            } ${repositoryUnit}`;
            return (
              <React.Fragment>
                <h2>{title}</h2>
                <ul>
                  {search.edges.map(edge => {
                    const node = edge.node;
                    return (
                      <li key={node.id}>
                        <a
                          href={node.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {node.name}
                        </a>
                        &nbsp;
                        <StarButton node={node} query={query} first={first} last={last} before={before} after={after} />
                      </li>
                    );
                  })}
                </ul>
                {search.pageInfo.hasPreviousPage ? (
                  <button onClick={this.goPreviousPage.bind(this, search)}>Previous</button>
                ) : null}
                {search.pageInfo.hasNextPage ? (
                  <button onClick={this.goNext.bind(this, search)}>Next</button>
                ) : null}
              </React.Fragment>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
