import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const blogData = {
  main: {
    title: 'Blog',
    subtitle: 'Updates, workflows, and release highlights for Highlighter Main.',
    posts: [
      {
        slug: 'building-highlighter',
        title: 'Building Highlighter for Fast, Local Edits',
        date: 'April 19, 2026',
        excerpt: 'Highlighter exists for one reason: helping you move from capture to share without a bloated editing loop. The app focuses on an offline-first approach.'
      }
    ]
  },
  edit: {
    title: 'Blog',
    subtitle: 'Updates, workflows, and release highlights for Highlighter Edit.',
    posts: [
      {
        slug: 'edit-app-101',
        title: 'Highlighter Edit App 101',
        date: 'April 19, 2026',
        excerpt: 'Highlighter Edit is focused on cleaning up highlight moments quickly after capture. Core editing workflow: load captured clips, trim and refine.'
      }
    ]
  }
}

export default function Blog({ app }) {
  const { darkMode } = useTheme()
  const data = blogData[app]
  
  return (
    <div className="space-y-6">
      {/* Kicker */}
      <div className={`text-xs font-bold uppercase tracking-widest ${
        darkMode ? 'text-wired-yellow' : 'text-wired-red'
      }`}>
        {app === 'main' ? 'Highlighter Main Journal' : 'Highlighter Edit Journal'}
      </div>
      
      {/* Header */}
      <div className="mb-8">
        <h1 className={`text-4xl sm:text-5xl font-black tracking-tight mb-3 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {data.title}
        </h1>
        <p className={`text-lg max-w-2xl ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {data.subtitle}
        </p>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {data.posts.map((post, idx) => (
          <article 
            key={idx}
            className={`group rounded-lg border overflow-hidden transition-all hover:scale-[1.01] ${
              darkMode 
                ? 'bg-wired-panel border-gray-800 hover:border-wired-yellow' 
                : 'bg-white border-gray-200 hover:border-wired-red'
            }`}
          >
            {/* Colored Top Bar */}
            <div className={`h-1 ${darkMode ? 'bg-wired-yellow' : 'bg-wired-red'}`} />
            
            <div className="p-6">
              {/* Date */}
              <div className={`flex items-center gap-2 text-sm mb-3 ${
                darkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>
                <Calendar className="w-4 h-4" />
                <time>{post.date}</time>
              </div>
              
              {/* Title */}
              <h2 className={`font-bold text-xl mb-3 group-hover:${
                darkMode ? 'text-wired-yellow' : 'text-wired-red'
              } transition-colors`}>
                {post.title}
              </h2>
              
              {/* Excerpt */}
              <p className={`mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {post.excerpt}
              </p>
              
              {/* Read More */}
              <div className={`flex items-center gap-1 text-sm font-medium ${
                darkMode ? 'text-wired-yellow' : 'text-wired-red'
              }`}>
                Read more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {data.posts.length === 0 && (
        <div className={`text-center py-12 ${
          darkMode ? 'text-gray-500' : 'text-gray-400'
        }`}>
          No posts yet. Check back soon!
        </div>
      )}
    </div>
  )
}
