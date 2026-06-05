import { notFound } from "next/navigation";
import { getProfile } from "@/entities/profile";
import { getDictionary, hasLocale } from "@/shared/i18n";
import { About } from "@/widgets/About";
import { Additional } from "@/widgets/Additional";
import { Education } from "@/widgets/Education";
import { Experience } from "@/widgets/Experience";
import { Hero } from "@/widgets/Hero";
import { NavBar } from "@/widgets/NavBar";
import { Projects } from "@/widgets/Projects";
import { SiteFooter } from "@/widgets/SiteFooter";
import { Skills } from "@/widgets/Skills";
import { Stats } from "@/widgets/Stats";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const profile = getProfile(lang);

  return (
    <>
      <NavBar locale={lang} nav={dict.nav} email={profile.email} />

      <main className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Hero locale={lang} />
        <Stats locale={lang} />
        <About locale={lang} />
        <Skills locale={lang} />
        <Projects locale={lang} />
        <Experience locale={lang} />
        <Education locale={lang} />
        <Additional locale={lang} />
        <SiteFooter locale={lang} />
      </main>
    </>
  );
}
