import { useState } from "react";
import Input from "./UI/Input.tsx";
import Result from "./UI/Result.tsx";
import Button from "./UI/Button.tsx";
import History from "./UI/History.tsx";
import InfoBox from "./UI/InfoBox.tsx";

const UrlEncoder: React.FC = () => {
  const [inputText, setInputText] = useState<string>();
  const [displayHistory, setDisplayHistory] = useState(false);

  const handleViewButtonClick = () => {
    setDisplayHistory((prev) => !prev);
  };

  const handleShowAgainText = (text: string) => {
    setInputText(text);
  };

  return (
    <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8 bg-slate-200">
      <h1 className="flex justify-center text-xl">URL Encode</h1>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1">
        <div className="lg:col-span-2 sm:col-span-full">
          <Input btnName="Convert to URL Encode" inputConsumer={setInputText} />
          {inputText && (
            <Result
              result={encodeURIComponent(inputText)}
              userInput={inputText}
            />
          )}

          <Button type="button" onClick={handleViewButtonClick}>
            {displayHistory ? "Hide " : "View "} Old Encoded Texts
          </Button>
          {displayHistory && (
            <History
              store="URLEncoder"
              input={inputText}
              showAgain={handleShowAgainText}
            />
          )}
        </div>
        <div className="lg:col-span-1  sm:col-span-full ">
          <InfoBox heading="What is Url Encoding?">
            URL encoding, officially known as percent-encoding, is a method to
            encode arbitrary data in a uniform resource identifier (URI) using
            only the US-ASCII characters legal within a URI. It is also used in
            the preparation of data of the application/x-www-form-urlencoded
            media type, as is often used in the submission of HTML form data in
            HTTP requests.
          </InfoBox>
        </div>
      </div>
    </div>
  );
};

export default UrlEncoder;
