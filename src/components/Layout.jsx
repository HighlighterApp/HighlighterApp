import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { 
  Zap, 
  ChevronDown, 
  Home, 
  Sparkles, 
  BookOpen, 
  Shield, 
  Sun, 
  Moon,
  Play,
  Menu,
  X
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const apps = [
  { id: 'main', name: 'Highlighter', path: '/main' },
  { id: 'edit', name: 'Highlighter:edit', path: '/edit' }
]

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { darkMode, toggleTheme } = useTheme()
  const [appDropdownOpen, setAppDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const currentApp = location.pathname.includes('/edit') ? 'edit' : 'main'
  const basePath = `/${currentApp}`
  
  const navItems = [
    { icon: Home, label: 'Home', path: basePath },
    { icon: Sparkles, label: 'Features', path: `${basePath}/features` },
    { icon: BookOpen, label: 'Blog', path: `${basePath}/blog` },
    { icon: Shield, label: 'Policy', path: `${basePath}/policy` }
  ]

  const handleAppChange = (appPath) => {
    navigate(appPath)
    setAppDropdownOpen(false)
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode 
        ? 'bg-wired-dark text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b ${
        darkMode 
          ? 'bg-black/95 backdrop-blur-sm border-gray-800' 
          : 'bg-white/95 backdrop-blur-sm border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo & App Selector */}
            <div className="flex items-center gap-3">
              <Link to={basePath} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-wired-yellow rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-black" />
                </div>
                <span className="font-black text-lg tracking-tight hidden sm:block">HIGHLIGHTER</span>
              </Link>
              
              {/* App Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setAppDropdownOpen(!appDropdownOpen)}
                  className={`flex items-center gap-1 px-2 py-1 rounded ${
                    darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${appDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {appDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setAppDropdownOpen(false)}
                    />
                    <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg z-20 ${
                      darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                    }`}>
                      {apps.map(app => (
                        <button
                          key={app.id}
                          onClick={() => handleAppChange(app.path)}
                          className={`w-full text-left px-4 py-2 flex items-center gap-2 ${
                            currentApp === app.id 
                              ? 'text-wired-yellow' 
                              : darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                          }`}
                        >
                          {currentApp === app.id && <Play className="w-3 h-3 fill-current" />}
                          <span>{app.name}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map(item => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-wired-yellow' 
                        : darkMode 
                          ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden lg:inline">{item.label}</span>
                  </Link>
                )
              })}
            </nav>
            
            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  darkMode 
                    ? 'hover:bg-gray-800 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              {/* By CRPY */}
              <a 
                href="https://github.com/crpy-dev/apps" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-xs font-medium ${
                  darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                BY CRPY
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className={`md:hidden py-4 border-t ${
              darkMode ? 'border-gray-800' : 'border-gray-200'
            }`}>
              {navItems.map(item => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 ${
                      isActive 
                        ? 'text-wired-yellow bg-wired-yellow/10' 
                        : darkMode 
                          ? 'text-gray-300 hover:bg-gray-800' 
                          : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </nav>
          )}
        </div>
      </header>
      
      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Products */}
          <aside className={`hidden lg:block w-48 flex-shrink-0 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <div className="sticky top-20">
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                darkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Products
              </h3>
              <ul className="space-y-1">
                {apps.map(app => (
                  <li key={app.id}>
                    <Link 
                      to={app.path}
                      className={`flex items-center gap-2 py-1.5 text-sm ${
                        currentApp === app.id 
                          ? 'text-wired-yellow font-medium' 
                          : darkMode 
                            ? 'hover:text-white' 
                            : 'hover:text-gray-900'
                      }`}
                    >
                      {currentApp === app.id && <Play className="w-3 h-3 fill-current" />}
                      <span>{app.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
