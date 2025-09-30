

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  children?: React.ReactNode
}

export function PageHero({ title, subtitle, backgroundImage, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dani-50 via-white to-warm-50 py-24 lg:py-32">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-dani-600/5 to-warm-500/5" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-8 text-gray-900 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-10">
              {children}
            </div>
          )}
                  </div>
      </div>
    </section>
  )
}
