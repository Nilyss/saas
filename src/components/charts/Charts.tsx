// styles
import './charts.scss'

// hooks
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

// types
import { ReactElement } from 'react'

export default function Charts({ values }: { values: number[] }): ReactElement {
  const formattedData = values.map((Solde, index) => ({
    name: `Mois ${index + 1}`,
    Solde,
  }))

  return (
    <article className={'charts'}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          className={'lineChart'}
          data={formattedData}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Solde"
            stroke="#ea4c89"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  )
}
