import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();
    const {name, website} = user



    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>Visit us: {website}</p>
        </div>
    );
};

export default UserDetails;