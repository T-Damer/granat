import { useLingui } from '@lingui/react/macro'
import isDocStore from 'atoms/isDocStore'
import patientsDataStore from 'atoms/patientsDataStore'
import Header from 'components/Header'
import TransitionWrapper from 'components/TransitionWrapper'
import useQuestions from 'helpers/hooks/useQuestions'
import useResult from 'helpers/hooks/useResult'
import saveObjectAsXlsx from 'helpers/saveObjectAsXlsx'
import { useAtom, useAtomValue } from 'jotai'
import { useNavigate } from 'react-router'

const doctorLink = 'https://www.gosuslugi.ru/10700/self/specialty'

export default function ResultPage() {
  const navigate = useNavigate()
  const [atom, setAtom] = useAtom(patientsDataStore)
  const isDoc = useAtomValue(isDocStore)
  const { t } = useLingui()
  const questions = useQuestions()
  const sum = questions.reduce(
    (acc, question) =>
      acc +
      (atom.find((item) => item.questionId === question.id)?.answerId ?? 0),
    0
  )
  const cinGrade =
    atom.find((item) => item.questionId === 11)?.answerId ?? null
  const result = useResult(sum, cinGrade)

  return (
    <TransitionWrapper className="z-10 overflow-auto">
      <Header />
      <div className="flex items-center justify-center py-2">
        <div className="mx-2 flex h-5/6 w-full max-w-prose flex-col gap-y-4 overflow-y-auto rounded-2xl border border-[#DE7E15]/40 bg-[#FEF4CE]/92 p-8 text-[#1f2a22] shadow-2xl backdrop-blur-md">
          <h1 className="font-black text-2xl">{t`Результат оценки`}</h1>
          <p className="font-semibold text-sm">
            {t`Сумма баллов`}: {sum}
          </p>
          <h2 className="font-bold text-lg">{result.title}</h2>
          <p className="whitespace-pre-wrap">
            {isDoc ? result.docDescription : result.description}
          </p>

          {isDoc ? (
            <>
              <h2 className="font-bold text-lg">{t`Тактика ведения`}</h2>
              <p className="whitespace-pre-wrap">{result.treatment}</p>
            </>
          ) : null}

          <div className="flex flex-col items-center gap-2">
            <button
            className="w-full rounded-3xl border border-[#DE7E15] bg-[#FEF4CE] px-6 py-3 font-semibold text-[#7a3e10] transition-colors hover:bg-[#fde9b0]"
            onClick={() => {
              setAtom([])
              navigate('/select')
            }}
          >{t`Пройти заново`}</button>

            <button
              className="w-full rounded-3xl bg-[#C30108] px-6 py-3 font-semibold text-[#FEF4CE] transition-colors hover:bg-[#E20000]"
              onClick={() =>
                saveObjectAsXlsx(t`Результат оценки`, atom, result, questions)
              }
            >{t`Сохранить и выгрузить`}</button>

            {!isDoc && sum >= 10 ? (
              <button
                className="w-full rounded-3xl bg-[#E20000] px-6 py-4 font-bold text-[#FEF4CE] leading-6 transition-colors hover:bg-[#C30108]"
                onClick={() => window.open(doctorLink, '_blank')}
              >{t`Обратиться к гинекологу`}</button>
            ) : null}
          </div>
        </div>
      </div>
    </TransitionWrapper>
  )
}
