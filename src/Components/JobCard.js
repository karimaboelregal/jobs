import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import BasicCard from "./FilterCard";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function JobCard({ name, company, image, details, skills, updateTags, featured, newCard }) {
    return (
        <Card sx={featured ? { minWidth: 250, backgroundColor: "white", borderRadius: "5px", borderLeft: "5px solid #4da6a6 " } : { minWidth: 250, backgroundColor: "white", borderRadius: "5px" }}>
            <Box sx={{ display: "flex", p: 3, justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", paddingLeft: "30px", }}>
                    <Avatar
                        alt=""
                        src={image}
                        sx={{ width: 90, height: 90 }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: "20px", paddingTop: "5px", gap: "5px" }}>
                        <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>
                            <Typography sx={{ fontWeight: "bold", color: "#4da6a6" }}>
                                {company}
                            </Typography>
                            {featured ? <Typography sx={{ fontWeight: "bold", color: "white", backgroundColor: "black", borderRadius: "20px", padding: "5px", fontSize: "12px" }}>
                                Featured
                            </Typography>:""}
                            {newCard ? <Typography sx={{ fontWeight: "bold", color: "white", backgroundColor: "#4da6a6", borderRadius: "20px", padding: "5px", fontSize: "12px" }}>
                                New
                            </Typography>:""}

                        </Box>
                        <Typography sx={{ fontWeight: "bold" }}>
                            {name}
                        </Typography>
                        <Box sx={{ display: "flex", gap: "10px", color: "grey" }}>
                            {details.map((value, index) => {
                                return (<Box sx={{ display: "flex", width: "fit-content", justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography sx={{ fontSize: "12px", paddingRight: "10px" }}>{value}</Typography>
                                    {index !== (details.length - 1) ? <FiberManualRecordIcon sx={{ fontSize: "5px" }} /> : ""}
                                </Box>)

                            })}
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {skills.map((value, index) => {
                        return <BasicCard name={value} updateTags={updateTags} />
                    })}
                </Box>
            </Box>
        </Card>
    );
}