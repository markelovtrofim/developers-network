import React from 'react';
import styles from './header.module.css';
import '../../App.css';
import { NavLink } from 'react-router-dom';
import { AccountSvg } from '../common/Svg';

const Header = (props) => {
    return (
        <header className={styles.general}>
            <div className="container">
                <div className={styles.inner}>
                    <NavLink className={styles.logo_link} to="/" title="Main page"><h1 className={styles.logo_left}>DEVELOPERS</h1><h1 className={styles.logo_right}>NETWORK</h1></NavLink>
                    <div style={{display: 'flex', alignItems: "cneter"}}>
                        <div style={{marginRight: "50px"}}>{props.navData.map(d => <NavLink className={styles.link} activeClassName={styles.active} key={d.id} to={d.link}><span>{d.text}</span></NavLink>)}</div>
                        <div className={styles.login}>
                            {props.isAuth
                                ? <NavLink className={styles.login_link} activeClassName={styles.active_login} to={"/profile/" + props.id} title="Profile"><AccountSvg className={styles.login_icon} />{props.login}</NavLink>
                                : <NavLink className={styles.login_link} activeClassName={styles.active_login} to="/login" title="Log in"><AccountSvg className={styles.login_icon} />Sign In</NavLink>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header
