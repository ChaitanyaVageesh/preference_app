"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ShoePairComparison } from "@/components/shoe-pair-comparison"
import { ProgressIndicator } from "@/components/progress-indicator"
import type { Shoe } from "@/lib/supabase"
import { CheckCircle, ArrowRight, ArrowLeft, RotateCcw, AlertTriangle } from "lucide-react"

// Mock data for when Supabase is not available
const mockShoeData: Shoe[] = [
  // Pair 1: Price sensitivity
  {
    id: 1,
    name: "Converse Chuck Taylor All Star",
    price: 65.0,
    features: ["Canvas upper", "Rubber toe cap", "Vulcanized construction", "Timeless design", "Affordable classic"],
    image_url: "/images/converse-chuck-taylor.jpg",
    pair_id: 1,
  },
  {
    id: 2,
    name: "Common Projects Achilles Low",
    price: 425.0,
    features: [
      "Premium Italian leather",
      "Minimalist design",
      "Gold foil serial numbers",
      "Handcrafted quality",
      "Luxury materials",
    ],
    image_url: "/images/common-projects-achilles.jpg",
    pair_id: 1,
  },
  // Pair 2: Brand outlook
  {
    id: 3,
    name: "Adidas Stan Smith",
    price: 100.0,
    features: ["Iconic 3-stripes", "Global recognition", "Leather upper", "Perforated details", "Tennis heritage"],
    image_url: "/images/adidas-stan-smith.jpg",
    pair_id: 2,
  },
  {
    id: 4,
    name: "Veja V-10",
    price: 150.0,
    features: [
      "Sustainable materials",
      "Brazilian craftsmanship",
      "Organic cotton",
      "Wild rubber sole",
      "Ethical production",
    ],
    image_url: "/images/veja-v10.jpg",
    pair_id: 2,
  },
  // Pair 3: Aesthetic boldness
  {
    id: 5,
    name: "Maison Margiela GAT Replica",
    price: 395.0,
    features: [
      "Minimalist white leather",
      "Clean lines",
      "Subtle branding",
      "German Army Trainer inspired",
      "Understated luxury",
    ],
    image_url: "/images/maison-margiela-gat.jpg",
    pair_id: 3,
  },
  {
    id: 6,
    name: "Nike Dunk Low 'What The'",
    price: 180.0,
    features: [
      "Multi-color blocking",
      "Bold graphics",
      "Statement design",
      "Eye-catching patterns",
      "Expressive styling",
    ],
    image_url: "/images/nike-dunk-what-the.jpg",
    pair_id: 3,
  },
  // Pair 4: Sustainability vs performance
  {
    id: 7,
    name: "Allbirds Tree Runners",
    price: 98.0,
    features: ["Eucalyptus tree fiber", "Carbon negative", "Machine washable", "Renewable materials", "Eco-friendly"],
    image_url: "/images/allbirds-tree-runners.jpg",
    pair_id: 4,
  },
  {
    id: 8,
    name: "Nike Vaporfly Next% 3",
    price: 250.0,
    features: [
      "Carbon fiber plate",
      "ZoomX foam",
      "Performance optimization",
      "Race-day technology",
      "Speed enhancement",
    ],
    image_url: "/images/nike-vaporfly-next.jpg",
    pair_id: 4,
  },
  // Pair 5: Use versatility
  {
    id: 9,
    name: "Nike Air Force 1",
    price: 110.0,
    features: ["Versatile styling", "Gym to street", "Leather upper", "Air cushioning", "Multi-purpose design"],
    image_url: "/images/nike-air-force-1.jpg",
    pair_id: 5,
  },
  {
    id: 10,
    name: "Salomon Speedcross 5",
    price: 130.0,
    features: ["Trail-specific", "Aggressive lugs", "Quicklace system", "Mud shedding", "Technical performance"],
    image_url: "/images/salomon-speedcross.jpg",
    pair_id: 5,
  },
  // Pair 6: Comfort vs appearance
  {
    id: 11,
    name: "Hoka Clifton 9",
    price: 140.0,
    features: ["Maximum cushioning", "Orthopedic support", "Lightweight foam", "Comfort-first design", "All-day wear"],
    image_url: "/images/hoka-clifton.jpg",
    pair_id: 6,
  },
  {
    id: 12,
    name: "Saint Laurent Court Classic",
    price: 495.0,
    features: ["Sleek silhouette", "Luxury leather", "Fashion-forward", "Minimal padding", "Style-prioritized"],
    image_url: "/images/saint-laurent-court.jpg",
    pair_id: 6,
  },
  // Pair 7: Trend adoption
  {
    id: 13,
    name: "Balenciaga Triple S",
    price: 1050.0,
    features: [
      "Chunky silhouette",
      "Triple-stacked sole",
      "Dad shoe aesthetic",
      "Trend-setting design",
      "Bold proportions",
    ],
    image_url: "/images/balenciaga-triple-s.jpg",
    pair_id: 7,
  },
  {
    id: 14,
    name: "Vans Old Skool",
    price: 65.0,
    features: ["Low-profile design", "Classic proportions", "Timeless appeal", "Waffle outsole", "Understated style"],
    image_url: "/images/vans-old-skool.jpg",
    pair_id: 7,
  },
  // Pair 8: Durability mindset
  {
    id: 15,
    name: "Vans Sk8-Hi MTE",
    price: 85.0,
    features: [
      "Vulcanized construction",
      "Weather resistance",
      "Durable materials",
      "Long-lasting build",
      "Rugged design",
    ],
    image_url: "/images/vans-sk8-hi-mte.jpg",
    pair_id: 8,
  },
  {
    id: 16,
    name: "Adidas Ultraboost 22",
    price: 190.0,
    features: ["Primeknit upper", "Lightweight construction", "Boost cushioning", "Sock-like fit", "Modern materials"],
    image_url: "/images/adidas-ultraboost.jpg",
    pair_id: 8,
  },
  // Pair 9: Innovation vs tradition
  {
    id: 17,
    name: "Nike Adapt BB 2.0",
    price: 350.0,
    features: [
      "Auto-lacing technology",
      "Smartphone app control",
      "LED indicators",
      "Tech innovation",
      "Digital integration",
    ],
    image_url: "/images/nike-adapt-bb.jpg",
    pair_id: 9,
  },
  {
    id: 18,
    name: "Paraboot Chambord",
    price: 380.0,
    features: [
      "Hand-stitched construction",
      "Norwegian welt",
      "Traditional craftsmanship",
      "Full-grain leather",
      "Heritage techniques",
    ],
    image_url: "/images/paraboot-chambord.jpg",
    pair_id: 9,
  },
  // Pair 10: Ethics vs practicality
  {
    id: 19,
    name: "Veja Esplar Vegan",
    price: 120.0,
    features: [
      "Certified vegan materials",
      "Cruelty-free production",
      "Corn waste bio-based",
      "Ethical sourcing",
      "Animal-friendly",
    ],
    image_url: "/images/veja-esplar-vegan.jpg",
    pair_id: 10,
  },
  {
    id: 20,
    name: "Red Wing Heritage Blacksmith",
    price: 320.0,
    features: [
      "Full-grain leather",
      "Goodyear welt construction",
      "Traditional materials",
      "Durability focus",
      "Performance-oriented",
    ],
    image_url: "/images/red-wing-blacksmith.jpg",
    pair_id: 10,
  },
]

export default function ShoePreferencePipeline() {
  const [shoes, setShoes] = useState<Shoe[]>([])
  const [currentPairIndex, setCurrentPairIndex] = useState(0)
  const [userChoices, setUserChoices] = useState<Record<number, number>>({})
  const [userId] = useState(() => crypto.randomUUID())
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [usingMockData, setUsingMockData] = useState(false)

  const totalPairs = 10

  useEffect(() => {
    // Always use mock data for now to ensure functionality
    setShoes(mockShoeData)
    setUsingMockData(true)
    setIsLoading(false)
  }, [])

  const getCurrentPairShoes = (): [Shoe, Shoe] | null => {
    const currentPairId = currentPairIndex + 1
    const pairShoes = shoes.filter((shoe) => shoe.pair_id === currentPairId)

    if (pairShoes.length === 2) {
      return [pairShoes[0], pairShoes[1]]
    }
    return null
  }

  const handleShoeSelect = (shoeId: number) => {
    const currentPairId = currentPairIndex + 1
    setUserChoices((prev) => ({
      ...prev,
      [currentPairId]: shoeId,
    }))
  }

  const handleNext = () => {
    if (currentPairIndex < totalPairs - 1) {
      setCurrentPairIndex((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPairIndex > 0) {
      setCurrentPairIndex((prev) => prev - 1)
    }
  }

  const handleSubmit = async () => {
    // Simulate successful submission in demo mode
    setIsSubmitting(true)
    setTimeout(() => {
      setIsComplete(true)
      setIsSubmitting(false)
    }, 1000)
  }

  const handleRestart = () => {
    setCurrentPairIndex(0)
    setUserChoices({})
    setIsComplete(false)
    setError(null)
  }

  const completedPairs = Object.keys(userChoices).length
  const currentPairShoes = getCurrentPairShoes()
  const currentPairId = currentPairIndex + 1
  const hasCurrentChoice = userChoices[currentPairId] !== undefined
  const allChoicesMade = completedPairs === totalPairs

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading shoe collection...</p>
        </div>
      </div>
    )
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-2xl">Thank You!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">Your shoe preferences have been successfully recorded!</p>
            <p className="text-sm text-gray-500">User ID: {userId.slice(0, 8)}...</p>
            <Alert className="text-left">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-sm">
                <strong>Demo Mode:</strong> Add Supabase integration to save preferences to a real database.
              </AlertDescription>
            </Alert>
            <Button onClick={handleRestart} variant="outline" className="w-full bg-transparent">
              <RotateCcw className="h-4 w-4 mr-2" />
              Start Over
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shoe Preference Collection</h1>
          <p className="text-gray-600">
            Choose your preferred shoe from each pair to help us understand your style psychology
          </p>
          <div className="mt-4">
            <Alert className="max-w-md mx-auto">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-sm">
                <strong>Demo Mode:</strong> Fully functional app with real shoe data. Add Supabase to save to database.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        <ProgressIndicator currentPair={currentPairIndex + 1} totalPairs={totalPairs} completedPairs={completedPairs} />

        {error && (
          <Alert className="mb-6 max-w-2xl mx-auto">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {currentPairShoes && (
          <div className="mb-8">
            <ShoePairComparison
              shoes={currentPairShoes}
              selectedShoeId={userChoices[currentPairId] || null}
              onShoeSelect={handleShoeSelect}
              pairNumber={currentPairIndex + 1}
            />
          </div>
        )}

        <div className="flex justify-between items-center max-w-2xl mx-auto">
          <Button onClick={handlePrevious} disabled={currentPairIndex === 0} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <div className="text-sm text-gray-500">
            {currentPairIndex + 1} of {totalPairs}
          </div>

          {currentPairIndex < totalPairs - 1 ? (
            <Button onClick={handleNext} disabled={!hasCurrentChoice}>
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!allChoicesMade || isSubmitting}
              className="bg-green-600 hover:bg-green-700"
            >
              {isSubmitting ? "Submitting..." : "Submit Preferences"}
            </Button>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Your choices reveal insights about your style psychology and values</p>
        </div>
      </div>
    </div>
  )
}
