# Contrats et Architecture - Site CAN 2025

## Vue d'ensemble
Site web informatif sur la Coupe d'Afrique des Nations 2025 avec articles, pronostics et calendrier des matchs.

## Architecture Frontend

### Pages créées
1. **HomePage** (`/app/frontend/src/components/HomePage.jsx`)
   - Hero section avec titre en dégradé africain
   - Articles à la une (3 articles featuredArticles)
   - Section pronostics avec analyses
   - Équipes favorites avec cotes et formes
   - Calendrier des prochains matchs
   - Derniers articles
   - Header sticky avec navigation
   - Footer complet

2. **ArticleDetail** (`/app/frontend/src/components/ArticleDetail.jsx`)
   - Page de détail d'article avec hero image
   - Contenu complet de l'article
   - Informations auteur
   - Articles connexes (3 suggestions)
   - Boutons partage et sauvegarde
   - Navigation retour

### Données Mock (`/app/frontend/src/mock.js`)

**Articles** (6 articles pré-rédigés en français):
- Article 1: "CAN 2025 : Le Maroc, grand favori du tournoi"
- Article 2: "Pronostic : Les 5 équipes à surveiller"
- Article 3: "Calendrier CAN 2025 : Dates et horaires des matchs"
- Article 4: "Sadio Mané vs Mohamed Salah : Le duel des stars"
- Article 5: "Les jeunes talents à découvrir lors de la CAN 2025"
- Article 6: "Histoire de la CAN : Les moments légendaires"

Chaque article contient:
- id, title, category, author, date, readTime
- image (URL Unsplash)
- excerpt, content complet

**Pronostics** (3 prédictions):
- Match, prediction, confidence, analysis

**Teams** (6 équipes favorites):
- Maroc, Sénégal, Égypte, Nigeria, Côte d'Ivoire, Cameroun
- Avec drapeaux, groupes, cotes, forme

**UpcomingMatches** (4 matchs à venir):
- Équipes, date, heure, venue

### Design et Styles

**Palette de couleurs** (thème africain):
- Orange principal: #f97316 (orange-500)
- Vert africain: #22c55e (green-600)
- Jaune: #eab308 (yellow-500)
- Fond dégradé: slate-50 → orange-50 → green-50

**Composants shadcn utilisés**:
- Card, CardContent, CardHeader, CardTitle, CardDescription
- Button (variants: default, outline)
- Badge

**Icônes lucide-react**:
- Trophy, Calendar, Clock, TrendingUp, Users, Star, ChevronRight, ArrowLeft, User, Share2, BookmarkPlus

**Effets et animations**:
- Hover effects sur cards avec scale et shadow
- Transitions smooth sur boutons
- Backdrop blur sur header
- Dégradés décoratifs avec blur
- Animations de translation sur hover

### Routes
- `/` - HomePage
- `/article/:id` - ArticleDetail

## État actuel: FRONTEND COMPLET AVEC MOCK DATA

### ✅ Fonctionnalités implémentées
- Navigation entre pages
- Affichage de tous les articles
- Système de catégories (Analyse, Pronostic, Actualité, Découverte, Histoire)
- Section pronostics
- Affichage des équipes
- Calendrier des matchs
- Design responsive
- Animations et micro-interactions
- Footer informatif

### 📝 Note importante
Le site fonctionne actuellement avec des **DONNÉES FICTIVES (MOCK)** stockées dans `/app/frontend/src/mock.js`. Aucune connexion backend n'est nécessaire pour le moment. Tous les articles et données sont statiques et pré-écrits en français.

## Backend (Non implémenté)

Si développement backend nécessaire à l'avenir:
- Créer modèles MongoDB: Article, Prediction, Team, Match
- Créer endpoints API REST:
  - GET /api/articles (liste)
  - GET /api/articles/:id (détail)
  - GET /api/predictions
  - GET /api/teams
  - GET /api/matches
- Remplacer import mock.js par appels API axios
- Variables d'environnement déjà configurées (REACT_APP_BACKEND_URL)
