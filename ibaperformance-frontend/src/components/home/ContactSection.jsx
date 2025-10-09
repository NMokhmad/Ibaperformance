import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      link: "tel:+33123456789",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@ibaperformance.fr",
      link: "mailto:contact@ibaperformance.fr",
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "123 Avenue de la Performance, 75001 Paris",
      link: "#",
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "Lun - Ven: 9h - 18h / Sam: 9h - 12h",
      link: "#",
    },
  ];

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
                      <div className="text-sm font-medium text-white">{info.value}</div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3514616!3d48.8566969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b005%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sen!2sfr!4v1234567890123"
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
            <form className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-zinc-300">Nom complet *</Label>
                  <Input
                    id="name"
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-zinc-600"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-zinc-300">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-zinc-600"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  className="bg-zinc-800 border-zinc-700 text-white focus:border-zinc-600"
                  placeholder="jean.dupont@email.com"
                />
              </div>

                {/* motif de la demande (fonctionnalités a ajouter plus tard) */}
              {/*<div className="space-y-2">
                <Label htmlFor="service" className="text-zinc-300">Service souhaité *</Label>
                <Select>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white focus:border-zinc-600">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="reprogrammation">Reprogrammation moteur / ECU</SelectItem>
                    <SelectItem value="entretien">Entretien hautes performances</SelectItem>
                    <SelectItem value="circuit">Préparation circuit</SelectItem>
                    <SelectItem value="pieces">Installation pièces racing</SelectItem>
                    <SelectItem value="autre">Autre / Projet sur mesure</SelectItem>
                  </SelectContent>
                </Select>
              </div>*/}
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-300">Votre message *</Label>
                <Textarea
                  id="message"
                  className="bg-zinc-800 border-zinc-700 text-white focus:border-zinc-600 min-h-32"
                  placeholder="Décrivez-nous votre projet, votre véhicule et vos objectifs de performance..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-linear-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold text-lg py-6 shadow-xl group"
              >
                Envoyer ma demande
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* Consent Text 
              <p className="text-xs text-zinc-500 text-center">
                En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
              </p>
                */}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}