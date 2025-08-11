import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, Mail, MessageCircle, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const About = () => {
  const canonicalUrl = typeof window !== "undefined" ? `${window.location.origin}/about` : "/about";
  return (
    <main className="min-h-screen bg-background" role="main">
      <Helmet>
        <title>About — Сергей Синяков | Product Owner</title>
        <meta name="description" content="Био Сергея Синякова: Product Owner / Product Manager с 5+ лет в IT. Фото и краткая биография." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к портфолио
          </Button>
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Фото */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <AspectRatio ratio={1}>
                  <img 
                    src="/photo.png" 
                    alt="Фото Сергея Синякова — Product Owner"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
          </div>

          {/* Биография */}
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold mb-4">Сергей Синяков</h1>
                <h2 className="text-xl text-muted-foreground mb-6">Product Owner / Product Manager</h2>
                
                <div className="space-y-4 text-foreground/90">
                  <p>
                    Более 5 лет в IT-индустрии с фокусом на управлении продуктами и развитии 
                    технологических решений. За это время успешно запустил 3+ продукта, 
                    обеспечив рост Monthly Active Users на 150%.
                  </p>
                  
                  <p>
                    Опыт управления 5+ командами разработки (7–12 человек) с применением 
                    методологий Agile/Scrum и SAFe. Специализируюсь на продуктовой стратегии, 
                    анализе метрик и исследованиях пользователей.
                  </p>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Ключевые навыки:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Продуктовая стратегия и метрики
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        API-first подход, Secure by Design
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Исследования пользователей и приоритизация
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Управление кроссфункциональными командами
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h3 className="text-lg font-semibold mb-4">Контакты:</h3>
                    <div className="flex flex-wrap gap-4">
                      <a href="mailto:sergey@pm-hero.com" className="flex items-center text-primary hover:underline">
                        <Mail className="w-4 h-4 mr-2" />
                        sergey@pm-hero.com
                      </a>
                      <a href="https://t.me/sergey_sinyakov" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        @sergey_sinyakov
                      </a>
                      <a href="https://linkedin.com/in/sergey-sinyakov" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;