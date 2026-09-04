import { useScroll } from '../hooks/useScroll'

export default function ScrollProgress() {
  const { scrollProgress } = useScroll()

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent"
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="h-full bg-gradient-to-r from-secondary via-primary to-accent transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
