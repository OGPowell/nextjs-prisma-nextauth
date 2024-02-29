export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/OGPowell/nextjs-prisma-nextauth",
    nextjsDocs: "https://nextjs.org/docs",
    nextAuthDocs: "https://next-auth.js.org/getting-started/introduction",
    prismaDocs: "https://www.prisma.io/docs",
    shadcnDocs: "https://ui.shadcn.com",
  },
};
