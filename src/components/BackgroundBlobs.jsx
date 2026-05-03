function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>
    </div>
  )
}

export default BackgroundBlobs
