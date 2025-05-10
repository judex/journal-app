import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { checkingCredentials, startGoogleSignIn } from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";


const formLogin = {
  email: 'msn.dproyect@gmail.com',
  password: '123456'
} 

export const LoginPage = () => {

  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange }= useForm(formLogin);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingCredentials()); 
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
      <form className="formAuth" onSubmit={onSubmit}>
        <Grid size={12}>
          <TextField
            label="Email"
            type="email"
            name="email"
            onChange={onInputChange}
            value={email}
            placeholder="correo@mail.com"
            fullWidth
          ></TextField>
        </Grid>
        <Grid size={12}>
          <TextField 
            label="Password" 
            type="password" 
            fullWidth
            name="password"
            onChange={onInputChange}
            value={password}
          ></TextField>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Button 
              disabled={isAuthenticating}
              type="submit" 
              variant="contained" 
              fullWidth>
              Login
            </Button>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Button 
              type="button" 
              disabled={isAuthenticating}
              onClick={onGoogleSignIn} 
              variant="outlined" 
              fullWidth
              >
              <Google sx={{ mr: 1 }} />
              Google
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="end" sx={{ mt: 2 }}>
          <Link
            component={RouterLink}
            color="inherit"
            to="/auth/register"
            sx={{ fontSize: 14, opacity: 0.7, "&:hover": { opacity: 1 } }}
          >
            Crear una cuenta
          </Link>
        </Grid>
      </form>  
    </AuthLayout>
  );
};
