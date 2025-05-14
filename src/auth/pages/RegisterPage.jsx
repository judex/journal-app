import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";

const formData ={
  email:'msn.dproyect@gmail.com',
  password: '123456',    
  displayName: 'Marcelo Sulca'
}

// esto ya es una validacion manual se puede usar la libreria de formik o yup.
const formValidations = {
  email: [(value) => value.includes('gmail.com'), 'El correo debe tener una @gmail.com'],
  password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {displayName, email, password, onInputChange, formState, 
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);


  const onSubmit = (event) => {    
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  }


  return (
    <AuthLayout title="Crear cuenta">      
      <form className="formAuth animate__animated animate__fadeIn animate__faster" onSubmit={onSubmit}>
      <Grid size={12}>
          <TextField
            label="Nombre completo"
            type="text"
            placeholder="Nombre completo"                  
            fullWidth
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            error={!!displayNameValid && formSubmitted}
            helperText={displayNameValid}
          ></TextField>
        </Grid>        
        <Grid size={12}>
          <TextField
            label="Email"
            type="email"
            placeholder="correo@mail.com"
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
            error={!!emailValid && formSubmitted}
            helperText={emailValid}            
          ></TextField>
        </Grid>
        <Grid size={12}>
          <TextField 
            label="Password" 
            type="password" 
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
            error={!!passwordValid && formSubmitted}
            helperText={passwordValid}
            >
          </TextField>
        </Grid>
        <Grid size={12} display={ errorMessage ? '' : 'none' }>
          <Alert severity="error">{errorMessage}</Alert>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Button 
              type="submit" 
              disabled={isCheckingAuthentication} 
              variant="contained" 
              fullWidth
            >
              Registrar
            </Button>
          </Grid>

        </Grid>
        <Grid container justifyContent="end" sx={{ mt: 2 }}>
          <Typography sx={{ fontSize: 14, mr: 1, color: "text.secondary"  }}>¿Ya tienes cuenta?</Typography>
          <Link
            component={RouterLink}
            color="inherit"
            to="/auth/login"
            sx={{ fontSize: 14, fontWeight: "bold", color: '#673AB7', "&:hover": { color: '#B83BB3' } }}
          >
            Iniciar sesión
          </Link>
        </Grid>
      </form>  
    </AuthLayout>
  );
};
