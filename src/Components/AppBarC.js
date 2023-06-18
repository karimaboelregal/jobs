import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import BasicCard from "./FilterCard.js";

export default function ButtonAppBar({ tags, removeTag, removeAllTags }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#4da6a6", padding: 5, marginBottom: "90px" }}>
        <Toolbar>
          {tags.length > 0 ?
            <Box sx={{ padding: 3, display: "flex", backgroundColor: "#f0fafb", justifyContent: "space-between", alignItems: "center", borderRadius: "5px", boxShadow: "0 0 11px rgba(33, 33, 33, 0.2)", position: "absolute", top: "100%", left: "50%", transform: "translate(-50%, 0)", width: "70%" }}>
              <Box sx={{ width: "80%", display: "flex", gap: "10px", flexWrap:"wrap" }}>
                {tags.map((value,index) => {
                  return <BasicCard close={true} name={value} updateTags={removeTag} />
                })}
              </Box>

              <Button onClick={removeAllTags} variant="text" sx={{ color: "#4da6a6" }}>Clear</Button>

            </Box> : ""}
        </Toolbar>
      </AppBar>
    </Box>
  );
}