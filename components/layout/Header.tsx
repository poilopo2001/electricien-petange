'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Zap, ChevronDown, Star, Clock, Shield } from 'lucide-react';
import * as Icons from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO, SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* Desktop & Tablet Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isSticky
            ? 'bg-white shadow-lg py-3'
            : 'bg-white/95 backdrop-blur-md py-4'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-primary p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900 leading-tight">
                  Électricien
                </span>
                <span className="text-sm text-primary font-medium">
                  Dudelange
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.submenu && setOpenSubmenu(link.label)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  {link.submenu ? (
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-accent font-medium transition-colors">
                      <span>{link.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-accent font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Mega Menu for Services */}
                  {link.submenu && openSubmenu === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-5xl">
                      <div className="bg-white rounded-2xl shadow-3xl border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-12 gap-0">
                          {/* Left: Services List */}
                          <div className="col-span-8 p-6">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                              Nos Services
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                              {SERVICES.map((service) => {
                                const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ElementType;
                                return (
                                  <Link
                                    key={service.slug}
                                    href={`/${service.slug}`}
                                    className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary/5 hover:shadow-md transition-all group"
                                    onClick={() => setOpenSubmenu(null)}
                                  >
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                                      <IconComponent className="h-5 w-5 text-primary group-hover:text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="font-semibold text-gray-900 group-hover:text-primary text-sm mb-0.5">
                                        {service.title}
                                      </h4>
                                      <p className="text-xs text-gray-500 line-clamp-2">
                                        {service.shortDescription}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          {/* Right: CTA Card */}
                          <div className="col-span-4 bg-gradient-primary p-6 text-white flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl font-bold mb-3">
                                Besoin d&apos;un Électricien ?
                              </h3>
                              <ul className="space-y-2 mb-6">
                                <li className="flex items-center space-x-2 text-sm">
                                  <Clock className="h-4 w-4 text-accent" />
                                  <span>Intervention &lt; 2h</span>
                                </li>
                                <li className="flex items-center space-x-2 text-sm">
                                  <Shield className="h-4 w-4 text-accent" />
                                  <span>Garantie décennale</span>
                                </li>
                                <li className="flex items-center space-x-2 text-sm">
                                  <Star className="h-4 w-4 text-accent" />
                                  <span>5/5 sur Google</span>
                                </li>
                              </ul>
                            </div>
                            <div className="space-y-2">
                              <Button
                                variant="accent"
                                size="md"
                                className="w-full"
                                onClick={() => {
                                  setOpenSubmenu(null);
                                  window.location.href = '/devis-gratuit';
                                }}
                              >
                                Devis Gratuit
                              </Button>
                              <a
                                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                                className="flex items-center justify-center space-x-2 w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold text-sm transition-colors"
                              >
                                <Phone className="h-4 w-4" />
                                <span>{COMPANY_INFO.phone}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">{COMPANY_INFO.phone}</span>
              </a>
              <Link href="/devis-gratuit">
                <Button variant="accent" size="md">Devis Gratuit</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Optimisé Conversion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
            style={{ paddingTop: '80px' }}
          >
            <div className="h-full flex flex-col">
              {/* Top CTA Section - Urgence */}
              <div className="bg-gradient-accent p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 animate-pulse" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Urgence 24/7</p>
                    <p className="text-sm text-white/90">Intervention &lt; 2h</p>
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center space-x-2 w-full py-4 bg-white text-accent rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-5 w-5" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>

              {/* Navigation with Icons */}
              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <div className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <div key={link.href}>
                      {link.submenu ? (
                        <>
                          <button
                            onClick={() =>
                              setOpenSubmenu(openSubmenu === link.label ? null : link.label)
                            }
                            className="w-full flex items-center justify-between py-4 px-4 bg-gray-50 hover:bg-gray-100 rounded-xl font-semibold text-gray-900 transition-colors"
                          >
                            <span className="flex items-center space-x-3">
                              <Menu className="h-5 w-5 text-primary" />
                              <span>{link.label}</span>
                            </span>
                            <ChevronDown
                              className={cn(
                                'h-5 w-5 transition-transform text-primary',
                                openSubmenu === link.label && 'rotate-180'
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {openSubmenu === link.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 mt-2 space-y-1">
                                  {SERVICES.map((service) => {
                                    const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ElementType;
                                    return (
                                      <Link
                                        key={service.slug}
                                        href={`/${service.slug}`}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-primary/5 transition-colors group"
                                      >
                                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                                          <IconComponent className="h-4 w-4 text-primary group-hover:text-white" />
                                        </div>
                                        <span className="text-sm text-gray-700 group-hover:text-primary font-medium">
                                          {service.title}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 py-4 px-4 bg-gray-50 hover:bg-gray-100 rounded-xl font-semibold text-gray-900 transition-colors"
                        >
                          <span>{link.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </nav>

              {/* Bottom CTA Section - Sticky */}
              <div className="border-t border-gray-200 p-4 bg-white shadow-2xl">
                <div className="space-y-3">
                  {/* Trust Signals */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-center py-2 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-primary">&lt;2h</div>
                      <div className="text-xs text-gray-600">Urgence</div>
                    </div>
                    <div className="text-center py-2 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-primary">5/5</div>
                      <div className="text-xs text-gray-600">Avis</div>
                    </div>
                    <div className="text-center py-2 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-primary">48h</div>
                      <div className="text-xs text-gray-600">Devis</div>
                    </div>
                  </div>

                  <Button
                    variant="accent"
                    size="lg"
                    className="w-full"
                    icon={Zap}
                    onClick={() => {
                      setIsOpen(false);
                      window.location.href = '/devis-gratuit';
                    }}
                  >
                    Obtenir mon Devis Gratuit
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Bottom Bar (Mobile Only) - Optimisé Conversion */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 p-3">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
            className="flex flex-col items-center justify-center py-3 rounded-xl bg-primary text-white hover:bg-primary-600 transition-colors active:scale-95"
          >
            <Phone className="h-5 w-5 mb-1" />
            <span className="text-xs font-bold">Appeler</span>
          </a>
          <Link
            href="/devis-gratuit"
            className="flex flex-col items-center justify-center py-3 rounded-xl bg-accent text-white hover:bg-accent-600 transition-colors animate-pulse-glow active:scale-95"
          >
            <Zap className="h-5 w-5 mb-1" />
            <span className="text-xs font-bold">Devis Gratuit</span>
          </Link>
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center py-3 rounded-xl bg-gray-800 text-white hover:bg-gray-900 transition-colors active:scale-95"
          >
            <Menu className="h-5 w-5 mb-1" />
            <span className="text-xs font-bold">Contact</span>
          </Link>
        </div>
      </div>
    </>
  );
};
