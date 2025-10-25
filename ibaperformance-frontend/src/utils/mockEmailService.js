/**
 * Service de mock pour le développement local
 * Simule l'envoi d'email sans appeler l'API réelle
 *
 * ⚠️ À UTILISER UNIQUEMENT EN DÉVELOPPEMENT
 */

export const sendEmailMock = async (data) => {
  // Simule un délai réseau
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simule une validation
  if (!data.from_email || !data.from_email.includes('@')) {
    throw new Error('Email invalide');
  }

  // Log en console pour debugging
  console.log('📧 [MOCK] Email qui aurait été envoyé:', {
    to: 'iba.performance@gmail.com',
    from: data.from_email,
    subject: `Nouveau message de ${data.from_name}`,
    body: data.message,
    phone: data.phone,
  });

  // Simule une réponse réussie
  return {
    success: true,
    message: 'Email envoyé (mode développement - mock)'
  };
};

/**
 * Détecte si on est en environnement de développement local
 */
export const isLocalDevelopment = () => {
  return window.location.hostname === 'localhost' ||
         window.location.hostname === '127.0.0.1';
};
