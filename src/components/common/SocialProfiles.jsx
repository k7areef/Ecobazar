import IconButton from "@components/UI/IconButton";
import { faFacebook, faGithub, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const profiles = [
    {
        href: "https://www.facebook.com/k7areef/",
        icon: faFacebook,
        name: "Facebook"
    },
    {
        href: "https://www.instagram.com/k7areef/",
        icon: faInstagram,
        name: "Instagram"
    },
    {
        href: "https://www.github.com/k7areef/",
        icon: faGithub,
        name: "Github"
    },
    {
        href: "https://www.pinterest.com/kh3reef/",
        icon: faPinterest,
        name: "Pinterest"
    }
];

/**
 * @param {React.HTMLAttributes<HTMLElement>} props
 */

function SocialProfiles({ ...props }) {
    return (
        <div className={`social-profile flex items-center gap-0.5 ${props.className}`}>
            {
                profiles.map((profile, index) => (<a
                    key={index}
                    target="_blank"
                    href={profile.href}
                >
                    <IconButton
                        type="button"
                        variant="ghost"
                    >
                        <span className="sr-only">{profile.name}</span>
                        <FontAwesomeIcon icon={profile.icon} className="text-xl" />
                    </IconButton>
                </a>))
            }
        </div>
    )
}

export default SocialProfiles