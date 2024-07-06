import React, { useState } from "react";
import Button from "./Button.tsx";

const Input: React.FC<{
  btnName: string;
  showResult: (text: string) => void;
}> = ({ btnName, showResult }) => {
  const [enteredText, setEnteredText] = useState("");

  let userEnteredText: string;
  function handleChange(text: string) {
    userEnteredText = text;
    setEnteredText(userEnteredText);
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    showResult(enteredText);
  };
  return (
    <form className="user-input" onSubmit={handleSubmit}>
      <label htmlFor="user-text">Enter Text</label>
      <input
        value={enteredText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(event.target.value)
        }
      />
      <Button type="submit">{btnName}</Button>
    </form>
  );
};
export default Input;
