import * as React from "react";
import * as Types from "@/features/post/types";
import { cn } from "@/lib/style/cn";

type Props = {
  text: Types.RichText[];
};

export const RichText = (props: Props) => {
  return (
    <>
      {props.text.map((v, i) => (
        <React.Fragment key={i}>{wrapText(v)}</React.Fragment>
      ))}
    </>
  );
};

const wrapText = (text: Types.RichText) => {
  const Tag = text.annotations.code ? "code" : "span";
  let element: React.ReactNode = (
    <Tag
      data-bold={text.annotations.bold}
      data-italic={text.annotations.italic}
      data-underline={text.annotations.underline}
      data-strikethrough={text.annotations.strikethrough}
      // TODO: color
      // data-color={text.annotations.color}
      className={cn(
        "data-[bold=true]:font-bold data-[italic=true]:italic data-[underline=true]:underline data-[strikethrough=true]:line-through",
        {
          "rounded-md p-1 text-red-500 bg-gray-400/15": text.annotations.code,
        }
      )}
    >
      {text.plainText}
    </Tag>
  );
  if (text.href) {
    element = (
      <a
        href={text.href}
        target="_blank"
        className="cursor-pointer underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      >
        {element}
      </a>
    );
  }
  return element;
};
