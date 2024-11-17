import React from "react";
import { NumberedListBlock } from "@/features/post/types";
import { RichText } from "../rich-text";

type Props = {
  block: NumberedListBlock;
  start?: number;
  children?: React.ReactNode;
};

export const NumberedList = (props: Props) => {
  return (
    <ol className="list-decimal mb-0.5 pl-5" start={props.start}>
      <li>
        <RichText text={props.block.richText} />
        {props.children}
      </li>
    </ol>
  );
};
