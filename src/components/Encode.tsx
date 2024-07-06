import { useContext } from "react";
import Input from "./UI/Input.tsx";
import { EncodeContext } from "../store/EncodeContext.tsx";
import Result from "./Result.tsx";

export default function Encode() {
  const EncodeCtx = useContext(EncodeContext);
  const btnCalled = "Convert to " + EncodeCtx.encoder.name;
  return (
    <>
      <h1>{EncodeCtx.encoder.heading}</h1>
      <p>{EncodeCtx.encoder.description}</p>
      <Input
        btnName={btnCalled}
        showResult={EncodeCtx.showResult}
        setView={EncodeCtx.setViewResult}
        enteredText={EncodeCtx.userText}
        setEnteredText={EncodeCtx.setUserText}
      />
      {EncodeCtx.viewResult && <Result result={EncodeCtx.result} />}
    </>
  );
}
