import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const handleShowDetails = () =>{
        navigate(`/post/${id}`)
    }

    return (
        <div className="border-4 rounded-lg border-red-500 mt-5 mb-5 w-96 p-5 max-w-7xl mx-auto">
            <h1>Post Title : {title}</h1>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <button onClick={handleShowDetails} >Click to Show Details</button>
        </div>
    );
};

export default Post;