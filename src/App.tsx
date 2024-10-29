import React from "react";
import "./index.css";
import store from "./lib/store";

import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
};

export default App;
