import NextImage from "next/image";
import { generateImagePath } from "@/lib/image";

type Props = {
  id: string;
  alt: string;
};

// https://stackoverflow.com/a/76008677
export const Image = (props: Props) => (
  <NextImage
    alt={props.alt}
    src={`${generateImagePath(props.id).replace("public", "")}`}
    width={0}
    height={0}
    sizes="100vw"
    className="w-full h-auto"
  />
);
