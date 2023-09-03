import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <ReduxProvider store={appStore}>
          <PersistGate loading={null} persistor={persistedStore}>
              <RouterProvider router={appRouter()} />
          </PersistGate>
        </ReduxProvider>
  </React.StrictMode>,
)
