import { useState } from "react";
import Input from "./UI/Input.tsx";
import Result from "./UI/Result.tsx";

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
          {result && <h2 className="px-4">Encoded Text:</h2>}
          <div className="text-center">
            <Result result={result} />
          </div>
        </div>
        <div className="bg-blue-300 container rounded-lg p-4 border-solid border-4 border-cyan-700 lg:w-9/12 sm:w-full">
          <h2 className="text-lg text-cyan-700">What is QR Encoding?</h2>
          <p>
            A QR code (quick-response code) is a type of two-dimensional matrix
            barcode and also a machine-readable optical image that contains
            information specific to the labelled item, the QR code contains the
            data for a locator, an identifier, and for web-tracking.
          </p>
        </div>
      </div>
    </>
  );
};

export default QrEncoder;
