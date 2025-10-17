import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Calendar, ArrowLeft, Phone, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS, getBlogPostBySlug, getRecentBlogPosts, type BlogSection } from '@/lib/blog';
import { getBlogContentComponent } from '@/lib/blog-content';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { COMPANY_INFO } from '@/lib/constants';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Électricien Pétange`,
    description: post.metaDescription,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const recentPosts = getRecentBlogPosts(3).filter((p) => p.slug !== post.slug);

  // Schema JSON-LD pour l'article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://elec-dudelange.lu/logo.png',
      },
    },
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="pt-24 pb-20">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary">
                Accueil
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-semibold line-clamp-1">{post.title}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Back Link */}
              <Link
                href="/blog"
                className="inline-flex items-center space-x-2 text-primary hover:text-accent font-semibold mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Retour au blog</span>
              </Link>

              {/* Category */}
              <div className="mb-4">
                <span className="inline-block bg-accent text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{post.readTime} min de lecture</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Excerpt */}
              <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-primary p-8 rounded-r-2xl">
                <p className="text-xl text-gray-700 leading-relaxed font-medium italic">{post.excerpt}</p>
              </div>

              {/* Content - Rendered by individual article components */}
              <div className="article-content">
                {(() => {
                  const ContentComponent = getBlogContentComponent(post.slug);
                  return ContentComponent ? <ContentComponent /> : null;
                })()}
              </div>

              {/* CTA Urgence milieu d'article */}
              <div className="my-12 bg-gradient-accent text-white p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Besoin d&apos;une Intervention d&apos;Urgence ?</h3>
                    <p className="text-white/90">
                      Nos électriciens interviennent 24/7 à Pétange et environs
                    </p>
                  </div>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}>
                    <Button
                      variant="primary"
                      size="lg"
                      icon={Phone}
                      className="bg-white text-accent hover:bg-gray-100 shrink-0"
                    >
                      {COMPANY_INFO.phone}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Share & CTA Final */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gray-50 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Besoin d&apos;un Électricien Professionnel ?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Obtenez votre devis gratuit en moins de 48h
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/devis-gratuit">
                      <Button variant="accent" size="lg">Devis Gratuit</Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" size="lg">Nous Contacter</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Contact Card */}
              <div className="bg-gradient-primary text-white p-8 rounded-2xl sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Urgence 24/7</h3>
                <p className="text-white/90 mb-6">
                  Un problème électrique ? Nous intervenons rapidement
                </p>
                <div className="space-y-4">
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                    className="flex items-center justify-center space-x-2 w-full py-3 bg-accent hover:bg-accent/90 rounded-lg font-semibold transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <Link href="/devis-gratuit">
                    <Button variant="outline" size="lg" className="w-full bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                      Devis Gratuit
                    </Button>
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 space-y-2 text-sm text-white/80">
                  <p className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Intervention en moins de 2h</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Devis gratuit sous 48h</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Garantie décennale</span>
                  </p>
                </div>
              </div>

              {/* Recent Articles */}
              {recentPosts.length > 0 && (
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Articles Récents</h3>
                  <div className="space-y-6">
                    {recentPosts.map((recentPost) => (
                      <Link
                        key={recentPost.slug}
                        href={`/blog/${recentPost.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-4">
                          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={recentPost.image}
                              alt={recentPost.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-1">
                              {recentPost.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {recentPost.readTime} min de lecture
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
