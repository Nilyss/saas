// styles
import './generateInputs.scss'

// types
import { ChangeEvent, ReactElement } from 'react'
interface IInput {
  id: number
  value: string
}

// hooks
import { useState, useEffect } from 'react'

export default function GenerateInputs({
  onValuesChange,
}: {
  onValuesChange: (values: number[]) => void
}): ReactElement {
  const [inputs, setInputs] = useState([{ id: 1, value: '' }])

  const handleChange = (
    id: number,
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    const newInputs: IInput[] = inputs.map((input: IInput): IInput => {
      if (input.id === id) {
        return { ...input, value: event.target.value }
      }
      return input
    })
    setInputs(newInputs)
    onValuesChange(
      newInputs.map((input: IInput) => parseFloat(input.value) || 0),
    )
  }

  useEffect((): void => {
    const savedInputs: string | null = localStorage.getItem('chartsInputs')
    if (savedInputs) {
      const loadedInputs = JSON.parse(savedInputs)
      setInputs(loadedInputs)
      onValuesChange(
        loadedInputs.map((input: IInput) => parseFloat(input.value) || 0),
      )
    }
  }, [])

  useEffect((): void => {
    if (inputs.length > 0 && inputs[inputs.length - 1].value !== '') {
      setInputs([...inputs, { id: inputs.length + 1, value: '' }])
    }
  }, [inputs])

  useEffect((): void => {
    localStorage.setItem('chartsInputs', JSON.stringify(inputs))
  }, [inputs])

  return (
    <ul className={'setValue'}>
      {inputs.map((input: IInput) => (
        <li key={input.id} className={'monthValue'}>
          <label>Solde : </label>
          <input
            type="number"
            value={input.value}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(input.id, event)
            }
            placeholder={`Mois ${input.id}`}
          />
          <p>€</p>
        </li>
      ))}
    </ul>
  )
}
