import Image from "next/legacy/image";

type Props = {
  link: string;
};

export const ExternalTag = (props: Props) => {
  const isZenn = props.link.includes("zenn");
  if (isZenn) {
    return (
      <div>
        <Image
          src="/assets/zenn-logo.png"
          alt="zenn"
          width={52}
          height={20}
          objectFit="contain"
        />
      </div>
    );
  }

  const isQiita = props.link.includes("qiita");
  if (isQiita) {
    return (
      <div>
        <Image
          src="/assets/qiita-logo.png"
          alt="qiita"
          width={52}
          height={20}
          objectFit="contain"
        />
      </div>
    );
  }

  return null;
};
