import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import AppNotifyProvider from 'components/Notify/NotifyProvider';

import './index.scss';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import './iconFonts/iconFonts.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename="/crm-app">
        <AppNotifyProvider portalId="notifications">
          <App />
        </AppNotifyProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  //  </React.StrictMode>
);
