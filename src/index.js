// import React from 'react';
// import ReactDOM from 'react-dom';
// import NavComponent from './components/heading.js';
// import Main from './components/main.js';
//
// import './assets/stylesheets/index.css';
// import Introduction from './components/introduction.js';
//
//
// class Grit extends React.Component {
//   render() {
//     return (
//       <div>
//         <NavComponent/>
//         <Main />
//         <Introduction/>
//
//
//
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <Grit/>,
//   document.querySelector('#root'));
//

  import ReactDOM from 'react-dom';
  import registerServiceWorker from './registerServiceWorker';
  import { makeMainRoutes } from './routes';
  import './assets/stylesheets/index.css';

  const routes = makeMainRoutes();

  ReactDOM.render(
    routes,
    document.getElementById('root')
  );
  registerServiceWorker();
