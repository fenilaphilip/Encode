import { useContext } from "react";

import BaseEncoder from "./BaseEncoder";
import QrEncoder from "./QrEncoder";
import UrlEncoder from "./UrlEncoder";

import { EncodeContext } from "../store/EncodeContext.tsx";

export default function Encode() {
  const EncodeCtx = useContext(EncodeContext);
  const userchoosed = EncodeCtx.encoder.name;

  if (userchoosed === "URL") {
    return <UrlEncoder />;
  } else if (userchoosed === "Base 64") {
    return <BaseEncoder />;
  } else {
    return <QrEncoder />;
  }
}
