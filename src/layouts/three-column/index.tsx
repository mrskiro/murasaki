import { PropsWithChildren, ReactNode } from "react";
import { Switcher } from "@/features/theme/components/switcher";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

type Props = {
  renderRight: () => ReactNode;
};

export const ThreeColumn = (props: PropsWithChildren<Props>) => (
  <div className="relative min-h-screen pt-16 pb-6 px-5 lg:pt-32">
    <div className="absolute top-0 right-8">
      <Switcher />
    </div>

    <div className="max-w-5xl mx-auto md:grid md:grid-flow-row gap-6 md:grid-cols-12">
      <div className="md:sticky md:top-12 md:h-fit md:col-span-2">
        <Header />
      </div>

      <main className="pb-52 md:col-span-10 lg:col-span-8">
        {props.children}
      </main>

      <aside className="sticky top-16 h-fit hidden lg:block lg:col-span-2">
        {props.renderRight()}
      </aside>
    </div>

    <hr className="mt-6 mb-4 border-t border-border" />

    <Footer />
  </div>
);
