import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({children , title=""}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid
        container
        className="box-shadow"
        direction="column"
        spacing={2}
        sx={{
          maxWidth: 420,
          width: "100%",
          backgroundColor: "white",
          py: 12,
          px: 7,
          borderRadius: 2,
        }}
      >
        <Grid size={12}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            {title}
          </Typography>
        </Grid>
        {children}        
      </Grid>
    </Grid>
    
  )
}
