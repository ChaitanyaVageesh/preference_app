"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoeCard } from "./shoe-card"
import type { Shoe } from "@/lib/supabase"

interface ShoePairComparisonProps {
  shoes: [Shoe, Shoe]
  selectedShoeId: number | null
  onShoeSelect: (shoeId: number) => void
  pairNumber: number
}

const pairDimensions = [
  "Price sensitivity",
  "Brand outlook",
  "Aesthetic boldness",
  "Sustainability vs. performance tech",
  "Use versatility",
  "Comfort vs. appearance",
  "Trend adoption",
  "Durability mindset",
  "Innovation vs. tradition",
  "Ethics vs. practicality",
]

export function ShoePairComparison({ shoes, selectedShoeId, onShoeSelect, pairNumber }: ShoePairComparisonProps) {
  const dimension = pairDimensions[pairNumber - 1] || `Pair ${pairNumber}`

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">
          <div className="text-sm text-gray-500 mb-1">Testing: {dimension}</div>
          <div>Pair {pairNumber}: Choose Your Preferred Shoe</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.id}
              shoe={shoe}
              isSelected={selectedShoeId === shoe.id}
              onSelect={() => onShoeSelect(shoe.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
