import React from 'react';
import style from "../users.module.css";
import {Avatar, Time} from "../../Profile/General/ProfileGeneral";
import defaultUserImage from "../../../assets/img/default-user.png";
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={style.items}>
            {props.users.map(u => <div key={u.id} className={style.item}>
                <div className={style.inner}>
                    <Avatar width="50" height="50" img={u.photos.large != null ? u.photos.large : defaultUserImage}/>
                    <NavLink className={style.name} to={"/profile/" + u.id}>{u.name}</NavLink>
                    <Time text="Was online within our era" styles={style.time}/>
                    <div>
                        {u.followed ? <button className={style.unfollow} onClick={() => {props.isUnFollow(u.id)}}>Unfollow</button>
                                    : <button className={style.follow} onClick={() => {props.isFollow(u.id)}}>Follow</button>}
                    </div>
                </div>
            </div>)}
        </div>
    )

};

export default User;
