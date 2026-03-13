import useChangeTitle from "@hooks/useChangeTitle";

function BlogPage() {
    useChangeTitle({ title: 'Blogs' });
    return (
        <div className="blog-page">
            BlogPage
        </div>
    )
}

export default BlogPage;