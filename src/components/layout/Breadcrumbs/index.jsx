import { Link, useLocation } from "react-router-dom";
import BreadcrumbsBg from "@assets/images/breadcrumbs-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Breadcrumbs() {

    const { pathname } = useLocation();

    if (pathname === '/') return null; // Don't render breadcrumbs on the home page

    const pathnames = pathname.split('/').filter(x => x);

    const filteredPathnames = pathnames.filter(name => {
        const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(name);
        return !isUuid;
    });

    return (
        <nav aria-label="Breadcrumb" className="breadcrumbs h-20 sm:h-30 relative">
            {/* Background */}
            <img
                src={BreadcrumbsBg}
                alt="breadcrumbs"
                className="w-full h-full object-cover"
            />
            <div className="container absolute z-1 left-1/2 top-1/2 -translate-1/2 flex items-center gap-2">
                {/* Home */}
                <Link
                    to={'/'}
                    title="Home"
                    aria-label="Home"
                    className="text-grey-500 text-xl sm:text-2xl transition duration-200 ease-out hover:text-primary"
                >
                    <FontAwesomeIcon icon={faHouse} />
                    <span className="sr-only">Go to Home Page</span>
                </Link>
                {/* Separator */}
                <FontAwesomeIcon icon={faAngleRight} className="text-grey-500" />
                {/* Routes */}
                {
                    filteredPathnames.map((name, index) => {
                        const routeTo = `/${filteredPathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === filteredPathnames.length - 1;

                        return (
                            <React.Fragment key={routeTo}>
                                {isLast ? (
                                    <span className="text-primary sm:text-lg font-medium capitalize">
                                        {name.replace(/-/g, ' ')}
                                    </span>
                                ) : (
                                    <React.Fragment>
                                        <Link
                                            to={routeTo}
                                            className="text-grey-500 text-lg font-medium hover:text-primary capitalize"
                                        >
                                            {name.replace(/-/g, ' ')}
                                        </Link>
                                        <FontAwesomeIcon icon={faAngleRight} className="text-grey-500" />
                                    </React.Fragment>
                                )}
                            </React.Fragment>
                        );
                    })
                }
            </div>
        </nav>
    )
}

export default Breadcrumbs;