// import { MockedProvider } from 'react-apollo/test-utils';
// import { MemoryRouter } from 'react-router-dom';
// import React, {createContext} from 'react';

// const AppContext = createContext();

// export const withAppContext = (Component) => {
//   return (props) => (
//     <AppContext.Consumer>
//       {context => <Component {...props} context={context}/>}
//     </AppContext.Consumer>
//   );
// };

// export const TestApp = (props) => {
//     const {
//       mocks = [],
//       store = {},
//       children
//     } = props;
//     return (
//       <MockedProvider mocks={mocks} addTypename={false}>
//         <MemoryRouter>
//           <AppContext.Provider value={{
//             store,
//             dispatch: (action) => { return action },
//             routeRef: React.createRef()
//           }}>
//             {children()}
//           </AppContext.Provider>
//         </MemoryRouter>
//       </MockedProvider>
//     );
//   };