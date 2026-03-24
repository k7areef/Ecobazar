import features from "@data/features.json";
import { faHeadphones } from "@fortawesome/free-regular-svg-icons";
import { faBoxOpen, faMoneyBillTransfer, faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconsMaper = {
    fastShipping: faShippingFast,
    greatSupport: faHeadphones,
    securePaymanet: faMoneyBillTransfer,
    monyBack: faBoxOpen,
}

function Features() {
    return (
        <section className="features-section" id="features">
            <div className="container">
                {/* Features */}
                <div className="features-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {
                        features.map((feature, index) => (<div className="feature-card p-3 md:p-5 text-center border-b-2 border-b-grey-100 transition-colors duration-200 sm:hover:border-b-primary" key={index}>
                            <div className="feature-image mx-auto w-16 h-16 rounded-full flex items-center justify-center bg-primary/15 text-2xl text-primary mb-3">
                                <FontAwesomeIcon icon={iconsMaper[feature.icon]} />
                            </div>
                            <h3 className="font-semibold text-lg mb-1">{feature.name}</h3>
                            <p>{feature.description}</p>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default Features;