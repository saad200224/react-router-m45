import { Link } from "react-router-dom";

const User = ({user}) => {

    const {id, name, phone, email} = user;

    return (
        <div className="border-4 rounded-lg border-red-500 mt-5 mb-5 w-96 p-5 max-w-7xl mx-auto">
            <h2 className="text-2xl font-medium">Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/user/${id}`} className="text-blue-600">Show Details</Link>
        </div>
    );
};

export default User;