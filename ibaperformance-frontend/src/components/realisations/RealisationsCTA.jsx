import { memo } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RealisationsCTA = memo(function RealisationsCTA() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre véhicule ?
          </h2>
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
            Contactez-moi pour discuter de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="default"
              variant="default"
              asChild
            >
              <a href="/#contact">
                Me contacter
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              size="default"
              variant="default"
              asChild
            >
              <a href="/">
                Retour à l'accueil
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});