import { memo } from "react";
import { Filter } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const RealisationsFilters = memo(({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
}) => {
  return (
    <section className="relative py-8 bg-zinc-900 border-y border-zinc-800 sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 overflow-x-auto">
          <div className="flex items-center gap-2 text-zinc-400 shrink-0">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filtrer :</span>
          </div>
          
          <Tabs value={selectedCategory} onValueChange={onCategoryChange} className="flex-1">
            <TabsList className="bg-zinc-800 border border-zinc-700 inline-flex">
              {categories.map(cat => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white text-zinc-400 whitespace-nowrap"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </section>
  );
});