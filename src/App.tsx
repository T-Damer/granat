import AnimatedRoutes from 'components/AnimatedRoutes'

export default function App() {
  return (
    <div className="relative h-dvh w-dvw overflow-hidden bg-[linear-gradient(150deg,var(--c-bg-start)_0%,var(--c-bg-mid)_45%,var(--c-bg-end)_100%)]">
      <div className="flex h-full w-full flex-col">
        <AnimatedRoutes />
      </div>
    </div>
  )
}
