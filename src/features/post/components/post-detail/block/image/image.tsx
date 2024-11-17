import NextImage from "next/legacy/image";
import { generateImagePath } from "@/lib/image";

type Props = {
  id: string;
  alt: string;
};

export const Image = (props: Props) => (
  <div className="relative *:!static *:*:!relative *:*:!w-full *:*:!h-[unset]">
    <NextImage
      layout="fill"
      objectFit="contain"
      alt={props.alt}
      src={`${generateImagePath(props.id).replace("public", "")}`}
    />
  </div>
);
