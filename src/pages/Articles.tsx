import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { loadRawMarkdown } from "@/utils/markdownLoader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ArticleMeta = { slug: string; title: string; date?: string; filePath: string };

const articles: ArticleMeta[] = [
  { slug: "hello-world", title: "Привет, мир", date: "2024-01-01", filePath: "/articles/hello-world.md" },
  { slug: "second-post", title: "Вторая статья", date: "2024-02-15", filePath: "/articles/second-post.md" },
];

export default function Articles() {
  const [selected, setSelected] = useState<ArticleMeta | null>(articles[0]);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (selected) {
      loadRawMarkdown(selected.filePath).then(setContent);
    }
  }, [selected]);

  return (
    <>
      <Helmet>
        <title>Статьи — подборка материалов</title>
        <meta name="description" content="Статьи: подборка материалов. Контент загружается из Markdown файлов." />
        <link rel="canonical" href="/articles" />
      </Helmet>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold tracking-tight">Статьи</h1>
        <div className="mt-6 grid gap-6 md:grid-cols-[280px_1fr]">
          <aside className="rounded-lg border bg-card text-card-foreground">
            <ul className="divide-y">
              {articles.map((a) => {
                const isActive = selected?.slug === a.slug;
                return (
                  <li key={a.slug}>
                    <button
                      onClick={() => setSelected(a)}
                      className={`w-full text-left px-4 py-3 transition-colors ${
                        isActive ? "bg-accent" : "hover:bg-muted"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <div className="font-medium">{a.title}</div>
                      {a.date && <div className="text-xs text-muted-foreground mt-1">{a.date}</div>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>
          <section>
            {selected && (
              <Card>
                <CardHeader>
                  <CardTitle>{selected.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <article className="space-y-4 leading-relaxed">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                  </article>
                </CardContent>
              </Card>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
