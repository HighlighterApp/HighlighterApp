import { Link } from 'react-router-dom'
import { Sparkles, BookOpen, Shield, ArrowRight, Zap, Video, Scissors } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const appData = {
  main: {
    title: 'HIGHLIGHTER 101',
    subtitle: 'What is Moments-based editing? Let\'s try to understand how Highlighter is different from other video editors.',
    hero: 'Capture the moment. Cut the noise.',
    description: 'Highlighter Main is the core experience for recording sessions, marking highlights instantly, and exporting clean montage videos.',
    features: [
      { icon: Video, title: 'Live Recording', desc: 'Capture sessions directly on-device' },
      { icon: Zap, title: 'Instant Highlights', desc: 'Mark key moments in real time' },
      { icon: Scissors, title: 'Montage Export', desc: 'Export clean videos quickly' }
    ]
  },
  edit: {
    title: 'HIGHLIGHTER:EDIT 101',
    subtitle: 'Focused editing tools for trimming and polishing highlight clips after capture.',
    hero: 'Edit highlight moments instantly.',
    description: 'Highlighter Edit focuses on local-first capture cleanup, quick timeline trims, and export-ready highlight edits.',
    features: [
      { icon: Scissors, title: 'Quick Trim', desc: 'Adjust clip boundaries quickly' },
      { icon: Zap, title: 'Local-first', desc: 'Keep processing on-device' },
      { icon: Video, title: 'Share-ready', desc: 'Export polished edits fast' }
    ]
  }
}

export default function Home({ app }) {
  const { darkMode } = useTheme()
  const data = appData[app]
  const basePath = `/${app}`
  
  const cards = [
    { icon: Sparkles, title: 'Features', path: `${basePath}/features`, desc: app === 'main' ? 'Core recording, highlight marking, and export workflow.' : 'Focused editing tools for trimming and polishing.' },
    { icon: BookOpen, title: 'Blog', path: `${basePath}/blog`, desc: 'Track updates, release notes, and workflow improvements.' },
    { icon: Shield, title: 'Privacy Policy', path: `${basePath}/policy`, desc: 'Understand how we handle permissions and local processing.' }
  ]

  return (
    <div className="space-y-6">
      {/* Kicker */}
      <div className={`text-xs font-bold uppercase tracking-widest ${
        darkMode ? 'text-gray-500' : 'text-gray-400'
      }`}>
        Overview
      </div>
      
      {/* Hero Section - Wired Magazine Style */}
      <div className={`relative overflow-hidden rounded-lg ${
        darkMode ? 'bg-wired-red' : 'bg-wired-red'
      }`}>
        <div className="relative z-10 p-6 sm:p-8 lg:p-10">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            {data.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-6">
            {data.subtitle}
          </p>
          
          {/* Feature Grid */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {data.features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div 
                  key={idx}
                  className="bg-black/20 backdrop-blur-sm rounded-lg p-4 text-white"
                >
                  <Icon className="w-6 h-6 mb-2" />
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-white/80">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
      
      {/* Bottom Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, idx) => {
          const Icon = card.icon
          return (
            <Link 
              key={idx}
              to={card.path}
              className={`group block rounded-lg border p-5 transition-all ${
                darkMode 
                  ? 'bg-wired-panel border-gray-800 hover:border-wired-yellow' 
                  : 'bg-white border-gray-200 hover:border-wired-red'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    darkMode ? 'text-wired-yellow' : 'text-wired-red'
                  }`} />
                </div>
                <div className="flex-1">
                  <h2 className={`font-bold text-lg mb-1 group-hover:${
                    darkMode ? 'text-wired-yellow' : 'text-wired-red'
                  } transition-colors flex items-center gap-2`}>
                    {card.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h2>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {card.desc}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
