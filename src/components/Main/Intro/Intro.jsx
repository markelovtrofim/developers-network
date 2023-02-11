import React from 'react';
import '../../../App.css';
import styles from './Intro.module.css';
import {Link} from "react-scroll";

const Intro = () => {
    return (
        <div className={styles.general}>
            <div className="container">
                <div className={styles.inner}>
                    <h1>Developers network</h1>
                    <p>- hi, this is a social network for front-end developers and about front-end developers</p>
                    <Link className={styles.button} to='func' spy={true} smooth={true} duration={1000} offset={-70}>
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Intro;
