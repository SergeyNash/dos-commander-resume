import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Bio = () => {
  return (
    <>
      <Helmet>
        <title>Биография — личная страница</title>
        <meta name="description" content="Биография: краткая информация, фото и ссылки на опыт и статьи." />
        <link rel="canonical" href="/" />
      </Helmet>
      <main className="container mx-auto max-w-3xl px-4 py-8">
        <header className="flex items-center gap-6">
          <img
            src="/placeholder.svg"
            alt="Фото автора — портрет"
            width={160}
            height={160}
            loading="lazy"
            className="rounded-full aspect-square object-cover shadow"
          />
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Биография</h1>
            <p className="mt-2 text-muted-foreground">
              Здесь кратко о себе: профессиональные интересы, ключевые навыки и то, над чем работаю сейчас.
            </p>
            <nav className="mt-4 flex gap-3">
              <Link to="/experience"><Button variant="secondary">Опыт</Button></Link>
              <Link to="/articles"><Button>Статьи</Button></Link>
            </nav>
          </div>
        </header>
        <section className="mt-8 space-y-4 text-foreground">
          <p>
            Добро пожаловать! Это главная страница с биографией. Замените текст на свой — расскажите о карьере,
            достижениях и интересах. Фото можно заменить, загрузив свой файл в public и обновив путь.
          </p>
        </section>
      </main>
    </>
  );
};

export default Bio;
