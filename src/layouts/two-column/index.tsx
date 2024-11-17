import { PropsWithChildren } from "react";
import { Switcher } from "@/features/theme/components/switcher";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

type Props = Record<never, never>;

export const TwoColumn = (props: PropsWithChildren<Props>) => (
  <div className="relative min-h-screen pt-16 pb-6 px-5 lg:pt-32">
    <div className="absolute top-0 right-8">
      <Switcher />
    </div>

    <div className="mx-auto max-w-5xl md:grid md:grid-flow-row md:grid-cols-12 gap-6">
      <div className="md:col-span-2 md:sticky md:top-12 md:h-fit">
        <Header />
      </div>

      <main className="md:col-span-10">{props.children}</main>
    </div>

    <hr className="mt-12 mb-4 border-t border-border" />

    <Footer />
  </div>
);
