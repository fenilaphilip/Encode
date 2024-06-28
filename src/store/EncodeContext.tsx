/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";

type encodeContextInterface = {
  showUrl: (text: string) => void;
  showBase: (text: string) => void;
  showQRCode: (text: string) => void;
};
const EncodeContext = createContext<encodeContextInterface>({
  showUrl: () => "",
  showBase: () => "",
  showQRCode: () => "",
});

const EncodeContextProvider: React.FC<{ children: any }> = (props) => {
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
    showUrl: displayUrl,
    showBase: displayBase,
    showQRCode: displayQRCode,
  };

  return (
    <EncodeContext.Provider value={contextValue}>
      {props.children}
    </EncodeContext.Provider>
  );
};

export default EncodeContextProvider;
