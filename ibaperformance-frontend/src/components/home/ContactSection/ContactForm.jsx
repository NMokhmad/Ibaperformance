import { memo, useState, useRef } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const inputStyle = {
  width: '100%',
  padding: '0.65rem 0.875rem',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: 'white',
  fontFamily: 'var(--font-body)',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'border-color 0.2s ease',
};

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: '0.65rem',
  fontWeight: 600,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.4)',
  marginBottom: '0.5rem',
};

const handleFocus = (e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; };
const handleBlur = (e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; };

export const ContactForm = memo(() => {
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      console.log("Email envoyé:", result.text);
      setFormStatus({
        type: "success",
        message: "Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      setFormStatus({
        type: "error",
        message: "Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      {/* Status message */}
      {formStatus.message && (
        <div style={{
          padding: '1rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem',
          background: formStatus.type === "success" ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.05)',
          borderLeft: `3px solid ${formStatus.type === "success" ? '#22c55e' : 'rgba(255,255,255,0.4)'}`,
        }}>
          {formStatus.type === "success" ? (
            <CheckCircle style={{ width: '18px', height: '18px', color: '#4ade80', flexShrink: 0, marginTop: '2px' }} />
          ) : (
            <AlertCircle style={{ width: '18px', height: '18px', color: 'rgba(255,255,255,0.5)', flexShrink: 0, marginTop: '2px' }} />
          )}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: formStatus.type === "success" ? '#86efac' : 'rgba(255,255,255,0.7)',
            lineHeight: 1.5,
          }}>
            {formStatus.message}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="from_name" style={labelStyle}>Nom complet *</label>
          <input
            id="from_name"
            name="from_name"
            required
            placeholder="Jean Dupont"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <label htmlFor="phone" style={labelStyle}>Téléphone *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+33 6 12 34 56 78"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>

      <div>
        <label htmlFor="from_email" style={labelStyle}>Email *</label>
        <input
          id="from_email"
          name="from_email"
          type="email"
          required
          placeholder="jean.dupont@email.com"
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Votre message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez-nous votre projet, votre véhicule et vos objectifs de performance..."
          style={{ ...inputStyle, resize: 'vertical', minHeight: '128px' }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-racing w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ fontSize: '0.875rem', paddingTop: '1rem', paddingBottom: '1rem' }}
      >
        {isSubmitting ? (
          'Envoi en cours...'
        ) : (
          <>
            Envoyer ma demande
            <Send style={{ width: '16px', height: '16px' }} />
          </>
        )}
      </button>
    </form>
  );
});
