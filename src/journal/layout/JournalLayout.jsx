import { Box, Toolbar } from "@mui/material";
import 'animate.css';
import { NavBar, SideBar } from "../ui";

const drawerWidth = 240;
export const JournalLayout = ({ children }) => {
  return (
    <Box className="journal animate__animated animate__fadeIn animate__faster" sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} ></SideBar>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
