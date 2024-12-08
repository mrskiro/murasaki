import { GoLinkExternal } from "react-icons/go";
import { AppLink } from "@/components/app-link";
import { Post } from "@/features/post/types";
import { format } from "@/lib/date";

type Props = {
  type: Post["type"];
  title: string;
  link: string;
  createdAt: string;
};

export const PostItem = (props: Props) => (
  <div className="flex flex-col gap-0.5">
    <div>
      <time className="text-xs">{format(props.createdAt)}</time>
    </div>
    {props.type === "internal" ? (
      <AppLink href={`${props.link}`}>
        <span className="text-sm text-center hover:underline">{`# ${props.title}`}</span>
      </AppLink>
    ) : (
      <AppLink href={`${props.link}`} isExternal>
        {/* 色変える */}
        <span className="flex items-center gap-0.5 hover:underline text-sm">
          {`# ${props.title}`}
          <GoLinkExternal size="12px" />
        </span>
      </AppLink>
    )}
  </div>
);
