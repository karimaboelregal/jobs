import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';


export default function BasicCard({ close = false, name, updateTags }) {

    const updateName = () => {
        updateTags(name);
    }

    return (
        <Card sx={{ minWidth: 40, backgroundColor: "#e6f2f2", width: "fit-content" }}>
            {close ?
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography sx={{ padding: 1, color: "#4da6a6", fontWeight: "bold", fontSize: "15px" }}>{name}</Typography>
                    {close ?
                        <IconButton onClick={updateName} sx={{ backgroundColor: "#4da6a6", color: "white", borderRadius: "0px", "&:hover": { backgroundColor: "black" } }}>
                            <CloseIcon />
                        </IconButton> : ""}
                </Box> :

                <CardActionArea onClick={updateName} sx={{"&:hover": {backgroundColor: "#4da6a6", color: "white"}}}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography sx={{ padding: 1, color: "#4da6a6", fontWeight: "bold", fontSize: "15px", "&:hover": {color: "white" }}}>{name}</Typography>
                        {close ?
                            <IconButton sx={{ backgroundColor: "#4da6a6", color: "white", borderRadius: "0px", "&:hover": { backgroundColor: "black" } }}>
                                <CloseIcon />
                            </IconButton> : ""}
                    </Box>
                </CardActionArea>}
        </Card>
    );
}