// styles
import './stats.scss'

// types
import { ReactElement } from 'react'

// hooks
import { useState } from 'react'

// components
import Charts from '../../components/charts/Charts.tsx'
import GenerateInputs from '../../components/generateInputs/GenerateInputs.tsx'

export default function Stats(): ReactElement {
  const [values, setValues] = useState<number[]>([])

  const handleValuesChange = (newValues: number[]): void => {
    setValues(newValues)
  }

  return (
    <section>
      <article className={'sectionHeader'}>
        <h2>Suivis des soldes mensuels</h2>
      </article>
      <Charts values={values} />
      <GenerateInputs onValuesChange={handleValuesChange} />
    </section>
  )
}
