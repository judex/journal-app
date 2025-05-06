import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"


export const NavBar = ({drawerWidth}) => {
  return (
    <AppBar position="fixed"
    sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` }, 
        ml: { sm: `${drawerWidth}px` } }}
    >
        <Toolbar>
            <IconButton 
                color="inherit" 
                edge="start" 
                sx={{mr: 2, display: { sm: "none" }}}
                onClick={() => console.log("open drawer")}>
                <MenuOutlined />
            </IconButton>
            <Grid 
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{width: "100%"}}
            >
                <Typography variant="h6" noWrap component='div'>Journal App</Typography>
                <IconButton color="error" onClick={() => console.log("logout")}>
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
