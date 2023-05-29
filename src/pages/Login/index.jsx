import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState('');

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    };

    return (
        <Grid item xs={12}>
            <TextField
                fullWidth
                id="login_nome"
                label="Login"
                value={login}
                onChange={handleLoginChange}
                helperText="Login."
            />
        </Grid>
    );
}

export default Login;
