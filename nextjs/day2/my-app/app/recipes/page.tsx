"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface IRecipe {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
}

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const res = await fetch("/api/recipes");
        if (!res.ok) throw new Error();
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading Recipes...</div>;
  if (error)
    return (
      <div className="p-8 text-center text-red-500">
        Failed to load recipes.
      </div>
    );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded shadow-lg">
            <div className="relative h-48 w-full mb-4">
              <Image
                src={recipe.image}
                alt={recipe.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h2 className="text-xl font-semibold">{recipe.name}</h2>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-yellow-500">★ {recipe.rating}</span>
              <span className="text-gray-500 text-sm">
                ({recipe.reviewCount} reviews)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
