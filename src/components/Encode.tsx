import { useContext } from "react";
import Input from "./UI/Input.tsx";
import { EncodeContext } from "../store/EncodeContext.tsx";

export default function Encode() {
  const EncodeCtx = useContext(EncodeContext);
  return (
    <>
      <h1>{EncodeCtx.encoder.heading}</h1>
      <p>{EncodeCtx.encoder.description}</p>
      <Input />
    </>
  );
}
