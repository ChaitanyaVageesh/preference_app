import { Progress } from "@/components/ui/progress"

interface ProgressIndicatorProps {
  currentPair: number
  totalPairs: number
  completedPairs: number
}

export function ProgressIndicator({ currentPair, totalPairs, completedPairs }: ProgressIndicatorProps) {
  const progressPercentage = (completedPairs / totalPairs) * 100

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Progress</span>
        <span>
          {completedPairs} of {totalPairs} completed
        </span>
      </div>
      <Progress value={progressPercentage} className="h-2" />
      <div className="text-center mt-2 text-sm font-medium">Current: Pair {currentPair}</div>
    </div>
  )
}
