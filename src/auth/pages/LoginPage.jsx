import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form className="formAuth">
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
          <Grid size={{ xs: 12, sm: 6 }}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Button variant="outlined" fullWidth>
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
