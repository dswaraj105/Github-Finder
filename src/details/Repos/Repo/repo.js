import { Paper } from '@mui/material';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import cssClasses from './Repo.module.css';

const Repo = (props) => {
  return (
    <Paper elevation={2} style={{display: 'flex', padding: "10px", margin: "10px"}}>
      <div>
      <AccountCircleIcon style={{fontSize: '2rem', color: 'skyblue', marginRight: '10px'}} />
      </div>
      <div>
        <p className={cssClasses.name} >{props.name}</p>
        <p className={cssClasses.desc} >{props.desc}</p>
      </div>
    </Paper>
  );
};  

export default Repo;