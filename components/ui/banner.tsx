import { CheckCircle, X } from "lucide-react"

interface BannerProps {
  message: string
  onClose: () => void
}

export function Banner({ message, onClose }: BannerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 bg-green-50 text-green-800 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
      <CheckCircle className="w-5 h-5" />
      <span>{message}</span>
      <button onClick={onClose} className="ml-4">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
} 