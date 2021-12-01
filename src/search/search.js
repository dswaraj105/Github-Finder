import { useState } from "react";

// Imports from the material UI library
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

// Importing my components
import Header from "./header/Header";
import SearchInput from "./searchInput/SearchInput";
import cssClasses from "./search.module.css";
import Users from "./Users/Users";

// The keys are here and not in .env file
// so that you can easily access the codes
const client_id = "51d62b7141f20f79d97a";
const client_secret = "5c849a657c2bef881b43b99f6c7192f67c99f237";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");       // 2-way binding for search key
  const [userList, setUserList] = useState([]);         // the user list for the search key
  const [page, setPage] = useState(1);                  // to track the page to be rendered next

  // handeling the form submittion to find the users
  const submitFormHandler = (e) => {
    e.preventDefault();

    // Checking if the key is empty
    if(searchKey === ""){
      return;
    }

    // Storing the search term
    let name = searchKey;

    //Resetting the page to 1 so as for upcomming searches
    setPage(1);

    // fetching data from github api
    fetch(
      "http://api.github.com/search/users?q=" +
        name +
        "&page=" +
        page +
        "&per_page="+
        16+
        "&client_id=" +
        client_id +
        "&client_secret=" +
        client_secret
    )
      .then((res) => res.json())
      .then((data) => {

        // Setting the data in the state
        setUserList(data.items);

        console.log("page1");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // For fetching the data if user reaches to the end and asks more data
  const fetchNewPage = () => {

    // fetching the search key
    let name = searchKey;

    // finding next page to be searched
    const pageno = page + 1;
    // console.log("Fetching More");

    // Fetching the data
    fetch(
      "http://api.github.com/search/users?q=" +
        name +
        "&page=" +
        pageno +
        "&per_page="+
        4 +
        "&client_id=" +
        client_id +
        "&client_secret=" +
        client_secret
    )
      .then((res) => res.json())
      .then((data) => {

        // getting a copy of data
        const users = [...userList];

        // adding new members
        for(let i=0; i<data.items.length; i++){
          users.push(data.items[i]);
        }

        // updating the state
        setUserList(users);
      })
      .catch((err) => {
        console.log(err);
      });

      // setting page no to the state
      setPage(pageno);
  }

  // binding helper function for search key
  const searchKeyChangedHandler = (e) => {
    setSearchKey(e.target.value);
  };

  // Clearing the Sections
  const clearSearchBoxHandler = () => {
    setSearchKey("");
    setUserList([]);
  }

  return (
    <Paper elevation={3} className={cssClasses.Search}>
      <Header />
      <SearchInput
        formSubmit={submitFormHandler}
        searchkey={searchKey}
        changed={searchKeyChangedHandler}
        clear={clearSearchBoxHandler}
      />
      <Divider className={cssClasses.line} style={{ margin: "20px 0" }} />
      <Users list={userList} fetchMore={fetchNewPage} />
    </Paper>
  );
};

export default Search;
