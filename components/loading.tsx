export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-purple-500 border-r-pink-500 border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute top-2 left-2 w-20 h-20 border-4 border-t-transparent border-r-purple-500 border-b-pink-500 border-l-blue-500 rounded-full animate-spin animation-delay-200"></div>
        <div className="absolute top-4 left-4 w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-pink-500 rounded-full animate-spin animation-delay-400"></div>
      </div>
    </div>
  )
}
