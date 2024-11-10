import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";

type Props =
  | ({
      isExternal: true;
    } & ComponentPropsWithoutRef<"a">)
  | ({
      isExternal?: false;
      isActive?: boolean;
    } & LinkProps);

// TODO: delete
export const AppLink = (props: PropsWithChildren<Props>) => {
  if (props.isExternal) {
    const { children, ...anchorProps } = props;
    return (
      <a
        className="cursor-pointer underline break-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        target="_blank"
        {...anchorProps}
      >
        {children}
      </a>
    );
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link {...props} passHref legacyBehavior>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        data-active={props.isActive ?? false}
        className="cursor-pointer underline-offset-4 data-[active=true]:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      >
        {props.children}
      </a>
    </Link>
  );
};
