function BlogItemSkeleton() {
    return (
        <div className="blog-item-skeleton flex items-center gap-3">
            <div className="w-16 h-16 bg-grey-100 rounded-md overflow-hidden shrink-0 animate-pulse"></div>
            <div className="flex-1">
                <div className="h-4 bg-grey-100 rounded animate-pulse"></div>
                <div className="h-3 bg-grey-100 rounded mt-2 animate-pulse"></div>
                <div className="h-2 bg-grey-100 rounded mt-2 animate-pulse w-1/4"></div>
            </div>
        </div>
    )
}

export default BlogItemSkeleton;