import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableTemporaryDrawer from "../Drawer";
import logoFull from "../../assets/logo-full.jpeg";
import "./AppBar.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SwipeableTemporaryDrawer />
          <h3 className="appTitle">TArtooAi</h3>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <div className="img-container">
              <img alt="Logo of the company" src={logoFull} />
            </div>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
