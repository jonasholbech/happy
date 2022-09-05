import { useState } from "react";
import { Button, Input, Rate } from "antd";

import Answer from "./Answer";

import "./App.css";

function App() {
  const [answers, setAnswers] = useState([
    {
      name: "Birk",
      stars: 1,
    },
  ]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  function addAnswer(e) {
    e.preventDefault();
    setAnswers((answers) =>
      answers.concat({
        name: name,
        stars: rating,
      })
    );
  }
  return (
    <div className="App">
      <MyHeader />
      {answers.map((answer) => {
        return <Answer name={answer.name} stars={answer.stars} />;
      })}
      <p>You have selected {rating}</p>
      <form onSubmit={addAnswer}>
        <Input
          onInput={(e) => setName(e.target.value)}
          placeholder="Your name please"
        />
        <Rate onChange={(e) => setRating(e)} name="rate" />
        <Button htmlType="submit" type="primary">
          Add an answer
        </Button>
      </form>
    </div>
  );
}

function MyHeader() {
  return (
    <header>
      <nav>
        <a href="#">this is a link</a>
        <a href="#">this is a link</a>
        <a href="#">this is a link</a>
        <a href="#">this is a link</a>
      </nav>
    </header>
  );
}
export default App;
