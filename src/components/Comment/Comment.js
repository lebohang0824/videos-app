import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Styles from './Comment.module.scss'

const Comment = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [comment, setComment] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        
        console.log(name, email, comment);
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
    
    return (
        <form onSubmit={onSubmit} autoComplete="off">

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