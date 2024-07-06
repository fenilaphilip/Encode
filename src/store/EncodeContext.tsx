/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { Items, Item } from "../data.ts";

type encodeContextInterface = {
  encoder: Item;
  showTab: (text: string) => void;
  showResult: (text: string) => void;
  result: string;
};
export const EncodeContext = createContext({} as encodeContextInterface);

const EncodeContextProvider: React.FC<{ children: any }> = (props) => {
  const [currentEncoder, setCurrentEncoder] = useState(Items[0]);
  const [result, setResult] = useState("");

  function showTab(text: string) {
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
      console.log(displayResult);
    }
    setResult(displayResult);
  }

  const contextValue: encodeContextInterface = {
    encoder: currentEncoder,
    showTab,
    showResult,
    result,
  };

  return (
    <EncodeContext.Provider value={contextValue}>
      {props.children}
    </EncodeContext.Provider>
  );
};

export default EncodeContextProvider;
