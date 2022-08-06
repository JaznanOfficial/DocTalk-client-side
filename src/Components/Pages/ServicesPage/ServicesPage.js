import React from "react";
import useFetch from "../../CustomHooks/useFetch";
import Services from "../Homepages/Services/Services";
import SingleService from "../Homepages/SingleService/SingleService";
import { ClockLoader } from "react-spinners";
import { css } from "@emotion/react";

const ServicesPage = () => {
    const { data, loading, error } = useFetch("https://doctalk-server.herokuapp.com/api/services", {
        mode: "no-cors",
    });

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;
    return (
        <>
            {error && <div>Error: {error.message}</div>}
            {loading ? (
                <ClockLoader
                    color="#E12454"
                    size={"300"}
                    loading={true}
                    css={override}
                    display={"block"}
                />
            ) : (
                <div>
                    <Services />
                    <SingleService />
                </div>
            )}
        </>
    );
};

export default ServicesPage;
