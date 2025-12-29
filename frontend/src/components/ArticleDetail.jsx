import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Calendar, Clock, User, Share2, BookmarkPlus, Trophy, ChevronRight } from 'lucide-react';
import { articles } from '../mock';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-green-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Article non trouvé</h2>
          <Button onClick={() => navigate('/')} className="bg-orange-500 hover:bg-orange-600">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Card>
      </div>
    );
  }

  const relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-green-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                CAN 2025
              </span>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="border-orange-500 text-orange-600 hover:bg-orange-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </div>
        </div>
      </header>

      {/* Article Hero */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-orange-500 text-white hover:bg-orange-500 mb-4">
              {article.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-200">
              <span className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {new Date(article.date).toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {article.readTime} de lecture
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-xl border-0 mb-8">
            <CardContent className="p-8 md:p-12">
              {/* Article Actions */}
              <div className="flex justify-between items-center pb-8 border-b mb-8">
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="hover:bg-orange-50 hover:text-orange-600">
                    <Share2 className="h-4 w-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-orange-50 hover:text-orange-600">
                    <BookmarkPlus className="h-4 w-4 mr-2" />
                    Sauvegarder
                  </Button>
                </div>
              </div>

              {/* Excerpt */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
                <p className="text-lg text-slate-700 italic">{article.excerpt}</p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-700 leading-relaxed mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Author Info */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{article.author}</p>
                    <p className="text-slate-600">Journaliste sportif spécialisé football africain</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Articles Connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relArticle) => (
                <Link key={relArticle.id} to={`/article/${relArticle.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={relArticle.image} 
                        alt={relArticle.title}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-3 left-3 bg-orange-500 text-white hover:bg-orange-500 text-xs">
                        {relArticle.category}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2 mb-2">
                        {relArticle.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2 mb-3">{relArticle.excerpt}</p>
                      <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:gap-1 transition-all">
                        Lire l'article
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
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
                <li><Link to="/" className="hover:text-orange-500 transition-colors">Accueil</Link></li>
                <li><a href="/#actualites" className="hover:text-orange-500 transition-colors">Actualités</a></li>
                <li><a href="/#pronostics" className="hover:text-orange-500 transition-colors">Pronostics</a></li>
                <li><a href="/#equipes" className="hover:text-orange-500 transition-colors">Équipes</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Ressources</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Histoire de la CAN</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Statistiques</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Galerie Photos</a></li>
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

export default ArticleDetail;