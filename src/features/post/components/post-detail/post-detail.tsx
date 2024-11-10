import * as Types from "@/features/post/types";
import { format } from "@/lib/date";
import { toBlockMap } from "../../utils";
import { Block } from "./block";

type Props = {
  postDetail: Types.PostDetail;
};

export const PostDetail = (props: Props) => {
  const blockMap = toBlockMap(props.postDetail.blocks);

  return (
    // TODO: これだと再帰できないのでどうするか考える
    // 現状ulとliが1-1でも問題ない

    // ulの要素の始まりと終わりがわからないので詰め直す
    // const blocks = props.postDetail.blocks.reduce<Types.Block[]>((p, c, i) => {
    //   if (c.type !== "bulletedListItem") return [...p, c]
    //   if (i === 0) return [...p, c]
    //   const lastItem = p[p.length - 1]
    //   if (!lastItem) return [...p, c]
    //   if (lastItem.type !== "bulletedListItem") return [...p, c]
    //   const { richText } = lastItem
    //   return [
    //     ...p.slice(0, -1),
    //     { ...lastItem, richText: [...richText, ...c.richText] },
    //   ]
    // }, [])

    <article className="leading-7">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">
          {props.postDetail.title.plainText}
        </h1>
        <div className="flex justify-between items-center">
          <div />
          <div>
            <p className="text-right text-xs">{`${format(
              props.postDetail.createdAt
            )}`}</p>
            {format(props.postDetail.updatedAt) !==
              format(props.postDetail.createdAt) && (
              <p className="text-right text-xs">{`最終更新：${format(
                props.postDetail.updatedAt
              )}`}</p>
            )}
          </div>
        </div>
      </div>
      {props.postDetail.blocks.map((block) => (
        <Block key={block.id} block={block} blockMap={blockMap} />
      ))}
    </article>
  );
};
