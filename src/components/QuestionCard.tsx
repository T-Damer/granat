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
          <h2 className="font-bold text-2xl text-text leading-tight">
            {showBackButton && (
              <button
                onClick={onBack}
                className="mr-2 cursor-pointer text-warm-text transition-colors hover:text-red-dark"
              >
                ←
              </button>
            )}
            {question.title}
          </h2>
          <p className="whitespace-pre-wrap text-text-muted">
            {(isDoc && question.docDescription) || question.description}
          </p>
        </div>
      </div>
      {question.extraElement}
      <hr className="h-px w-full border-accent-warm-40 text-accent-warm-40" />
      <div className="flex flex-wrap gap-2">
        {Object.entries(question.answers).map(([key, value]) => (
          <button
            key={key}
            className={cn(
              'w-full cursor-pointer rounded-xl border px-3 py-2 text-left text-sm leading-tight transition-colors',
              selectedAnswerId === Number(key)
                ? 'border-red-dark bg-red-dark text-surface'
                : 'border-accent-warm-40 bg-surface-soft text-text hover:bg-surface-hover'
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
