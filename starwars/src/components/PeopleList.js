import React, {useState} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


function PeopleList() {
    const [PeopleList, setPeople] = useState([]);



    return (
      <div>
          <h2>hello People</h2>
      </div>
    );
  }

export default PeopleList;
