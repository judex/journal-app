import { CircularProgress, Grid } from "@mui/material"

const CheckingAuth = () => {
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
            direction="column"
            spacing={2}
            alignContent={"center"}
            sx={{
            maxWidth: 450,
            width: "100%",            
            py: 12,
            px: 7,
            borderRadius: 2,
            }}
        >
            <CircularProgress color="warning" />
        </Grid>    
    </Grid>
  )
}

export default CheckingAuth