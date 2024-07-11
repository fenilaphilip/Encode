import { useState } from "react";
import Input from "./UI/Input.tsx";
import QRCode from "react-qr-code";
import InfoBox from "./UI/InfoBox.tsx";

const QrEncoder: React.FC = () => {
  const [result, setResult] = useState("");

  const inputConsumer = (input: string) => {
    setResult(input);
  };
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8 bg-slate-200">
        <h1 className="flex justify-center text-xl">QR Code</h1>
        <div className="container py-4">
          <Input btnName="Generate QR Code" inputConsumer={inputConsumer} />
          {result && (
            <>
              <h2 className="px-4">QR Code:</h2>
              <div className="flex m-2 justify-center">
                <QRCode value={result} />
              </div>
            </>
          )}
        </div>
        <InfoBox heading="What is QR Encoding?">
          A QR code (quick-response code) is a type of two-dimensional matrix
          barcode and also a machine-readable optical image that contains
          information specific to the labelled item, the QR code contains the
          data for a locator, an identifier, and for web-tracking.
        </InfoBox>
      </div>
    </>
  );
};

export default QrEncoder;
