import React from "react";
import { Route, Switch } from "react-router-dom";

// Importing various Pages
import SearchPage from './search/Search';
import DetailsPage from "./details/Details";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    // Switch to one of the pages
    <Switch>
      {/* path to the main page */}
      <Route path="/" exact>
        <SearchPage />
      </Route>

      {/* path to the details page */}
      <Route path="/details/:login">
        <DetailsPage />
      </Route>

      {/* if the routs are not supported */}
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;
