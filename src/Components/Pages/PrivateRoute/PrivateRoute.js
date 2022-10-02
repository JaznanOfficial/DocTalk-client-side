import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import useAuth from "../../CustomHooks/useAuth";
import { css } from "@emotion/react";

const PrivateRoute = ({ children, ...rest }) => {
    const { loading, user } = useAuth();
    const location = useLocation();
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    if (loading) {
        return (
            <ClockLoader
                color="#E12454"
                size={"300"}
                loading={true}
                css={override}
                display={"block"}
            />
        );
    }
    return user.auth ? children : <Navigate to="/sign-in" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
