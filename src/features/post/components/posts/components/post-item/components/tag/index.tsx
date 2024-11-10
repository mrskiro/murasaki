import Image from "next/legacy/image";

type Props = {
  link: string;
};

export const ExternalTag = (props: Props) => {
  const isZenn = props.link.includes("zenn");
  if (isZenn) {
    return (
      <Image
        src="/assets/zenn-logo.png"
        alt="zenn"
        width={52}
        height={20}
        objectFit="contain"
      />
    );
  }

  const isQiita = props.link.includes("qiita");
  if (isQiita) {
    return (
      <Image
        src="/assets/qiita-logo.png"
        alt="qiita"
        width={52}
        height={20}
        objectFit="contain"
      />
    );
  }

  return null;
};
