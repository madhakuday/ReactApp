import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const location = useLocation();
  let navigate = useNavigate();

  return (
    <WrappedComponent
      {...props}
      params={params}
      location={location}
      navigate={navigate}
    />
  );
};

export default withRouter;
