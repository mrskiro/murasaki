import { GoMarkGithub } from "react-icons/go";
import { AppLink } from "@/components/app-link";

export const Footer = () => (
  <footer className="flex items-center justify-center gap-4">
    <small className="text-sm">Copyright 2024 mrskiro</small>
    <AppLink
      isExternal
      href="https://github.com/mrskiro/mrskiro.dev"
      aria-label="Go to GitHub"
    >
      <GoMarkGithub size="24px" aria-hidden />
    </AppLink>
  </footer>
);
