import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form className="formAuth">
      <Grid size={12}>
          <TextField
            label="Nombre completo"
            type="text"
            placeholder="Nombre completo"                  
            fullWidth
          ></TextField>
        </Grid>        
        <Grid size={12}>
          <TextField
            label="Email"
            type="email"
            placeholder="correo@mail.com"
            fullWidth
          ></TextField>
        </Grid>
        <Grid size={12}>
          <TextField label="Password" type="password" fullWidth></TextField>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Button variant="contained" fullWidth>
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
