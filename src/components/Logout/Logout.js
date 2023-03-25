import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";

function Logout() {
  const navigate = useNavigate();
  const { user, userLogout } = useContext(AuthContext);

  useEffect(() => {
    authService
      .logout(user.accessToken)
      .then(() => {
        userLogout();
        navigate("/games/login");
      })
      .catch(err => {
        console.log(err);
        navigate("/error");
      });
  }, []);

  return null;
}

export default Logout;
