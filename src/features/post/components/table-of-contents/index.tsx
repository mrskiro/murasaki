import * as React from "react";
import { AppLink } from "@/components/app-link";
import { Block } from "@/features/post/types";

type Props = {
  headings: Block[];
};

export const TableOfContents = (props: Props) => {
  const [activeId, setActiveId] = React.useState<string>("");
  const observerRef = React.useRef<IntersectionObserver>();
  React.useEffect(() => {
    const elements = props.headings
      .map((v) => encodeURIComponent(v.richText[0]?.plainText || ""))
      .map((id) => document.getElementById(id));
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry?.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );
    elements.forEach((v) => {
      if (v) {
        observerRef.current?.observe(v);
      }
    });
    return () => observerRef.current?.disconnect();
  }, [props.headings]);

  return (
    <ul className="flex flex-col gap-0.5">
      {props.headings.map((v) => (
        <li
          key={v.id}
          data-level={v.type.slice(-1)}
          data-active={
            encodeURIComponent(v.richText[0]?.plainText || "") === activeId
          }
          className="text-xs data-[active=true]:font-bold data-[level=3]:pl-3 data-[level=4]:pl-4"
        >
          <AppLink
            href={`#${encodeURIComponent(v.richText[0]?.plainText || "")}`}
          >
            {v.richText[0]?.plainText || ""}
          </AppLink>
        </li>
      ))}
    </ul>
  );
};
