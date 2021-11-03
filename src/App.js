import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CommentsPage from "./Comments/CommentsPage";
import StoriesContainer from "./Story/StoriesContainer";
import Page from "./CommonComponents/Page/Page";

import "./App.css";

export const App = () => {
  return (
    <div>
      <Router>
        <Page>
          <Switch>
            <Route path="/comments/:storyId">
              <CommentsPage />
            </Route>
            <Route path="/">
              <StoriesContainer />
            </Route>
          </Switch>
        </Page>
      </Router>
    </div>
  );
};
