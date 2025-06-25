'use client'

export function ThemeScript() {
  const themeScript = `
    (function() {
      function getTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          return savedTheme;
        }
        
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
        
        return 'light';
      }
      
      const theme = getTheme();
      document.documentElement.classList.toggle('dark', theme === 'dark');
    })();
  `

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: themeScript,
      }}
    />
  )
}