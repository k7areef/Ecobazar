import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabaseClient";
import SectionHeader from "./shared/SectionHeader";
import BlogCard from "@components/blog/BlogCard";
import BlogCardSkeleton from "@components/blog/BlogCardSkeleton";

function LatestNews() {

    const { data, isLoading } = useQuery({
        queryKey: ['latest_news'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("blog_posts")
                .select("*")
                .order("created_at", { ascending: false })
                .limit(3)
            if (error) throw error
            return data
        }
    })

    return (
        <section className="latest-news-section py-5 md:py-10 bg-grey-50" id="latestNews">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Latest News"
                    beforeTitle="Blog"
                    className="text-center"
                />
                {/* Content Wrapper */}
                <div className="content-wrapper grid grid-cols-1 md:grid-cols-3 gap-5">
                    {isLoading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <BlogCardSkeleton key={index} />
                        ))
                    ) : (
                        data.map((blog, index) => (<BlogCard key={index} blog={blog} />))
                    )}
                </div>
            </div>
        </section>
    )
}

export default LatestNews;