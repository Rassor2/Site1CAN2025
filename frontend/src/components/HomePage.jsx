import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, Clock, TrendingUp, Users, Trophy, ChevronRight, Star } from 'lucide-react';
import { articles, predictions, teams, upcomingMatches } from '../mock';

const HomePage = () => {
  const featuredArticles = articles.slice(0, 3);
  const latestArticles = articles.slice(3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-green-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                CAN 2025
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#actualites" className="text-slate-700 hover:text-orange-600 font-medium transition-colors">
                Actualités
              </a>
              <a href="#pronostics" className="text-slate-700 hover:text-orange-600 font-medium transition-colors">
                Pronostics
              </a>
              <a href="#equipes" className="text-slate-700 hover:text-orange-600 font-medium transition-colors">
                Équipes
              </a>
              <a href="#calendrier" className="text-slate-700 hover:text-orange-600 font-medium transition-colors">
                Calendrier
              </a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Suivre la CAN
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 px-4 py-2 text-sm font-semibold">
              <Star className="h-4 w-4 inline mr-2" />
              Tournoi en cours - Côte d'Ivoire 2025
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              Coupe d'Afrique
              <span className="block bg-gradient-to-r from-orange-600 via-yellow-500 to-green-600 bg-clip-text text-transparent">
                des Nations 2025
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Suivez toute l'actualité, les analyses, les pronostics et les moments forts de la plus grande compétition de football africain.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                Dernières actus
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                Voir les pronostics
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white/50 backdrop-blur-sm" id="actualites">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">À la Une</h2>
              <p className="text-slate-600 mt-2">Les articles les plus importants du moment</p>
            </div>
            <TrendingUp className="h-12 w-12 text-orange-500" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link key={article.id} to={`/article/${article.id}`}>
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white hover:bg-orange-500">
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString('fr-FR')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 line-clamp-3">{article.excerpt}</p>
                    <div className="mt-4 flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                      Lire l'article
                      <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Predictions Section */}
      <section className="py-16" id="pronostics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">Nos Pronostics</h2>
              <p className="text-slate-600 mt-2">Analyses et prédictions des experts</p>
            </div>
            <TrendingUp className="h-12 w-12 text-green-600" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {predictions.map((pred) => (
              <Card key={pred.id} className="border-l-4 border-l-green-500 hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">{pred.match}</CardTitle>
                  <div className="flex items-center justify-between mt-2">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      {pred.prediction}
                    </Badge>
                    <span className="text-sm font-semibold text-green-600">
                      Confiance: {pred.confidence}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{pred.analysis}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm" id="equipes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">Équipes Favorites</h2>
              <p className="text-slate-600 mt-2">Les principales nations en lice pour le titre</p>
            </div>
            <Users className="h-12 w-12 text-orange-500" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teams.map((team) => (
              <Card key={team.id} className="hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <span className="text-4xl">{team.flag}</span>
                      {team.name}
                    </CardTitle>
                  </div>
                  <CardDescription>{team.group}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Cote victoire:</span>
                      <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                        {team.odds}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Forme:</span>
                      <span className="font-mono font-semibold text-green-600">{team.form}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="py-16" id="calendrier">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">Prochains Matchs</h2>
              <p className="text-slate-600 mt-2">Calendrier des rencontres à venir</p>
            </div>
            <Calendar className="h-12 w-12 text-orange-500" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingMatches.map((match) => (
              <Card key={match.id} className="hover:shadow-xl transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center flex-1">
                      <p className="text-2xl font-bold text-slate-900">{match.team1}</p>
                    </div>
                    <div className="px-4">
                      <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">VS</Badge>
                    </div>
                    <div className="text-center flex-1">
                      <p className="text-2xl font-bold text-slate-900">{match.team2}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4 space-y-2 text-sm text-slate-600">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(match.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="h-4 w-4" />
                      {match.time}
                    </div>
                    <div className="text-center text-orange-600 font-medium">
                      {match.venue}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Derniers Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <Link key={article.id} to={`/article/${article.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white hover:bg-orange-500">
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-orange-600 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                      <span>{article.readTime}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm line-clamp-2">{article.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold">CAN 2025</span>
              </div>
              <p className="text-slate-400">
                Votre source d'informations complète sur la Coupe d'Afrique des Nations 2025.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Navigation</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#actualites" className="hover:text-orange-500 transition-colors">Actualités</a></li>
                <li><a href="#pronostics" className="hover:text-orange-500 transition-colors">Pronostics</a></li>
                <li><a href="#equipes" className="hover:text-orange-500 transition-colors">Équipes</a></li>
                <li><a href="#calendrier" className="hover:text-orange-500 transition-colors">Calendrier</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Ressources</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Histoire de la CAN</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Statistiques</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Galerie Photos</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Vidéos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-slate-400">
                Pour toute question ou suggestion, n'hésitez pas à nous contacter.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 CAN 2025. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;