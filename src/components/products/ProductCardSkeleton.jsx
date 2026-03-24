function ProductCardSkeleton() {
    return (
        <div className="product-card-skeleton border border-grey-100 rounded-lg overflow-hidden">
            <div className="aspect-square bg-primary/30 animate-pulse"></div>
            <div className="p-3 md:p-5 flex items-center justify-between">
                <div className="h-20.5 flex flex-col gap-2">
                    <div className="h-full rounded-sm bg-primary/30 animate-pulse w-30"></div>
                    <div className="h-full rounded-sm bg-primary/30 animate-pulse w-15"></div>
                    <ul className="h-full flex items-center gap-1">
                        {
                            Array.from({ length: 5 }).map((_, index) => (
                                <li key={index} className="w-5 h-5 rounded-full bg-primary/30 animate-pulse"></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductCardSkeleton;