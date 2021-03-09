import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userAtom, typeAtom, tokenAtom } from "../global/globalState";

const PrivateRoute = ({ component: Component, doc, ...rest }) => {
  const user = useRecoilValue(userAtom);
  const type = useRecoilValue(typeAtom);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          doc ? (
            type === "Doctor" ? (
              <Component {...props} />
            ) : (
                <Redirect to="/" />
              )
          ) : type === "User" ? (
            <Component {...props} />
          ) : (
                <Redirect to="/" />
              )
        ) : (
            <Redirect to="/loginchoice" />
          )
      }
    />
  );
};

export default PrivateRoute;