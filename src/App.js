import React from "react";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import FeedbackData from "./data/FeedbackData";
import FeedbackLists from "./components/FeedbackLists";
import Feedbackstats from "./components/Feedbackstats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
// import Card from "./components/shared/Card";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

 

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <Feedbackstats />
                  <FeedbackLists />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/post*" element={<Post />}></Route>
          </Routes>

          {/* <Card>
            <NavLink to="/" activeClassName="active">
              HOME
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              ABOUT
            </NavLink>
          </Card> */}

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
