import { useBeforeUnload, useNavigate } from 'react-router'
import LogoImg from './logo.webp'

export default function Logo() {
  const navigate = useNavigate()
  useBeforeUnload(() => navigate('/select'))

  return (
    <div
      className="flex cursor-pointer gap-2 font-bold text-surface text-xl transition-opacity hover:opacity-80"
      onClick={() => navigate('/select')}
    >
      <span className="flex h-10 w-12 items-center justify-center rounded-full border border-accent-warm-60 bg-red-dark-90 p-1 text-xl shadow-lg backdrop-blur-2xl">
        <img src={LogoImg} alt="Logo" width={32} height={32} />
      </span>
    </div>
  )
}
