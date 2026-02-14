import { Trans, useLingui } from '@lingui/react/macro'
import { useState } from 'react'

export default function BmiCalculator() {
  const { t } = useLingui()
  const [{ height, weight }, setValue] = useState({ height: 150, weight: 50 })

  const rawResult = weight / (height / 100) ** 2
  const result = Math.round(rawResult * 100) / 100 || 0

  return (
    <div className="flex flex-col gap-1">
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[#1f2a22]">
          <Trans>Рост (см)</Trans>
        </legend>
        <input
          type="number"
          className="input input-sm validator"
          required
          placeholder={t`Рост (см)`}
          min="1"
          max="300"
          value={height}
          onChange={(e) => {
            setValue((prev) => ({
              ...prev,
              height: e.target.valueAsNumber || 0,
            }))
          }}
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[#1f2a22]">
          <Trans>Вес (кг)</Trans>
        </legend>
        <input
          type="number"
          className="input input-sm validator"
          required
          placeholder={t`Вес (кг)`}
          min="1"
          max="300"
          value={weight}
          onChange={(e) => {
            setValue((prev) => ({
              ...prev,
              weight: e.target.valueAsNumber || 0,
            }))
          }}
        />
      </fieldset>

      <p className="text-[#1f2a22]">
        <Trans>Результат:</Trans> {result}
      </p>
    </div>
  )
}
