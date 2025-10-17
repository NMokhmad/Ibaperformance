import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { client } from "../../lib/sanity";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  // Fetch settings depuis Sanity
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "settings"][0] {
          nomGarage,
          telephone,
          email,
          adresse,
          horaires,
          instagram,
          mapUrl
        }`;

        const data = await client.fetch(query);
        setSettings(data);
        setLoading(false);
      } catch (err) {
        console.error("Erreur Sanity:", err);
        setError("Erreur lors du chargement des informations");
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  // Gestion de l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      // Remplace ces valeurs par tes IDs EmailJS
      const result = await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

      console.log('Email envoyé:', result.text);
      setFormStatus({
        type: 'success',
        message: 'Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.'
      });
      
      // Réinitialise le formulaire
      formRef.current.reset();
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setFormStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = settings ? [
    {
      icon: Phone,
      title: "Téléphone",
      value: settings.telephone || "+33 1 23 45 67 89",
      link: `tel:${settings.telephone?.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      title: "Email",
      value: settings.email || "contact@ibaperformance.fr",
      link: `mailto:${settings.email}`,
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: settings.adresse || "Paris, France",
      link: "#",
    },
    {
      icon: Clock,
      title: "Horaires",
      value: settings.horaires || "Lun - Ven: 9h - 18h",
      link: "#",
    },
  ] : [];

  if (loading) {
    return (
      <section id="contact" className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-zinc-400">Chargement...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-zinc-200">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discutons de votre projet
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Remplissez le formulaire ou contactez-moi directement. Je vous répondrai dans les meilleurs délais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 hover:bg-zinc-800 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                      <info.icon className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500 mb-1">{info.title}</div>
                      <div className="text-sm font-medium text-white whitespace-pre-line">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden h-96"
            >
              <iframe
                src={settings?.mapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3514616!3d48.8566969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b005%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sen!2sfr!4v1234567890123"}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6"
            >
              {/* Message de statut */}
              {formStatus.message && (
                <div className={`p-4 rounded-lg flex items-start gap-3 ${
                  formStatus.type === 'success' 
                    ? 'bg-green-900/20 border border-green-800' 
                    : 'bg-red-900/20 border border-red-800'
                }`}>
                  {formStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <p className={`text-sm ${
                    formStatus.type === 'success' ? 'text-green-300' : 'text-red-300'
                  }`}>
                    {formStatus.message}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="from_name" className="text-zinc-300">Nom complet *</Label>
                  <Input
                    id="from_name"
                    name="from_name"
                    required
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-zinc-600"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-zinc-300">Téléphone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-zinc-600"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="from_email" className="text-zinc-300">Email *</Label>
                <Input
                  id="from_email"
                  name="from_email"
                  type="email"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white focus:border-zinc-600"
                  placeholder="jean.dupont@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-300">Votre message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white focus:border-zinc-600 min-h-32"
                  placeholder="Décrivez-nous votre projet, votre véhicule et vos objectifs de performance..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold text-lg py-6 shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Envoi en cours...</>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}