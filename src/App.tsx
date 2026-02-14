import AnimatedRoutes from 'components/AnimatedRoutes'

export default function App() {
  return (
    <div className="relative h-dvh w-dvw overflow-hidden bg-[linear-gradient(150deg,#2f6f49_0%,#4f9f68_45%,#77d684_100%)]">
      <div className="flex h-full w-full flex-col">
        <AnimatedRoutes />
      </div>
    </div>
  )
}
