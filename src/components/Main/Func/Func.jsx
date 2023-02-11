import React from 'react';
import styles from './Func.module.css';
import '../../../App.css'
import FuncItem from "./FuncItem/FuncItem";

const Func = (props) => {
    return (
        <div id="func" className={styles.general}>
            <div className="container">
                <div className={styles.title_box}>
                    <span className={styles.title}>What can you do?</span>
                </div>
                <div className={styles.inner}>
                    {props.func.map(f => <FuncItem key={f.id} num={props.num} itemTitle={f.itemTitle} itemText={f.itemText} img={f.img} path={f.path}/>)}
                </div>
            </div>
        </div>
    )
};

export default Func;
