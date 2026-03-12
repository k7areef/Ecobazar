import useChangeTitle from "@hooks/useChangeTitle";

function BlogsPage() {
    useChangeTitle({ title: 'Blogs' });
    return (
        <div className="blogs-page">
            BlogsPage
        </div>
    )
}

export default BlogsPage;