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
      <h1>QR Code</h1>
      <p>
        A QR code (quick-response code) is a type of two-dimensional matrix
        barcode and also a machine-readable optical image that contains
        information specific to the labelled item, the QR code contains the data
        for a locator, an identifier, and for web-tracking.
      </p>
      <Input btnName="Generate QR Code" inputConsumer={inputConsumer} />
      <Result result={result} />
    </>
  );
};

export default QrEncoder;
