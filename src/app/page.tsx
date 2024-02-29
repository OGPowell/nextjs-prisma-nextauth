import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Nextjs. <br className="hidden sm:inline" />
          Prisma. <br className="hidden sm:inline" />
          NextAuth. <br className="hidden sm:inline" />
          Shadcn. <br className="hidden sm:inline" />
        </h1>
        <h1 className="text-3xl mt-10 font-extrabold leading-tight tracking-tighter md:text-4xl italic">
          Oh my.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          A Nextjs template with ORM, Authentication, and Component Library.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.nextjsDocs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Nextjs Documentation
        </Link>
        <Link
          href={siteConfig.links.prismaDocs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "secondary" })}
        >
          Prisma Documentation
        </Link>
        <Link
          href={siteConfig.links.nextAuthDocs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "secondary" })}
        >
          NextAuth Documentation
        </Link>
        <Link
          href={siteConfig.links.shadcnDocs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "secondary" })}
        >
          Shadcn Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
