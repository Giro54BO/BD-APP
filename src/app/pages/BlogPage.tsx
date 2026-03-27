import { Link } from 'react-router';
import { blogPosts } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

export function BlogPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] lg:leading-[1.25] tracking-[-0.0054px] lg:tracking-[-0.0128px]">
              Blog
            </h1>
            <p className="text-lg lg:text-2xl text-white/90 leading-[1.5] lg:leading-[1.3]">
              Guías, consejos y novedades para elegir mejor tus productos y aprovechar al máximo tus compras
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="bg-background py-6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Inicio
            </Link>
            <span>&gt;</span>
            <span className="text-primary">Blog</span>
          </nav>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="py-8 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col gap-8">
            {/* Filter Bar */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-primary">Filtros</h2>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-card transition-colors">
                <span className="text-base text-primary">Recientes</span>
                <ArrowRight className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  {/* Image */}
                  <div className="relative w-full h-[240px] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 p-6 flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-primary leading-[1.2] lg:leading-[1.3]">
                      {post.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-[1.5] flex-1">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="bg-primary hover:opacity-90 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-opacity"
                    >
                      <span className="text-base leading-[1.5]">Leer ahora</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
