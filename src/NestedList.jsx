import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

export default function NestedList({toggleDrawer}) {
    
    const handleClick = () => {
        console.log("handleClick called");
        setOpen(!open);
    };

    const handleClick2=()=>{
        toggleDrawer()
    }

    const [open, setOpen] = React.useState();
   
    const navigate = useNavigate();

    return (
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemText primary="Pages" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                    <ListItem button onClick={handleClick2}>
                        <ListItemText primary="Team"  />
                    </ListItem>
                    <ListItem button onClick={handleClick2}>
                        <ListItemText primary="Success Stories" onClick={() => navigate("/events")} />
                    </ListItem>
                    <ListItem button onClick={handleClick2}>
                        <ListItemText primary="Become a volunteer" onClick={() => navigate("/becomevolunteer")} />
                    </ListItem>
                    <ListItem button onClick={handleClick2}>
                        <ListItemText primary="Implementation process" onClick={() => navigate("/implementationProcess")} />
                    </ListItem>
                </List>
            </Collapse>
        </div>
    );
}
