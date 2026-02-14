import { useBeforeUnload, useNavigate } from 'react-router'
import LogoImg from './logo.webp'

export default function Logo() {
  const navigate = useNavigate()
  useBeforeUnload(() => navigate('/select'))

  return (
    <div
      className="flex cursor-pointer gap-2 font-bold text-[#FEF4CE] text-xl transition-opacity hover:opacity-80"
      onClick={() => navigate('/select')}
    >
      <span className="flex aspect-square rounded-full border border-[#DE7E15]/60 bg-[#C30108]/90 p-3 text-xl shadow-lg backdrop-blur-2xl">
        <img src={LogoImg} alt="Logo" width={32} height={32} />
      </span>
    </div>
  )
}
