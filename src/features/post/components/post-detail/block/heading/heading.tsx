import * as React from "react";
import * as Types from "@/features/post/types";
import { RichText } from "../rich-text";

type Props = {
  as: As;
  text: Types.RichText[];
  children?: React.ReactNode;
};

export const Heading = (props: Props) => {
  switch (props.as) {
    case "h1":
      return (
        <h1
          className="font-bold mt-6 scroll-mt-4 mb-3 text-2xl"
          id={encodeURIComponent(props.text[0]?.plainText || "")}
        >
          <RichText text={props.text} />
          {props.children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className="font-bold mt-6 scroll-mt-4 mb-3 text-xl"
          id={encodeURIComponent(props.text[0]?.plainText || "")}
        >
          <RichText text={props.text} />
          {props.children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className="font-bold mt-6 scroll-mt-4 mb-3 text-lg"
          id={encodeURIComponent(props.text[0]?.plainText || "")}
        >
          <RichText text={props.text} />
          {props.children}
        </h3>
      );
    default:
      return null;
  }
};

type As = "h1" | "h2" | "h3";
