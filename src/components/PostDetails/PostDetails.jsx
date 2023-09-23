import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {id, title, body} = post;

    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div>
            <h2>Post Details about : {id}</h2>
            <p>Title: {title}</p>
            <p><small>Body: {body}</small></p>
            <button onClick={handleGoBack} >Go Back</button>
        </div>
    );
};

export default PostDetails;