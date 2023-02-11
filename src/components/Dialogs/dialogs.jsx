import React from 'react';
import style from './dialogs.module.css';
import '../../index.css';
import Dialog from "./DialogItem/dialog_item";
import Message from "./Message/message";
import { Field, reduxForm } from "redux-form";

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name="message" component="textarea" /></div>
            <button>Add message for you</button>
        </form>
    )
}
const DialogsFormRedux = reduxForm({ form: "message" })(DialogsForm)

const Dialogs = (props) => {
    let messagesElement = props.messages.map(m => <Message message={m.message} key={m.id} />);

    const addMessage = (message) => {
        props.addMessage(message.message)
        message.message = ''
    }

    return (
        <div>
            <div className={style.general}>
                <div className={style.messages__inner}>
                    {messagesElement}
                    <DialogsFormRedux onSubmit={addMessage} />
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
