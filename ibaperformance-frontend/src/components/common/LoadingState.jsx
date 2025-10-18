import { Loader2 } from "lucide-react";

export function LoadingState({ message = "Chargement..." }) {
  return (
    <div className="min-h-screen bg-zinc-950 pt-20 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-zinc-400 animate-spin mx-auto mb-4" />
        <p className="text-zinc-400 text-lg">{message}</p>
      </div>
    </div>
  );
}