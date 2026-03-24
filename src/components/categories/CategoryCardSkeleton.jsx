function CategoryCardSkeleton() {
    return (
        <div className="category-card-skeleton p-3 bg-white border border-grey-100 rounded-lg">
            <div className="bg-primary/30 animate-pulse rounded-sm h-20 w-1/2 mx-auto mb-2"></div>
            <div className="bg-primary/30 animate-pulse rounded-sm h-4 w-3/4 mx-auto mb-2"></div>
            <div className="bg-primary/30 animate-pulse rounded-sm h-4 w-1/2 mx-auto mb-2"></div>
        </div>
    )
}

export default CategoryCardSkeleton;