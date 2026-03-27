import BlogCard from "@components/blog/BlogCard";
import BlogCardSkeleton from "@components/blog/BlogCardSkeleton";
import BlogHeader from "@components/blog/BlogHeader";
import BlogSidebar from "@components/blog/BlogSidebar";
import BlogSidebarDrawer from "@components/blog/BlogSidebarDrawer";
import Pagination from "@components/common/Pagination";
import useChangeTitle from "@hooks/useChangeTitle";
import { useQuery } from "@tanstack/react-query";
import { CALC_TOTAL_PAGES } from "@utils/helpers";
import { supabase } from "@utils/supabaseClient";
import React from "react";

function BlogPage() {
    useChangeTitle({ title: 'Blogs' });

    const [currentPage, setCurrentPage] = React.useState(1);
    const LIMIT = 10;

    const from = (currentPage - 1) * LIMIT;
    const to = from + LIMIT - 1;

    const { data, isLoading } = useQuery({
        queryKey: ["blog_posts", currentPage],
        queryFn: async () => {
            const { data, error, count } = await supabase
                .from("blog_posts")
                .select("*", { count: "exact" })
                .range(from, to)
                .limit(LIMIT)
            if (error) throw error;
            return { posts: data, totalCount: count };
        }
    })

    const [openDrawer, setOpenDrawer] = React.useState(false);

    const openDrawerHandler = () => {
        setOpenDrawer(true);
    };

    const closeDrawerHandler = () => {
        setOpenDrawer(false);
    };

    const totalPages = CALC_TOTAL_PAGES(data?.totalCount, LIMIT);

    const handleNext = React.useCallback(() => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    }, [currentPage, totalPages]);

    const handlePrev = React.useCallback(() => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    }, [currentPage]);

    return (
        <div className="blog-page py-5 md:py-10">
            <div className="container">
                {/* Header */}
                <BlogHeader onFilterClick={openDrawerHandler} />
                {/* Content Wrapper */}
                <div className="content-wrapper flex gap-5 md:gap-10">
                    {/* Sidebar */}
                    <BlogSidebar className="max-lg:hidden" />
                    {/* Main Content */}
                    <main className="w-full min-w-0">
                        {/* Blog Grid */}
                        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                            {
                                isLoading ? (
                                    Array.from({ length: LIMIT }).map((_, index) => (<BlogCardSkeleton key={index} />))
                                ) : (
                                    data?.posts?.map((blog, index) => (<BlogCard key={index} blog={blog} />))
                                )
                            }
                        </div>
                        {/* Pagination */}
                        <Pagination
                            current={currentPage}
                            pageCount={totalPages}
                            className="justify-center p-5"
                            handleNext={handleNext}
                            handlePageChange={(page) => {
                                setCurrentPage(page);
                            }}
                            handlePrev={handlePrev}
                            nextDisabled={currentPage >= totalPages || isLoading}
                            prevDisabled={currentPage <= 1 || isLoading}
                        />
                    </main>
                </div>
            </div>
            {/* Blog Sidebar Drawer */}
            <BlogSidebarDrawer isOpen={openDrawer} onClose={closeDrawerHandler} />
        </div>
    )
}

export default BlogPage;