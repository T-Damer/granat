import { Trans, useLingui } from '@lingui/react/macro'
import isDocStore from 'atoms/isDocStore'
import Card from 'components/Card'
import Header from 'components/Header'
import TransitionWrapper from 'components/TransitionWrapper'
import { useSetAtom } from 'jotai'
import { useNavigate } from 'react-router'

export default function MainPage() {
  const { t } = useLingui()
  const navigate = useNavigate()
  const setIsDoc = useSetAtom(isDocStore)

  return (
    <TransitionWrapper className="overflow-auto">
      <Header />
      <div className="flex h-full flex-col items-center justify-center gap-8 p-2 md:flex-row">
        <Card className="border border-[#DE7E15]/40 bg-[#FEF4CE]/92 text-center text-[#1f2a22] backdrop-blur-md">
          <h1 className="font-black text-2xl">Гранат</h1>
          <p>
            <Trans>
              Это виртуальный консультант для оценки степени риска развития
              цервикальной интраэпителиальной неоплазии и рака шейки матки.
              Врачам доступна расширенная тактика ведения по результатам.
            </Trans>
          </p>
        </Card>

        <Card
          className="items-center justify-center border border-[#C30108]/30 bg-[#FEF4CE]/92 font-bold text-2xl text-[#7a3e10] transition-all hover:scale-105 hover:bg-[#fde9b0] active:scale-110"
          onClick={() => {
            setIsDoc(true)
            navigate('/questions')
          }}
        >
          {t`Врач`}
        </Card>
        <Card
          className="items-center justify-center border border-[#C30108]/30 bg-[#FEF4CE]/92 font-bold text-2xl text-[#7a3e10] transition-all hover:scale-105 hover:bg-[#fde9b0] active:scale-110"
          onClick={() => {
            setIsDoc(false)
            navigate('/questions')
          }}
        >
          {t`Пациент`}
        </Card>
      </div>
    </TransitionWrapper>
  )
}
