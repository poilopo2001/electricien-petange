'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, Home, DollarSign, Calendar, User, Mail, Phone, MapPin,
  CheckCircle, ArrowRight, ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';

// Schéma de validation Zod
const formSchema = z.object({
  type: z.string().min(1, 'Veuillez sélectionner un type de projet'),
  urgency: z.string().min(1, 'Veuillez sélectionner une urgence'),
  surface: z.string().optional(),
  budget: z.string().optional(),
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Numéro de téléphone invalide'),
  postalCode: z.string().regex(/^\d{5}$/, 'Code postal invalide'),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, 'Vous devez accepter la politique de confidentialité'),
});

type FormData = z.infer<typeof formSchema>;

const PROJECT_TYPES = [
  { value: 'depannage', label: 'Dépannage d\'urgence', icon: Zap },
  { value: 'installation', label: 'Installation complète', icon: Home },
  { value: 'mise-aux-normes', label: 'Mise aux normes', icon: CheckCircle },
  { value: 'borne-recharge', label: 'Borne de recharge', icon: Zap },
  { value: 'domotique', label: 'Domotique', icon: Home },
  { value: 'autre', label: 'Autre projet', icon: Zap },
];

const URGENCY_OPTIONS = [
  { value: 'urgence', label: 'Urgence (< 24h)' },
  { value: 'rapide', label: 'Rapide (< 1 semaine)' },
  { value: 'normal', label: 'Normal (< 1 mois)' },
  { value: 'planifie', label: 'Planifié (> 1 mois)' },
];

export const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const watchType = watch('type');
  const totalSteps = 4;

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    // Ici: envoyer les données à votre backend
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-12 text-center shadow-2xl"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Demande Envoyée !
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Merci pour votre demande. Nous vous contacterons dans les <strong>48 heures</strong>.
        </p>
        <p className="text-gray-500">
          Pour une urgence, appelez-nous directement au <strong>+33 3 82 XX XX XX</strong>
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-100 p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">
            Étape {currentStep} sur {totalSteps}
          </span>
          <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <motion.div
            className="bg-gradient-primary h-2 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        <AnimatePresence mode="wait">
          {/* Étape 1: Type de Projet */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Quel est votre projet ?
              </h3>
              <p className="text-gray-600 mb-6">
                Sélectionnez le type d&apos;intervention dont vous avez besoin
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {PROJECT_TYPES.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setValue('type', type.value)}
                      className={`p-6 rounded-xl border-2 transition-all hover:shadow-lg ${
                        watchType === type.value
                          ? 'border-primary bg-primary/5 shadow-lg'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      <IconComponent
                        className={`h-8 w-8 mx-auto mb-3 ${
                          watchType === type.value ? 'text-primary' : 'text-gray-400'
                        }`}
                      />
                      <span
                        className={`text-sm font-semibold ${
                          watchType === type.value ? 'text-primary' : 'text-gray-700'
                        }`}
                      >
                        {type.label}
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.type && <p className="text-red-600 text-sm mb-4">{errors.type.message}</p>}
            </motion.div>
          )}

          {/* Étape 2: Caractéristiques */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Détails du Projet
              </h3>
              <p className="text-gray-600 mb-6">
                Aidez-nous à mieux comprendre votre besoin
              </p>

              <div className="space-y-4">
                <Select
                  label="Quand souhaitez-vous commencer ?"
                  options={[{ value: '', label: 'Sélectionnez...' }, ...URGENCY_OPTIONS]}
                  error={errors.urgency?.message}
                  {...register('urgency')}
                />

                <Input
                  label="Surface concernée (optionnel)"
                  type="text"
                  placeholder="Ex: 100m²"
                  {...register('surface')}
                />

                <Input
                  label="Budget estimé (optionnel)"
                  type="text"
                  placeholder="Ex: 2000-5000€"
                  {...register('budget')}
                />
              </div>
            </motion.div>
          )}

          {/* Étape 3: Message */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Décrivez Votre Projet
              </h3>
              <p className="text-gray-600 mb-6">
                Plus vous nous donnez de détails, plus notre devis sera précis
              </p>

              <Textarea
                label="Description de votre projet"
                rows={6}
                placeholder="Décrivez votre projet en quelques lignes..."
                {...register('message')}
              />
            </motion.div>
          )}

          {/* Étape 4: Coordonnées */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Vos Coordonnées
              </h3>
              <p className="text-gray-600 mb-6">
                Pour vous envoyer votre devis gratuit sous 48h
              </p>

              <div className="space-y-4">
                <Input
                  label="Nom et Prénom *"
                  type="text"
                  placeholder="Jean Dupont"
                  error={errors.name?.message}
                  {...register('name')}
                />

                <Input
                  label="Email *"
                  type="email"
                  placeholder="jean.dupont@email.fr"
                  error={errors.email?.message}
                  {...register('email')}
                />

                <Input
                  label="Téléphone *"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  error={errors.phone?.message}
                  {...register('phone')}
                />

                <Input
                  label="Code Postal *"
                  type="text"
                  placeholder="L-3401"
                  error={errors.postalCode?.message}
                  {...register('postalCode')}
                />

                <div className="flex items-start space-x-3 pt-4">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 h-5 w-5 text-primary"
                    {...register('consent')}
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    J&apos;accepte la{' '}
                    <a href="/politique-confidentialite" className="text-primary underline">
                      politique de confidentialité
                    </a>{' '}
                    et consent à être contacté par email ou téléphone *
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-red-600 text-sm">{errors.consent.message}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <Button
            type="button"
            variant="secondary"
            onClick={prevStep}
            disabled={currentStep === 1}
            icon={ArrowLeft}
          >
            Précédent
          </Button>

          {currentStep < totalSteps ? (
            <Button
              type="button"
              variant="primary"
              onClick={nextStep}
              icon={ArrowRight}
              iconPosition="right"
            >
              Suivant
            </Button>
          ) : (
            <Button type="submit" variant="accent" icon={CheckCircle}>
              Envoyer ma Demande
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
