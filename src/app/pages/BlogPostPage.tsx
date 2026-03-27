import { Link, useParams, useNavigate } from 'react-router';
import { blogPosts } from '../data/mockData';
import { useState } from 'react';
import { ShareModal } from '../components/ShareModal';
import svgPaths from '../../imports/svg-140b5bbw4r';
import svgPathsShare from '../../imports/svg-s7xjaavtit';
import { imgShare } from '../../imports/svg-7jo2i';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const post = blogPosts.find((p) => p.id === id);
  const currentIndex = blogPosts.findIndex((p) => p.id === id);
  const previousPost =
    currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1
      ? blogPosts[currentIndex + 1]
      : null;

  // Get related posts (all except current)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== id)
    .slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Post no encontrado
          </h1>
          <Link
            to="/blog"
            className="text-primary hover:underline"
          >
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const currentUrl = window.location.href;

  return (
    <div className="bg-background">
      {/* Hero with Date and Title */}
      <section className="py-8 lg:py-12">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col gap-6 items-center text-center">
            <p className="text-muted-foreground leading-[1.5] lg:leading-[1.3] text-[16px]">
              {post.date} · {post.readTime}
            </p>
            <h1 className="text-3xl lg:text-6xl font-bold text-primary leading-[1.1] lg:leading-[1.25] tracking-[-0.0016px] lg:tracking-[-0.0128px]">
              {post.title}
            </h1>

            {/* Share Button */}
            <button
              onClick={() => setShareModalOpen(true)}
              className="bg-white flex gap-[4px] items-center justify-center p-[16px] rounded-[12px] hover:opacity-80 transition-opacity"
            >
              <p className="leading-[1.5] text-[#302c67] text-[16px] whitespace-nowrap">Compartir</p>
              <div className="relative shrink-0 size-[24px]">
                <div className="absolute inset-[10.42%_18.75%_10.42%_10.42%]" style={{ maskImage: `url('${imgShare}')`, WebkitMaskImage: `url('${imgShare}')`, maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: '-2.5px -2.5px', WebkitMaskPosition: '-2.5px -2.5px', maskSize: '24px 24px', WebkitMaskSize: '24px 24px' }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
                    <path d={svgPathsShare.p1c8f7580} fill="var(--color-primary)" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="max-w-[792px] mx-auto px-8 lg:px-16">
          <div className="relative w-full h-[302px] lg:h-[440px] rounded-xl overflow-hidden">
            <img
              src={post.detailImage || post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-12">
        <div className="max-w-[792px] mx-auto px-8 lg:px-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-base lg:text-2xl text-foreground leading-[1.5] lg:leading-[1.3] whitespace-pre-line">
              {post.content}
            </p>
          </div>
        </div>
      </section>

      {/* Secondary Image (Person with phone) */}
      <section className="pb-12">
        <div className="max-w-[792px] mx-auto px-8 lg:px-16">
          <div className="relative w-full h-[302px] lg:h-[440px] rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1677155699495-bca80823ba03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB1c2luZyUyMHBob25lJTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzc0NTQ5NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Person using phone"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Navigation: Previous and Next */}
      <section className="py-12 border-t border-border">
        <div className="max-w-[792px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between gap-4">
            {previousPost ? (
              <Link
                to={`/blog/${previousPost.id}`}
                className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
              >
                <svg
                  className="w-6 h-6 rotate-180"
                  fill="none"
                  viewBox="0 0 11.3075 6.7075"
                >
                  <path
                    d={svgPaths.p1e0cc680}
                    fill="var(--color-primary)"
                  />
                </svg>
                <span className="text-base leading-[1.5]">
                  Anterior
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextPost ? (
              <Link
                to={`/blog/${nextPost.id}`}
                className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
              >
                <span className="text-base leading-[1.5]">
                  Siguiente
                </span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 11.3075 6.7075"
                >
                  <path
                    d={svgPaths.p1e0cc680}
                    fill="var(--color-primary)"
                  />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-primary mb-8 leading-[1.2]">
            Sugerencia para ti
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <article
                key={relatedPost.id}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-[240px] overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-primary leading-[1.2] lg:leading-[1.3]">
                    {relatedPost.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-[1.5] flex-1">
                    {relatedPost.excerpt}
                  </p>
                  <Link
                    to={`/blog/${relatedPost.id}`}
                    className="bg-primary hover:opacity-90 text-white px-6 py-3 rounded-xl text-center transition-opacity"
                  >
                    <span className="text-base leading-[1.5]">
                      Leer ahora
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Share Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        postTitle={post.title}
        postUrl={currentUrl}
      />
    </div>
  );
}