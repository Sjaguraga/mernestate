import { useState } from "react";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  const [keyWord, setKeyWord] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(keyWord);
    setKeyWord("");
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyWord(e.target.value)}
        value={keyWord}
        placeholder="Search..."
        className="mr-sm-2-sm-5"
      ></Form.Control>
    </Form>
  );
};

export default SearchBox;
