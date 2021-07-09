import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Question3 } from "./Question3";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="break container">
          <Switch>
            <Route path="/question3">
              <Question3 />
            </Route>
            <Route path="*">
              <ul>
                <li>
                  You should be able to solve the three questions in less than
                  30 minutes.
                </li>
                <li>
                  <b>Important:</b> Please include the URL to your sandbox in
                  the cover letter of your application.
                </li>
              </ul>

              <ol>
                <li>
                  <p>Question 1</p>
                  <p>
                    You will be given an array that may contain integers and/or
                    array of integers. Your goal is to write a function that
                    will sum up all intergers contains in the arrays.
                    <br />
                    For example, if the input is [[3, 2], [1], [4, 12], [2,
                    [3,7]]]  then your program should output 34 because 3 + 2 +
                    1 + 4 + 12 + 2 + 3 + 7 = 34.
                  </p>
                </li>
                <li>
                  <p>Question 2</p>
                  <p>
                    Write a function called add wich will always return the sum
                    of the previous result and the current input.
                    <br />
                    For example:
                    <br />
                    add(3) // 3 <br />
                    add(5) // 8 <br />
                    add(2) // 10
                  </p>
                </li>
                <li>
                  <Link to="/question3">
                    Question 3: ReactJS fetching + rendering
                  </Link>
                  <p>
                    Fetch and render the deliveries in the table sorted by
                    status and eta ascendant.
                    <br />
                    Status should be sorted in the following order: active,
                    upcoming, pending.
                  </p>
                </li>
              </ol>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
