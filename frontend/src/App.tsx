import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryProvider } from "./services";
import { Loading } from "./components/Loading";

import router from "./router";

function App() {
  return (
    <div className="App">
      <QueryProvider>
        <Provider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}></PersistGate>
        </Provider>
      </QueryProvider>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
