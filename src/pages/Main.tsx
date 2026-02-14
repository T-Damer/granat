import Logo from 'assets/Logo'
import TransitionWrapper from 'components/TransitionWrapper'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_top,_#A8FFDF_0%,_#77D684_45%,_#3E8C59_100%)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <motion.h1
          className="mb-4 font-bold font-heading text-5xl text-[#FEF4CE]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Logo />
        </motion.h1>
      </motion.div>
    </motion.div>
  )
}

export default function MainPage() {
  const navigate = useNavigate()

  return (
    <TransitionWrapper className="overflow-auto">
      <div className="flex h-full flex-col items-center justify-center gap-8 p-2 md:flex-row">
        <WelcomeScreen onComplete={() => navigate('/select')} />
      </div>
    </TransitionWrapper>
  )
}
