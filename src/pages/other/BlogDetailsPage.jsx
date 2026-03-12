import useChangeTitle from "@hooks/useChangeTitle";
import { useParams } from "react-router-dom";

function BlogDetailsPage() {
    const { id } = useParams();
    useChangeTitle({ title: `Blog Details | ${id}` });
    return (
        <div className="blog-details-page">
            BlogDetailsPage
        </div>
    )
}

export default BlogDetailsPage;