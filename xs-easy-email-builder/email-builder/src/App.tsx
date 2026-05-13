import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Page from '@xfinity/components/Page';
import store from '@xfinity/store';
import '@arco-design/web-react/dist/css/arco.css';
import '@xfinity/styles/main.scss';
import './styles/common.scss';
import { history } from './utils/history';
import Home from '@xfinity/pages/Home';
import loading from '@xfinity/images/easymailloader.svg';

const Editor = React.lazy(() => import('@xfinity/pages/Editor'));

function App() {
  const basepath = location.pathname;
  return (
    <Provider store={store}>
      <Page>
        <Suspense
          fallback={
            <div
              style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                width='200px'
                src={loading}
                alt=''
              />
              <p
                style={{
                  fontSize: 24,
                  color: 'rgba(0, 0, 0, 0.65)',
                }}
              >
                Please wait a moment.
              </p>
            </div>
          }
        >
          <Router history={history}>
            <Switch>
            <Route path={basepath}  exact 
                render={() => 
                      {
                        if (history.location.hash == "#editor") 
                        {
                          return(<Editor/>);
                        }
                        else 
                        {
                          return(<Home/>) 
                        }
                      } 
                }
              />
            </Switch>
          </Router>
        </Suspense>
      </Page>
    </Provider>
  );
}
export default App;
