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
