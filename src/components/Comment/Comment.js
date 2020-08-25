import React, { useState } from 'react'
import Styles from './Comment.module.scss'
import { Alert } from '@material-ui/lab'
import {
    Button,
    TextField
} from '@material-ui/core'

const Comment = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    // Response
    const [response, setResponse] = useState('');
    const [responseType, setResponseType] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();


        if (name.trim().length < 1) {
            errorAlert('Full names required!');
            return;
        }

        // Email Validation
        if (email.trim().length < 1 || !email.match(/\S+@\S+\.\S+/)) {
            errorAlert('Enter valid email address!');
            return;
        }

        if (comment.trim().length < 1) {
            errorAlert('Comment message required!');
            return;
        }

        successAlert('Thank you for your feedback!');
        
    }

    // Set Name on keyup
    const onSetName = ({ target }) => {
        setName(target.value);
    }
    
    // Set Email on keyup
    const onSetEmail = ({ target }) => {
        setEmail(target.value);
    }

    // Set Comment on keyup
    const onSetComment = ({ target }) => {
        setComment(target.value);
    }

    // Error message
    const errorAlert = (message) => {
        setResponseType('error');
        setResponse(message);
    }

    const successAlert = (message) => {
        setResponseType('success');
        setResponse(message);
    }
    
    return (
        <form onSubmit={onSubmit} autoComplete="off" className={Styles.form}>

            {response && responseType && (
                <Alert severity={responseType}>
                    {response}
                </Alert>
            )}

            <TextField
                id="name"
                fullWidth
                margin="normal"
                label="Full Name"
                placeholder="Full Name"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onKeyUp={onSetName}
            />

            <TextField
                id="email"
                fullWidth
                label="Email"
                margin="normal"
                placeholder="Email"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onKeyUp={onSetEmail}
            />

            <TextField
                rows={4}
                fullWidth
                multiline
                id="message"
                label="Message"
                margin="normal"
                placeholder="Message"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onKeyUp={onSetComment}
            />
        
            <Button
                fullWidth
                type="submit"
                color="primary"
                variant="contained">
                Comment
            </Button>

        </form>
    );
}

export default Comment;