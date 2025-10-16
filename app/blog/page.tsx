import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Électricité - Conseils & Dépannage | Dudelange',
  description: 'Tous nos conseils d\'expert en électricité : dépannage, sécurité, normes. Solutions aux pannes courantes. Électricien professionnel à Dudelange.',
  openGraph: {
    title: 'Blog Électricité - Conseils & Dépannage | Dudelange',
    description: 'Tous nos conseils d\'expert en électricité : dépannage, sécurité, normes. Solutions aux pannes courantes.',
    type: 'website',
  },
};

export default function BlogPage() {
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Blog Électricité
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Conseils d&apos;expert, solutions aux pannes courantes et tout ce qu&apos;il faut
            savoir sur l&apos;électricité pour votre maison
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-accent text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-accent transition-colors"
                  >
                    <span>Lire l&apos;article</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Un Problème Électrique ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nos électriciens interviennent 24/7 à Dudelange et dans un rayon de 30km
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="xl">Appeler Maintenant</Button>
            </Link>
            <Link href="/devis-gratuit">
              <Button variant="outline" size="xl">Devis Gratuit</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
