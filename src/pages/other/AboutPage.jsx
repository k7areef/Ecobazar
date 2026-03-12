import useChangeTitle from "@hooks/useChangeTitle";

function AboutPage() {
    useChangeTitle({ title: 'About' });
    return (
        <div className="about-page">
            AboutPage
        </div>
    )
}

export default AboutPage;