function BlogCardSkeleton() {
    return (
        <div className="blog-card-skeleton rounded-lg overflow-hidden aspect-[1/1.14] flex flex-col">
            <div className="bg-grey-100 aspect-4/3 animate-pulse"></div>
            <div className="p-3 md:p-5 border border-grey-100 flex-1">
                <div className="h-4 bg-grey-100 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-grey-100 rounded w-1/2"></div>
                <div className="h-4 bg-grey-100 rounded w-2/3 mt-2"></div>
                <div className="h-4 bg-grey-100 rounded w-1/3 mt-2"></div>
                <div className="h-4 bg-grey-100 rounded w-1/4 mt-2"></div>
            </div>
        </div>
    )
}

export default BlogCardSkeleton;