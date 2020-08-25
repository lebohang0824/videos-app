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

        const [name, email] = e.target;

        console.log(name.value, message.value);
    }
    
    return (
        <form onSubmit={onSubmit} autoComplete="off">

            <TextField
                id="name"
                fullWidth
                label="Full Name"
                placeholder="Full Name"
                helperText="Enter your name and surname"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />

            <TextField
                id="email"
                fullWidth
                label="Email"
                placeholder="Email"
                helperText="Enter your surname"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />

            <TextField
                rows={4}
                fullWidth
                multiline
                id="message"
                label="Message"
                placeholder="Message"
                helperText="Message"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
        
            <Button
                type="submit"
                color="primary"
                variant="contained">
                Comment
            </Button>

        </form>
    );
}

export default Comment;