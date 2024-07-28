import { useState } from "react";
import Input from "./UI/Input.tsx";
import Result from "./UI/Result.tsx";
import { Buffer } from "buffer";
import InfoBox from "./UI/InfoBox.tsx";
import Button from "./UI/Button.tsx";
import History from "./UI/History.tsx";

const BaseEncoder: React.FC = () => {
  const [result, setResult] = useState("");
  const [inputText, setInputText] = useState<string>("");
  const [displayHistory, setDisplayHistory] = useState(false);

  const inputConsumer = (input: string) => {
    setInputText(input);
    setResult(Buffer.from(input, "binary").toString("base64"));
  };

  const handleViewButtonClick = () => {
    setDisplayHistory((prev) => !prev);
  };

  const handleShowAgainText = (text: string) => {
    setInputText(text);
    setResult(Buffer.from(text, "binary").toString("base64"));
  };
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8 bg-slate-200">
        <h1 className="flex justify-center text-3xl p-4 m-3">Base 64 Encode</h1>

        <Input btnName="Convert to Base 64" inputConsumer={inputConsumer} />
        {result && <Result result={result} userInput={inputText} />}
        <Button type="button" onClick={handleViewButtonClick}>
          {displayHistory ? "Hide " : "View "} Old Encoded Texts
        </Button>
        {displayHistory && (
          <History
            store="BaseEncoder"
            input={inputText}
            showAgain={handleShowAgainText}
          />
        )}

        <InfoBox heading="What is Base 64 Encoding?">
          Base64 is a group of binary-to-text encoding schemes that transforms
          binary data into a sequence of printable characters, limited to a set
          of 64 unique characters.Base64 is also widely used for sending e-mail
          attachments, because SMTP – in its original form – was designed to
          transport 7-bit ASCII characters only.
        </InfoBox>
      </div>
    </>
  );
};

export default BaseEncoder;
