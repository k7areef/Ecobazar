import teamMembers from "@data/teamMembers.json";
import SectionHeader from "./shared/SectionHeader";
import TeamImage1 from "@assets/images/team/team-1.png";
import TeamImage2 from "@assets/images/team/team-2.png";
import TeamImage3 from "@assets/images/team/team-3.png";
import TeamImage4 from "@assets/images/team/team-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faPinterest, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const teamImages = [TeamImage1, TeamImage2, TeamImage3, TeamImage4];

function TeamSection() {
    return (
        <section className="team-section py-5 md:py-10 bg-[#fbfbfb]" id="team">
            <div className="container">
                <SectionHeader
                    title="Our Awesome Team"
                    description="Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi."
                    className="text-center"
                />

                <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {teamMembers.map((member, index) => (
                        <div
                            key={`${member.name}-${index}`}
                            className="team-card bg-white border border-grey-100 rounded-lg overflow-hidden transition duration-300 hover:shadow-md relative"
                        >
                            <div className="team-image bg-green-50 flex items-center justify-center relative group">
                                <img
                                    src={teamImages[index]}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                                {/* Social overlay */}
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <div className="flex space-x-3">
                                        <a href="#" aria-label="Facebook" className="text-white hover:text-primary transition">
                                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                                        </a>
                                        <a href="#" aria-label="Twitter/X" className="text-white hover:text-primary transition">
                                            <FontAwesomeIcon icon={faXTwitter} size="2x" />
                                        </a>
                                        <a href="#" aria-label="Pinterest" className="text-white hover:text-primary transition">
                                            <FontAwesomeIcon icon={faPinterest} size="2x" />
                                        </a>
                                        <a href="#" aria-label="Instagram" className="text-white hover:text-primary transition">
                                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-content p-4">
                                <h3 className="text-base font-medium">{member.name}</h3>
                                <p className="text-sm text-grey-500">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
