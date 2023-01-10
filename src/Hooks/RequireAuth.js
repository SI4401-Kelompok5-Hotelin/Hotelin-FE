import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const auth = localStorage.getItem("token");
  const location = useLocation();

  if (!auth) {
    console.log(auth.token);

    return (
      <Navigate
        to={{ pathname: "/login", state: { from: location.pathname } }}
      />
    );
  }

  return <Outlet />;
};

export default RequireAuth;
