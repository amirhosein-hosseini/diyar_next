import React from "react";
import styles from "./styles.module.scss";
import { PrimaryBtn } from "../button";
import AnimatedNumber from "../animation/animatedNumber";
import ParticlesAnimation from "../animation/Particles";
import Link from "next/link";
import HeroSlider from "../slider/heroSlider";

const Hero = ({data}) => {
    return(
        <>
            <div className={styles.hero}>   
                <HeroSlider />
            </div>
        </>
    )
}

export default Hero;