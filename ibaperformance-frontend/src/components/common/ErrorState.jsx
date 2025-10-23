import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ErrorState({ 
  message = "Une erreur est survenue", 
  onRetry,
  showRetry = true, 
}) {
  return (
    <div className="min-h-screen bg-zinc-950 pt-20 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-6">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-3">
          Oups, une erreur est survenue
        </h2>
        
        <p className="text-zinc-400 mb-6">{message}</p>
        
        {showRetry && onRetry && (
          <Button 
            onClick={onRetry}
            variant="default"
            className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200"
          >
            Réessayer
          </Button>
        )}
      </div>
    </div>
  );
}