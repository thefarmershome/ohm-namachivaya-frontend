import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import founderImg from '../../images/team/image-1.png';

const TeamSection = () => {
    return (
        <section className="wpo-team-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle subtitle={'OUR FOUNDER'} title={'Meet Our Founder'} />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-5 col-12 mb-4 mb-md-0">
                        <div style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                        }}>
                            <img
                                src={founderImg}
                                alt="Akash - Founder"
                                style={{ width: '100%', display: 'block' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7 col-12">
                        <div style={{ paddingLeft: '10px' }}>
                            <h2 style={{
                                fontSize: '32px',
                                fontWeight: '700',
                                color: '#0f6a45',
                                marginBottom: '8px',
                            }}>
                                Akash
                            </h2>
                            <span style={{
                                fontSize: '18px',
                                color: '#666',
                                display: 'block',
                                marginBottom: '20px',
                                fontStyle: 'italic',
                            }}>
                                Founder &amp; Visionary
                            </span>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#555',
                                marginBottom: '15px',
                            }}>
                                Hailing from Coimbatore, Tamil Nadu, Akash founded Ohm Namachivaya with a
                                passion for organic farming and sustainable agriculture. With deep roots in
                                the agricultural heritage of South India, he envisions bringing pure,
                                chemical-free produce directly from farm to table.
                            </p>
                            <p style={{
                                fontSize: '15px',
                                lineHeight: '1.7',
                                color: '#777',
                            }}>
                                <i className="ti-location-pin" style={{ color: '#0f6a45', marginRight: '6px' }}></i>
                                Coimbatore, Tamil Nadu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
