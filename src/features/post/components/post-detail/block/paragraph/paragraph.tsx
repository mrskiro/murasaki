import * as React from "react";
import * as Types from "@/features/post/types";
import { RichText } from "../rich-text";

type Props = {
  block: Types.ParagraphBlock;
  blockMap: Types.BlockMap;
  children?: React.ReactNode;
};

export const Paragraph = (props: Props) => {
  return (
    <p className="mb-5">
      <RichText text={props.block.richText} />
      {props.children}
    </p>
  );
};
