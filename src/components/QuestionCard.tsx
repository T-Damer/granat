import { cn } from 'helpers/cn'

import { Question } from 'types/Question'

interface QuestionCardProps {
  question: Question
  onClick: (answer: number) => void
  selectedAnswerId?: number | undefined
  showBackButton?: boolean
  onBack?: () => void
  isDoc?: boolean
}

export default function QuestionCard({
  question,
  onClick,
  selectedAnswerId,
  showBackButton = false,
  onBack,
  isDoc,
}: QuestionCardProps) {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2 leading-tight">
          <h2 className="font-bold text-2xl text-[#1f2a22] leading-tight">
            {showBackButton && (
              <button
                onClick={onBack}
                className="mr-2 cursor-pointer text-[#7a3e10] transition-colors hover:text-[#C30108]"
              >
                ←
              </button>
            )}
            {question.title}
          </h2>
          <p className="whitespace-pre-wrap text-[#304236]">
            {(isDoc && question.docDescription) || question.description}
          </p>
        </div>
      </div>
      {question.extraElement}
      <hr className="h-px w-full border-[#DE7E15]/40 text-[#DE7E15]/40" />
      <div className="flex flex-wrap gap-2">
        {Object.entries(question.answers).map(([key, value]) => (
          <button
            key={key}
            className={cn(
              'w-full cursor-pointer rounded-xl border px-3 py-2 text-left text-sm leading-tight transition-colors',
              selectedAnswerId === Number(key)
                ? 'border-[#C30108] bg-[#C30108] text-[#FEF4CE]'
                : 'border-[#DE7E15]/40 bg-[#fef8df] text-[#1f2a22] hover:bg-[#fde9b0]'
            )}
            onClick={() => onClick(Number(key))}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  )
}
