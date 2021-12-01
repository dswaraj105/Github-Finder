// Material ui imports
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

import cssClasses from "./SearchInput.module.css";

const SearchInput = (props) => {
  return (
    <form
      className={cssClasses.form}
      noValidate
      autoComplete="off"
      onSubmit={props.formSubmit}
    >
      <Button type="submit" variant="text">
        <SearchIcon style={{ fontSize: "3rem", color: "#333" }} />{" "}
      </Button>
      <TextField
        id="input"
        label="Search User"
        variant="outlined"
        value={props.searchkey}
        onChange={props.changed}
        style={{ width: "260px" }}
      />
      {props.searchkey && (
        <Button variant="text">
          <CloseIcon onClick={props.clear} style={{ fontSize: "3rem", color: "#333" }} />{" "}
        </Button>
      )}
    </form>
  );
};

export default SearchInput;
