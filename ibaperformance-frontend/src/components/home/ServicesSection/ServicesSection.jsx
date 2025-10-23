import { memo } from "react";
import { useServices } from "../../../hooks/useServices";
import { LoadingState } from "../../common/LoadingState";
import { ErrorState } from "../../common/ErrorState";
import { ServicesHeader } from "./ServicesHeader";
import { ServiceCard } from "./ServiceCard";

export const ServicesSection = memo(() => {
  const { services, loading, error } = useServices();

  if (loading) {
    return (
      <section className="relative py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <LoadingState message="Chargement des services..." />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ErrorState message={error} showRetry={false} />
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="relative py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {services.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-500">Aucun service disponible pour le moment.</p>
          </div>
        )}
      </div>
    </section>
  );
});