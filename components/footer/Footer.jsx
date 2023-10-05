import React from "react";
import FooterLinks from "./FooterLinks";

const Footer = () => {
    return (
        <footer className="bg-black text-white w-full min-h-96 p-10">
            <div className="md:flex md:w-4 /5 md:justify-between">
                <div></div>
                <div className="md:flex md:justify-items-end md:space-x-10">
                    <FooterLinks
                        section="SHOP"
                        links={[
                            "Special Prices",
                            "Pokemon",
                            "Disny",
                            "Marvel",
                            "NEW IN",
                            "Signature",
                        ]}
                    />

                    <FooterLinks
                        section="TRENDING"
                        links={[
                            "Oversized Shirts",
                            "Oversized T-shirt",
                            "Basic",
                            "Bottoms",
                            "Polo",
                            "CO-ORD Sets",
                        ]}
                    />

                    <FooterLinks
                        section="HELP"
                        links={["Wishlist", "Terms & Conditions"]}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
