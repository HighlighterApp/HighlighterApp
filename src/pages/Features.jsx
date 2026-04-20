import { Video, Zap, Scissors, Share2, Lock, Smartphone } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const featuresData = {
  main: {
    title: 'Features',
    subtitle: 'Core tools for fast capture, on-device highlights, and clean montage export.',
    features: [
      { icon: Video, title: 'Live Recording', desc: 'Capture sessions directly on-device with a focused recording interface.' },
      { icon: Zap, title: 'Instant Highlights', desc: 'Mark key moments in real time while recording to reduce post-processing time.' },
      { icon: Share2, title: 'Montage Export', desc: 'Export readable montage videos quickly and save or share from your device.' }
    ]
  },
  edit: {
    title: 'Features',
    subtitle: 'Focused editing utilities for trimming, refining, and exporting highlight moments.',
    features: [
      { icon: Scissors, title: 'Quick Trim Controls', desc: 'Adjust clip boundaries quickly for cleaner highlight output.' },
      { icon: Lock, title: 'Local-first Edits', desc: 'Keep core edit processing on-device to stay fast and privacy-conscious.' },
      { icon: Smartphone, title: 'Share-ready Output', desc: 'Export polished edits and route them directly to your chosen share flow.' }
    ]
  }
}

export default function Features({ app }) {
  const { darkMode } = useTheme()
  const data = featuresData[app]
  
  return (
    <div className="space-y-6">
      {/* Kicker */}
      <div className={`text-xs font-bold uppercase tracking-widest ${
        darkMode ? 'text-wired-yellow' : 'text-wired-red'
      }`}>
        {app === 'main' ? 'Highlighter Main' : 'Highlighter Edit'}
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
      
      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.features.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <div 
              key={idx}
              className={`rounded-lg border p-6 transition-all hover:scale-[1.02] ${
                darkMode 
                  ? 'bg-wired-panel border-gray-800 hover:border-wired-yellow' 
                  : 'bg-white border-gray-200 hover:border-wired-red'
              }`}
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${
                darkMode ? 'bg-wired-yellow/10' : 'bg-wired-red/10'
              }`}>
                <Icon className={`w-6 h-6 ${
                  darkMode ? 'text-wired-yellow' : 'text-wired-red'
                }`} />
              </div>
              <h2 className={`font-bold text-xl mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h2>
              <p className={`${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {feature.desc}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
