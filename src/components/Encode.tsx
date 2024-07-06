import { useContext, useState } from "react";
import Input from "./UI/Input.tsx";
import { EncodeContext } from "../store/EncodeContext.tsx";
import Result from "./Result.tsx";

export default function Encode() {
  const [viewResult, setViewResult] = useState(false);
  const EncodeCtx = useContext(EncodeContext);
  const btnCalled = "Convert to " + EncodeCtx.encoder.name;
  return (
    <>
      <h1>{EncodeCtx.encoder.heading}</h1>
      <p>{EncodeCtx.encoder.description}</p>
      <Input
        btnName={btnCalled}
        showResult={EncodeCtx.showResult}
        setView={setViewResult}
      />
      {viewResult && <Result result={EncodeCtx.result} />}
    </>
  );
}
