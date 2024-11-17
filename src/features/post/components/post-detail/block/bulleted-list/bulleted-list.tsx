import React from "react";
import { BulletedListItemBlock } from "@/features/post/types";
import { RichText } from "../rich-text";

type Props = {
  block: BulletedListItemBlock;
  children?: React.ReactNode;
};

export const BulletedList = (props: Props) => {
  return (
    <ul className="list-disc mb-0.5 pl-5">
      <li>
        <RichText text={props.block.richText} />
        {props.children}
      </li>
    </ul>
  );
};
