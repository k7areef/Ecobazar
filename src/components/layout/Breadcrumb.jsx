import BreadcrumbImage from "@assets/breadcrumb.png";

function Breadcrumb() {
    return (
        <div className="breadcrumb relative py-3 md:h-20 flex items-center">
            <img
                src={BreadcrumbImage}
                alt="Breadcrumb Background"
                className="object-cover absolute left-0 top-0 h-full w-full"
            />
            <div className="container text-white relative z-1">
                Breadcrumb Content
            </div>
        </div>
    )
}

export default Breadcrumb;