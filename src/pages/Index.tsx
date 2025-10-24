import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type VideoLesson = {
  id: number;
  title: string;
  duration: string;
  progress: number;
  thumbnail: string;
  language: string;
  level: string;
};

const allVideoLessons: VideoLesson[] = [
  {
    id: 1,
    title: 'Основные фразы для путешествий',
    duration: '25:45',
    progress: 75,
    thumbnail: 'https://cdn.poehali.dev/projects/ed57e0c4-5d43-4c56-b19e-71c46d13c287/files/d17c52c5-42be-42b0-a512-434d6765e74f.jpg',
    language: 'Испанский',
    level: 'Начальный'
  },
  {
    id: 2,
    title: 'Грамматика для начинающих',
    duration: '18:30',
    progress: 45,
    thumbnail: 'https://cdn.poehali.dev/projects/ed57e0c4-5d43-4c56-b19e-71c46d13c287/files/7c192055-2ee2-48f3-a087-1c4f72a20517.jpg',
    language: 'Английский',
    level: 'Начальный'
  },
  {
    id: 3,
    title: 'Деловой английский',
    duration: '32:15',
    progress: 20,
    thumbnail: 'https://cdn.poehali.dev/projects/ed57e0c4-5d43-4c56-b19e-71c46d13c287/files/aae3b103-935f-4f43-96f6-887b92797ebf.jpg',
    language: 'Английский',
    level: 'Продвинутый'
  },
  {
    id: 4,
    title: 'Французский для начинающих',
    duration: '22:10',
    progress: 0,
    thumbnail: 'https://cdn.poehali.dev/projects/ed57e0c4-5d43-4c56-b19e-71c46d13c287/files/d17c52c5-42be-42b0-a512-434d6765e74f.jpg',
    language: 'Французский',
    level: 'Начальный'
  },
  {
    id: 5,
    title: 'Разговорный немецкий',
    duration: '28:35',
    progress: 60,
    thumbnail: 'https://cdn.poehali.dev/projects/ed57e0c4-5d43-4c56-b19e-71c46d13c287/files/7c192055-2ee2-48f3-a087-1c4f72a20517.jpg',
    language: 'Немецкий',
    level: 'Средний'
  },
  {
    id: 6,
    title: 'Итальянская кухня и язык',
    duration: '19:45',
    progress: 30,
    thumbnail: 'https://cdn.poehali.dev/projects/ed57e0c4-5d43-4c56-b19e-71c46d13c287/files/aae3b103-935f-4f43-96f6-887b92797ebf.jpg',
    language: 'Итальянский',
    level: 'Начальный'
  },
  {
    id: 7,
    title: 'Китайский для бизнеса',
    duration: '35:20',
    progress: 10,
    thumbnail: 'https://cdn.poehali.dev/projects/ed57e0c4-5d43-4c56-b19e-71c46d13c287/files/d17c52c5-42be-42b0-a512-434d6765e74f.jpg',
    language: 'Китайский',
    level: 'Продвинутый'
  },
  {
    id: 8,
    title: 'Португальский язык',
    duration: '24:15',
    progress: 0,
    thumbnail: 'https://cdn.poehali.dev/projects/ed57e0c4-5d43-4c56-b19e-71c46d13c287/files/7c192055-2ee2-48f3-a087-1c4f72a20517.jpg',
    language: 'Португальский',
    level: 'Начальный'
  },
  {
    id: 9,
    title: 'Японский для туристов',
    duration: '21:50',
    progress: 85,
    thumbnail: 'https://cdn.poehali.dev/projects/ed57e0c4-5d43-4c56-b19e-71c46d13c287/files/aae3b103-935f-4f43-96f6-887b92797ebf.jpg',
    language: 'Японский',
    level: 'Начальный'
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedLanguage, setSelectedLanguage] = useState('Все');
  const [selectedLevel, setSelectedLevel] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  const languages = ['Все', 'Английский', 'Испанский', 'Французский', 'Немецкий', 'Итальянский', 'Китайский', 'Португальский', 'Японский'];
  const levels = ['Все', 'Начальный', 'Средний', 'Продвинутый'];

  const filteredLessons = allVideoLessons.filter(lesson => {
    const matchesLanguage = selectedLanguage === 'Все' || lesson.language === selectedLanguage;
    const matchesLevel = selectedLevel === 'Все' || lesson.level === selectedLevel;
    const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLanguage && matchesLevel && matchesSearch;
  });

  const videoLessons = activeTab === 'videos' ? filteredLessons : allVideoLessons.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="BookOpen" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-foreground">LinguaLearn</h1>
            </div>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>

            <nav className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'videos', label: 'Видеоуроки', icon: 'PlayCircle' },
                { id: 'courses', label: 'Курсы', icon: 'GraduationCap' },
                { id: 'progress', label: 'Прогресс', icon: 'TrendingUp' },
                { id: 'profile', label: 'Профиль', icon: 'User' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={tab.icon as any} size={20} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'videos' ? (
          <section>
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Видеоуроки</h2>
              <p className="text-muted-foreground text-lg">Выбирайте уроки по языкам и уровням</p>
            </div>

            <div className="mb-6 space-y-4">
              <div className="relative">
                <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Поиск уроков..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors text-lg"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <Icon name="Globe" size={20} className="text-muted-foreground" />
                  <span className="font-medium">Язык:</span>
                </div>
                {languages.map((lang) => (
                  <Button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    variant={selectedLanguage === lang ? 'default' : 'outline'}
                    size="sm"
                    className="rounded-full"
                  >
                    {lang}
                  </Button>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <Icon name="BarChart" size={20} className="text-muted-foreground" />
                  <span className="font-medium">Уровень:</span>
                </div>
                {levels.map((level) => (
                  <Button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    variant={selectedLevel === level ? 'default' : 'outline'}
                    size="sm"
                    className="rounded-full"
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p className="text-muted-foreground">
                Найдено уроков: <span className="font-semibold text-foreground">{filteredLessons.length}</span>
              </p>
              <Button variant="outline" size="sm">
                <Icon name="SlidersHorizontal" size={18} className="mr-2" />
                Сортировка
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLessons.map((lesson) => (
                <Card
                  key={lesson.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border-2 hover:border-primary/50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={lesson.thumbnail}
                      alt={lesson.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <Icon name="Play" className="text-white ml-1" size={32} />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground font-semibold">
                      {lesson.duration}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-5">
                    <div className="flex gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {lesson.language}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {lesson.level}
                      </Badge>
                    </div>
                    
                    <h4 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {lesson.title}
                    </h4>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Прогресс</span>
                        <span className="font-semibold text-primary">{lesson.progress}%</span>
                      </div>
                      <Progress value={lesson.progress} className="h-2" />
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button className="flex-1" size="sm">
                        {lesson.progress > 0 ? 'Продолжить' : 'Начать'}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="BookmarkPlus" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredLessons.length === 0 && (
              <div className="text-center py-16">
                <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Уроки не найдены</h3>
                <p className="text-muted-foreground">Попробуйте изменить фильтры или поисковый запрос</p>
              </div>
            )}
          </section>
        ) : (
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient_8s_ease-in-out_infinite] rounded-3xl p-8 md:p-12 text-primary-foreground relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Изучай языки с удовольствием! 🚀
              </h2>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Тысячи видеоуроков, интерактивные курсы и система отслеживания прогресса
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Начать обучение
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white/40">
                  Смотреть демо
                  <Icon name="Play" className="ml-2" size={20} />
                </Button>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold">Популярные видеоуроки</h3>
            <Button variant="ghost" className="text-primary" onClick={() => setActiveTab('videos')}>
              Смотреть все
              <Icon name="ChevronRight" className="ml-1" size={20} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoLessons.map((lesson) => (
              <Card
                key={lesson.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border-2 hover:border-primary/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={lesson.thumbnail}
                    alt={lesson.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <Icon name="Play" className="text-white ml-1" size={32} />
                    </div>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground font-semibold">
                    {lesson.duration}
                  </Badge>
                </div>
                
                <CardContent className="p-5">
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {lesson.language}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {lesson.level}
                    </Badge>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {lesson.title}
                  </h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="font-semibold text-primary">{lesson.progress}%</span>
                    </div>
                    <Progress value={lesson.progress} className="h-2" />
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1" size="sm">
                      Продолжить
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="BookmarkPlus" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: 'Video',
              title: '1000+ видеоуроков',
              description: 'Обширная библиотека контента для всех уровней'
            },
            {
              icon: 'Award',
              title: 'Сертификаты',
              description: 'Получайте сертификаты за пройденные курсы'
            },
            {
              icon: 'Users',
              title: 'Сообщество',
              description: 'Общайтесь с другими учениками и практикуйте язык'
            }
          ].map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all border-2 hover:border-primary/30">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={feature.icon as any} className="text-white" size={32} />
              </div>
              <h4 className="font-semibold text-xl mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </section>
        )}
        )}
      </main>

      <footer className="mt-16 bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 LinguaLearn. Учим языки вместе! 🌍</p>
        </div>
      </footer>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Index;