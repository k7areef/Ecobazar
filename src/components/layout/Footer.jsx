import AppLogo from "@components/common/AppLogo";

const links = [
    // My Account
    {
        title: "My Account",
        links: [
            {
                label: "My Account",
                href: "href"
            },
            {
                label: "Order History",
                href: "href"
            },
            {
                label: "Shoping Cart",
                href: "href"
            },
            {
                label: "Wishlist",
                href: "href"
            }
        ]
    },
    // Helps
    {
        title: "Helps",
        links: [
            {
                label: "Contact",
                href: "href"
            },
            {
                label: "Faqs",
                href: "href"
            },
            {
                label: "Terms & Condition",
                href: "href"
            },
            {
                label: "Privacy Policy",
                href: "href"
            }
        ]
    },
    // Proxy
    {
        title: "Proxy",
        links: [
            {
                label: "About",
                href: "href"
            },
            {
                label: "Shop",
                href: "href"
            },
            {
                label: "Product",
                href: "href"
            },
            {
                label: "Track Order",
                href: "href"
            }
        ]
    },
    // Categories
    {
        title: "Categories",
        links: [
            {
                label: "Fruit & Vegetables",
                href: "href"
            },
            {
                label: "Meat & Fish",
                href: "href"
            },
            {
                label: "Bread & Bakery",
                href: "href"
            },
            {
                label: "Beauty & Health",
                href: "href"
            }
        ]
    }
];

function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-5 md:pt-10">
            <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10">
                <div className="footer-about lg:col-span-5">
                    <AppLogo className="mb-5" />
                    <p className="text-gray-500 mb-5">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                    <div className="flex sm:items-center gap-4 max-sm:flex-col">
                        <a
                            target="_blank"
                            href="https://wa.link/div698"
                            className="block w-fit pb-1.5 border-b border-b-primary hover:text-primary transition"
                        >
                            +20 1122124968
                        </a>
                        <span className="text-gray-500">Or</span>
                        <a
                            target="_blank"
                            href="mailto:kh3reef@gmail.com"
                            className="block w-fit pb-1.5 border-b border-b-primary hover:text-primary transition"
                        >
                            kh3reef@gmail.com
                        </a>
                    </div>
                </div>
                <div className="footer-links grid grid-cols-2 lg:grid-cols-4 lg:col-span-7 gap-5">
                    {
                        links.map((link, index) => (
                            <div className="link" key={index}>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3">{link.title}</h3>
                                <ul className="space-y-3">
                                    {
                                        link.links.map((item, index) => (
                                            <li key={index}>
                                                <a
                                                    href={item.href}
                                                    className="text-gray-500 hover:text-white transition"
                                                >
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="footer-copyright py-5">
                <div className="container">
                    <hr className="border-gray-800 mb-5" />
                    <div className="copyright-content flex items-center justify-between gap-5">
                        <p className="text-gray-600">Ecobazar eCommerce © {new Date().getFullYear()}. All Rights Reserved</p>
                        <div className="payments-supported flex items-center gap-2">
                            Payment Supported
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;