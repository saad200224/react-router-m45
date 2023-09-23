import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();

    console.log(users)


    return (
        <div className="max-w-7xl mx-auto">
            <h2>Our users : {users.length}</h2>
            <div className="flex flex-wrap gap-5">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;