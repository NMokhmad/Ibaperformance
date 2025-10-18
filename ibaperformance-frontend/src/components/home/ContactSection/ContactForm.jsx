import { memo, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

export const ContactForm = memo(function ContactForm() {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
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

  return (
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
  );
});