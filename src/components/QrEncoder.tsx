import { useState } from "react";
import Input from "./UI/Input.tsx";
import QRCode from "react-qr-code";
import InfoBox from "./UI/InfoBox.tsx";
import Button from "./UI/Button.tsx";
import History from "./UI/History.tsx";

const QrEncoder: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [displayHistory, setDisplayHistory] = useState(false);

  const inputConsumer = (input: string) => {
    setUserInput(input);
    setResult(input);
  };
  const handleViewButtonClick = () => {
    setDisplayHistory((prev) => !prev);
  };

  const handleShowAgainText = (text: string) => {
    setUserInput(text);
  };
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8 bg-slate-200">
        <h1 className="flex justify-center text-3xl">QR Code</h1>
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1">
          <div className="lg:col-span-2 sm:col-span-full">
            <Input btnName="Generate QR Code" inputConsumer={inputConsumer} />
            {result && (
              <>
                <h2 className="px-4">QR Code for {userInput}</h2>
                <div className="flex m-2 justify-center">
                  <QRCode value={result} />
                </div>
              </>
            )}
            <Button type="button" onClick={handleViewButtonClick}>
              {displayHistory ? "Hide " : "View "} Old Encoded Texts
            </Button>
            {displayHistory && (
              <History
                store="QREncoder"
                input={userInput}
                showAgain={handleShowAgainText}
              />
            )}
          </div>
          <div className="lg:col-span-1  sm:col-span-full">
            <InfoBox heading="What is QR Encoding?">
              A QR code (quick-response code) is a type of two-dimensional
              matrix barcode and also a machine-readable optical image that
              contains information specific to the labelled item, the QR code
              contains the data for a locator, an identifier, and for
              web-tracking.
            </InfoBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default QrEncoder;
