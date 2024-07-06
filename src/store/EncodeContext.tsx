/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { Items, Item } from "../data.ts";
import { Buffer } from "buffer";

type encodeContextInterface = {
  encoder: Item;
  showTab: (text: string) => void;
  userText: string;
  setUserText: (text: string) => void;
  showResult: (text: string) => void;
  result: string;
  viewResult: boolean;
  setViewResult: (string: boolean) => void;
};
export const EncodeContext = createContext({} as encodeContextInterface);

const EncodeContextProvider: React.FC<{ children: any }> = (props) => {
  const [currentEncoder, setCurrentEncoder] = useState(Items[0]);
  const [enteredText, setEnteredText] = useState("");
  const [result, setResult] = useState("");
  const [viewResult, setViewResult] = useState(false);

  function showTab(text: string) {
    setViewResult(false);
    setEnteredText("");

    if (text === "URL") {
      setCurrentEncoder(Items[0]);
    } else if (text === "Base 64") {
      setCurrentEncoder(Items[1]);
    } else if (text === "QR Code") {
      setCurrentEncoder(Items[2]);
    }
  }

  function showResult(text: string) {
    let displayResult = "";
    if (currentEncoder === Items[0]) {
      displayResult = encodeURIComponent(text);
    }
    if (currentEncoder === Items[1]) {
      displayResult = Buffer.from(text, "binary").toString("base64");
    }
    console.log(displayResult);
    setResult(displayResult);
  }

  const contextValue: encodeContextInterface = {
    encoder: currentEncoder,
    showTab,
    userText: enteredText,
    setUserText: setEnteredText,
    showResult,
    result,
    viewResult,
    setViewResult,
  };

  return (
    <EncodeContext.Provider value={contextValue}>
      {props.children}
    </EncodeContext.Provider>
  );
};

export default EncodeContextProvider;
