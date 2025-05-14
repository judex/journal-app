import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import 'animate.css';

export const NothingSelectedView = () => {
  return (
    <Grid
        className="animate__animated animate__fadeIn animate__faster" 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main", borderRadius: 3, color: "white" }}
    >
        <Grid size={12} sx={{ display:"flex"}} justifyContent={"center"}>
            <StarOutline sx={{ fontSize: 100, color: "white" }} />
        </Grid>
        <Grid size={12} sx={{ display:"flex"}} justifyContent={"center"}>
            <Typography variant="h5">Selecciona o crea una entrada</Typography>
        </Grid>
    </Grid>
  )
}
