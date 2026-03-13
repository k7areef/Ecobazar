import AppLogo from "@components/common/AppLogo";
import { Link } from "react-router-dom";
import links from "@data/footer_links.json";

function Footer() {
    return (
        <footer className="bg-grey-900 text-white">
            <div className="container">
                {/* Footer Content */}
                <div className="footer-content py-5 md:py-10 flex lg:items-center gap-5 max-lg:flex-col">
                    {/* About */}
                    <div className="footer-about max-lg:w-full lg:w-130">
                        <AppLogo />
                        <p className="my-5">
                            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
                        </p>
                        <div className="footer-about-links flex items-center gap-2">
                            {/* Phone */}
                            <a
                                href="tel:+201122124968"
                                aria-label="Phone"
                                title="Phone"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 transition duration-200 ease-out hover:text-primary pb-2 border-b-2 border-b-primary"
                            >
                                +20 1122 124 968
                            </a>
                            {/* or */}
                            <span className="text-grey-500!">or</span>
                            {/* Email */}
                            <a
                                href="mailto:kh3reef@gmail.com"
                                aria-label="Email"
                                title="Email"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 transition duration-200 ease-out hover:text-primary pb-2 border-b-2 border-b-primary"
                            >
                                kh3reef@gmail.com
                            </a>
                        </div>
                    </div>
                    {/* Links */}
                    <div className="footer-links w-full grid grid-cols-2 lg:grid-cols-4 gap-3">
                        {
                            links.map((linksItem, index) => (<div className="links-container" key={index}>
                                <h3 className="links-label mb-2 text-lg font-medium">{linksItem.label}</h3>
                                <ul>
                                    {
                                        linksItem.links.map((link, index) => (<li key={index}>
                                            <Link to={link.to} className="text-grey-400 transition duration-200 ease-out hover:text-white py-1 inline-block">{link.label}</Link>
                                        </li>))
                                    }
                                </ul>
                            </div>))
                        }
                    </div>
                </div>
                {/* Copyright */}
                <div className="copyright flex items-center justify-between py-5 border-t border-t-grey-700">
                    <p className="text-grey-500! font-medium">Ecobazar eCommerce © {new Date().getFullYear()}. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;