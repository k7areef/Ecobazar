import CompanyLogo from "@components/sections/CompanyLogo";
import Testimonials from "@components/sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";

function AboutPage() {
    useChangeTitle({ title: 'About' });
    return (
        <div className="about-page">
            <Testimonials />
            <CompanyLogo />
        </div>
    )
}

export default AboutPage;