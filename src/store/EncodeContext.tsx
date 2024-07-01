/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { Items, Item } from "../data.ts";

type encodeContextInterface = {
  encoder: Item;
  showTab: (text: string) => void;
  displayUrl: (text: string) => void;
  displayBase: (text: string) => void;
  displayQRCode: (text: string) => void;
};
export const EncodeContext = createContext({} as encodeContextInterface);

const EncodeContextProvider: React.FC<{ children: any }> = (props) => {
  const [currentEncoder, setCurrentEncoder] = useState(Items[0]);

  function showTab(text: string) {
    console.log(text);
    if (text === "URL") {
      setCurrentEncoder(Items[0]);
    } else if (text === "Base 64") {
      setCurrentEncoder(Items[1]);
    } else if (text === "QR Code") {
      setCurrentEncoder(Items[2]);
    }
  }

  function displayUrl(text: string) {
    console.log(text);
  }
  function displayBase(text: string) {
    console.log(text);
  }
  function displayQRCode(text: string) {
    console.log(text);
  }

  const contextValue: encodeContextInterface = {
    encoder: currentEncoder,
    showTab,
    displayUrl,
    displayBase,
    displayQRCode,
  };

  return (
    <EncodeContext.Provider value={contextValue}>
      {props.children}
    </EncodeContext.Provider>
  );
};

export default EncodeContextProvider;
