import { memo } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const BlogFilters = memo(({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
}) => {
  return (
    <section className="relative py-8 bg-zinc-900 border-y border-zinc-800 sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs value={selectedCategory} onValueChange={onCategoryChange}>
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
    </section>
  );
});