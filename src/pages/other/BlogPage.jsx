import BlogCard from "@components/blog/BlogCard";
import BlogCardSkeleton from "@components/blog/BlogCardSkeleton";
import BlogHeader from "@components/blog/BlogHeader";
import BlogSidebar from "@components/blog/BlogSidebar";
import useChangeTitle from "@hooks/useChangeTitle";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabaseClient";

function BlogPage() {
    useChangeTitle({ title: 'Blogs' });

    const LIMIT = 10;

    const { data, isLoading } = useQuery({
        queryKey: ["blog_posts"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("blog_posts")
                .select("*")
                .limit(LIMIT)
            if (error) throw error;
            return data
        }
    })

    return (
        <div className="blog-page py-5 md:py-10">
            <div className="container">
                {/* Header */}
                <BlogHeader />
                {/* Content Wrapper */}
                <div className="content-wrapper flex gap-5 md:gap-10">
                    {/* Sidebar */}
                    <BlogSidebar />
                    {/* Main Content */}
                    <main className="w-full min-w-0">
                        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                            {
                                isLoading ? (
                                    Array.from({ length: LIMIT }).map((_, index) => (<BlogCardSkeleton key={index} />))
                                ) : (
                                    data.map((blog, index) => (<BlogCard key={index} blog={blog} />))
                                )
                            }
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default BlogPage;