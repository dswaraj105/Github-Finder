import { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

// Material ui imports
import Paper from "@mui/material/Paper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import cssClasses from "./User.module.css";

// The keys are here and not in .env file
// so that you can easily access the codes
const client_id = "d94cf4f7294db13d554f";
const client_secret = "694cd28a983eb593131d2f74a1036d3e67aa223b";

const User = (props) => {
  const [user, SetUser] = useState({});
  const history = useHistory();

  const url = props.url;

  const urlM = useMemo(() => url, [url]);

  // Fetching detailed data for the usesr
  useEffect(() => {
    fetch(urlM + "?&client_id=" + client_id + "&client_secret=" + client_secret)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        SetUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [urlM]);

  // Taking user to the next page for displaying the details
  const clickHandler = () => {
    if (user.login) {
      history.push("/details/" + user.login);
    }
  };

  return (
    <Paper
      elevation={2}
      style={{
        width: "43%",
        padding: "10px",
        display: "flex",
        height: "76px",
        margin: "10px",
        overflow: "hidden",
      }}
      onClick={clickHandler}
    >
      <div>
        <AccountCircleIcon style={{fontSize: '2rem', marginRight: "5px"}} className={cssClasses.accountIcon} />
      </div>
      <div>
        <div className={cssClasses.name}>{user.name}</div>
        <div className={cssClasses.details}>
          @{user.login}, {user.bio}
        </div>
      </div>
    </Paper>
  );
};

export default User;
