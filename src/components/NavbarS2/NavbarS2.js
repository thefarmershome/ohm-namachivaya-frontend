import React from "react";
import HeaderS2 from '../headerS2/HeaderS2';
import './navbarPremium.css';

export default function Navbar(props) {
    const [scroll, setScroll] = React.useState(0);
    const navRef = React.useRef(null);
    const [navHeight, setNavHeight] = React.useState(0);

    const handleScroll = () => setScroll(document.documentElement.scrollTop);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    React.useEffect(() => {
        if (navRef.current) {
            setNavHeight(navRef.current.offsetHeight);
        }
    }, []);

    const isScrolled = scroll > 80;
    const baseClass = "fixed-navbar";
    const transparentClass = props.isTransparent ? " navbar-transparent" : "";
    const activeClass = isScrolled ? " active" : "";
    const className = baseClass + transparentClass + activeClass;

    return (
        <>
            <div ref={navRef} className={className}>
                <HeaderS2
                    hclass={props.hclass}
                    Logo={props.Logo}
                    topbarClass={props.topbarClass}
                    isTransparent={props.isTransparent && !isScrolled}
                />
            </div>
            {/* Spacer prevents content jump when navbar becomes fixed on scroll */}
            {!props.isTransparent && isScrolled && (
                <div className="navbar-spacer" style={{ height: navHeight }} />
            )}
        </>
    );
}
