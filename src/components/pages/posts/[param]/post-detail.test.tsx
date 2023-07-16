import { a11yChecker } from "@/lib/test/a11y"
import { renderPage } from "@/lib/test/render"
import { PostDetailPage } from "./post-detail"

// eslint-disable-next-line max-lines-per-function
it("a11y", async () => {
  const { container } = renderPage(
    <PostDetailPage
      postDetail={{
        title: {
          type: "text",
          plainText: "Murasaki Haruki",
          text: {
            content: "Murasaki Haruki",
            link: null,
          },
          href: null,
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
        },
        blocks: [
          {
            id: "4e5abfab-dc57-4090-8ea4-be68b5b48158",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "paragraph",
            color: "default",
            richText: [],
          },
          {
            id: "4fd47bbb-b875-4300-b747-102333c59abe",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "paragraph",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "🟪🟪🟪",
                text: {
                  content: "🟪🟪🟪",
                  link: null,
                },
                href: null,
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "7e7ad7be-f953-41b4-b389-66c05e7abcb6",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "paragraph",
            color: "default",
            richText: [],
          },
          {
            id: "e6760090-ba00-451f-b43a-7429313e9827",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "paragraph",
            color: "default",
            richText: [
              {
                type: "text",
                plainText:
                  "フロントエンドが好きなWebエンジニア。むらさきと名乗ってます。",
                text: {
                  content:
                    "フロントエンドが好きなWebエンジニア。むらさきと名乗ってます。",
                  link: null,
                },
                href: null,
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "630f69da-1e22-485f-9867-f56b56dd5b7e",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "heading2",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "Link",
                text: {
                  content: "Link",
                  link: null,
                },
                href: null,
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "431e8df6-a053-4357-bd2a-8503fe77424c",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "Twitter",
                text: {
                  content: "Twitter",
                  link: {
                    url: "https://twitter.com/mrskiro_",
                  },
                },
                href: "https://twitter.com/mrskiro_",
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "df5288c1-c029-4e32-ae87-f299721b7f6d",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "GitHub",
                text: {
                  content: "GitHub",
                  link: {
                    url: "https://github.com/mrskiro",
                  },
                },
                href: "https://github.com/mrskiro",
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "01177c26-9680-41df-98df-f2170ea1372a",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "Zenn",
                text: {
                  content: "Zenn",
                  link: {
                    url: "https://zenn.dev/murasaki",
                  },
                },
                href: "https://zenn.dev/murasaki",
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "df11b87f-cb2b-4923-b44e-8a1e497709f6",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "Speaker Deck",
                text: {
                  content: "Speaker Deck",
                  link: {
                    url: "https://speakerdeck.com/purp1eeeee",
                  },
                },
                href: "https://speakerdeck.com/purp1eeeee",
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "2aff1a3d-beaf-47c9-b449-3308b5c8b84a",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "paragraph",
            color: "default",
            richText: [],
          },
          {
            id: "d4e13bba-cd9c-4674-a4d8-d40125edfad5",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "heading2",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "Career",
                text: {
                  content: "Career",
                  link: null,
                },
                href: null,
                annotations: {
                  bold: true,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "642817ff-452b-4dda-acb9-c19d61284b4c",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "ドワンゴ 2023/04 ~",
                text: {
                  content: "ドワンゴ 2023/04 ~",
                  link: null,
                },
                href: null,
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "13cac9a0-4279-4244-b7ed-e822953095ef",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "HRBrain 2021/04 ~ 2023/03",
                text: {
                  content: "HRBrain 2021/04 ~ 2023/03",
                  link: null,
                },
                href: null,
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "8c6d8985-2eb2-40f6-b0e9-143871836ad6",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "RELATIONS 2020/07 ~ 2021/01",
                text: {
                  content: "RELATIONS 2020/07 ~ 2021/01",
                  link: null,
                },
                href: null,
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "af45f436-e539-47dd-9e39-8250de718217",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText:
                  "Bachelor of Computer Science,  Tokyo University Of Technology ~2021/03",
                text: {
                  content:
                    "Bachelor of Computer Science,  Tokyo University Of Technology ~2021/03",
                  link: null,
                },
                href: null,
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "882df23e-3e73-4106-84be-a47b9de9b603",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "paragraph",
            color: "default",
            richText: [],
          },
          {
            id: "425c7b98-85db-4063-84b4-9d9cba1bb8fd",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "heading2",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "Outputs",
                text: {
                  content: "Outputs",
                  link: null,
                },
                href: null,
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "562ed56d-366b-43f8-8651-2c94cd942a21",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText:
                  "開発速度を5倍上げるVSCodeの拡張機能を作った 2022/06",
                text: {
                  content:
                    "開発速度を5倍上げるVSCodeの拡張機能を作った 2022/06",
                  link: {
                    url: "https://twitter.com/purp1eeeee/status/1537044265226084352?s=20&t=xfIhFFkN6pLl5hmw1hzzlQ",
                  },
                },
                href: "https://twitter.com/purp1eeeee/status/1537044265226084352?s=20&t=xfIhFFkN6pLl5hmw1hzzlQ",
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "ebd9dd0d-a07d-4e29-bc45-61a3bdf62b37",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "Interview2 2022/02",
                text: {
                  content: "Interview2 2022/02",
                  link: {
                    url: "https://times.hrbrain.co.jp/entry/2022/02/16/interview",
                  },
                },
                href: "https://times.hrbrain.co.jp/entry/2022/02/16/interview",
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "e9e4832b-b447-4862-ba9f-da8e33c75f79",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "Interview 2021/11",
                text: {
                  content: "Interview 2021/11",
                  link: {
                    url: "https://www.wantedly.com/companies/hrbrain/post_articles/359941",
                  },
                },
                href: "https://www.wantedly.com/companies/hrbrain/post_articles/359941",
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "34b402bf-40b6-40b0-81be-c1c6a1863fc3",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText:
                  "OpenAPIスキーマから生成したmockをテストで使い倒す 2021/12",
                text: {
                  content:
                    "OpenAPIスキーマから生成したmockをテストで使い倒す 2021/12",
                  link: {
                    url: "https://times.hrbrain.co.jp/entry/2021/12/13/open-api-mock",
                  },
                },
                href: "https://times.hrbrain.co.jp/entry/2021/12/13/open-api-mock",
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "5f6ead38-271b-4285-ab35-9808d4d23cb9",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "heading2",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "OSS",
                text: {
                  content: "OSS",
                  link: null,
                },
                href: null,
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "26bb10f1-137b-47ff-ad99-cdf1b7dcf682",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "Vite",
                text: {
                  content: "Vite",
                  link: {
                    url: "https://github.com/vitejs/vite/pull/7881#issuecomment-1131155185",
                  },
                },
                href: "https://github.com/vitejs/vite/pull/7881#issuecomment-1131155185",
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "b9a6f103-657e-4bb5-be99-898dfd75c1ae",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "Storybook",
                text: {
                  content: "Storybook",
                  link: {
                    url: "https://github.com/storybookjs/storybook/pull/15712#event-6914589729",
                  },
                },
                href: "https://github.com/storybookjs/storybook/pull/15712#event-6914589729",
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "5c82fbd2-e8a4-459c-855a-ae9b21e38f61",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "Recharts",
                text: {
                  content: "Recharts",
                  link: {
                    url: "https://github.com/recharts/recharts/pull/2784#issuecomment-1073274592",
                  },
                },
                href: "https://github.com/recharts/recharts/pull/2784#issuecomment-1073274592",
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "7f65d130-5284-4766-8c3d-668f399c3d40",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "heading2",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "Products",
                text: {
                  content: "Products",
                  link: null,
                },
                href: null,
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "57a46a61-feb2-419d-a661-05074ac2d744",
            parentId: null,
            hasChildren: true,
            children: [
              {
                id: "8b6e29de-8d53-4344-b804-733ddfafeff7",
                parentId: "57a46a61-feb2-419d-a661-05074ac2d744",
                hasChildren: false,
                children: [],
                type: "bulletedListItem",
                color: "default",
                richText: [
                  {
                    type: "text",
                    plainText:
                      "VSCodeの拡張機能です。120人聞いてるLTで紹介したのでインストール数爆増するかと思ってたら4しか増えませんでした",
                    text: {
                      content:
                        "VSCodeの拡張機能です。120人聞いてるLTで紹介したのでインストール数爆増するかと思ってたら4しか増えませんでした",
                      link: null,
                    },
                    href: null,
                    annotations: {
                      bold: false,
                      italic: false,
                      strikethrough: false,
                      underline: false,
                      code: false,
                      color: "default",
                    },
                  },
                ],
              },
            ],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "Time Bomb",
                text: {
                  content: "Time Bomb",
                  link: {
                    url: "https://github.com/mrskiro/time-bomb",
                  },
                },
                href: "https://github.com/mrskiro/time-bomb",
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "6b8b1666-d1e0-4ad9-b7b2-3ce9105b8ef2",
            parentId: null,
            hasChildren: true,
            children: [
              {
                id: "3ee6db82-7184-426c-998e-30118f5f855e",
                parentId: "6b8b1666-d1e0-4ad9-b7b2-3ce9105b8ef2",
                hasChildren: false,
                children: [],
                type: "bulletedListItem",
                color: "default",
                richText: [
                  {
                    type: "text",
                    plainText:
                      "GoでWebブラウザを作ろうとしてます。時間ください",
                    text: {
                      content:
                        "GoでWebブラウザを作ろうとしてます。時間ください",
                      link: null,
                    },
                    href: null,
                    annotations: {
                      bold: false,
                      italic: false,
                      strikethrough: false,
                      underline: false,
                      code: false,
                      color: "default",
                    },
                  },
                ],
              },
            ],
            type: "bulletedListItem",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "kebab",
                text: {
                  content: "kebab",
                  link: {
                    url: "https://github.com/mrskiro/kebab",
                  },
                },
                href: "https://github.com/mrskiro/kebab",
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "db366a09-ac66-4027-8c05-09d773ccecf7",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "paragraph",
            color: "default",
            richText: [],
          },
          {
            id: "2f5ddfc8-6131-45c8-930c-97530a7a886f",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "paragraph",
            color: "default",
            richText: [
              {
                type: "text",
                plainText: "🟪🟪🟪",
                text: {
                  content: "🟪🟪🟪",
                  link: null,
                },
                href: null,
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
              },
            ],
          },
          {
            id: "23cfc533-3c2c-4363-be89-40e3c5ea8bb8",
            parentId: null,
            hasChildren: false,
            children: [],
            type: "paragraph",
            color: "default",
            richText: [],
          },
        ],
        createdAt: "2023-03-19T02:00:00.000Z",
        updatedAt: "2023-03-19T02:00:00.000Z",
      }}
    />
  )

  const results = await a11yChecker(container)
  expect(results).toHaveNoViolations()
})
