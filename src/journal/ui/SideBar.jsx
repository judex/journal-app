import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, List, ListItem, Toolbar, Typography, ButtonGroup, Button, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material"

export const SideBar = ({drawerWidth}) => {
  return (
    <Box 
        component='nav' 
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}} >
            <Drawer 
                variant="permanent" 
                open
                sx={{
                    display: {xs: "block"},
                    "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth}}}
                >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>Marcelo Sulca</Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"].map(text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'lorem10 lorem10 lorem10 lorem10'} />
                                </Grid>
                            </ListItemButton>                            
                        </ListItem>
                    ))}
                </List>
            </Drawer>
    </Box>
  )
}
