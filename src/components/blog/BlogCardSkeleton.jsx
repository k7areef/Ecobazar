function BlogCardSkeleton() {
    return (
        <div className="blog-card-skeleton rounded-lg overflow-hidden flex flex-col">
            <div className="bg-grey-100 aspect-4/3 animate-pulse"></div>
            <div className="p-3 md:p-5 border border-grey-100 flex-1 flex flex-col gap-2">
                <div className="h-4 bg-grey-100 rounded w-3/4"></div>
                <div className="h-21 flex flex-col gap-2">
                    <div className="h-full bg-grey-100 rounded w-1/2"></div>
                    <div className="h-full bg-grey-100 rounded w-2/3"></div>
                    <div className="h-full bg-grey-100 rounded w-1/3"></div>
                </div>
                <div className="h-4 bg-grey-100 rounded w-1/4"></div>
            </div>
        </div>
    )
}

export default BlogCardSkeleton;