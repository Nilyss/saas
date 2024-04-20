import './currencyForm.scss'
import {
  ReactElement,
  ChangeEvent,
  useState,
  FormEvent,
  useEffect,
} from 'react'

interface InputInfo {
  name: string
}

export default function CurrencyForm(): ReactElement {
  const [inputs, setInputs] = useState<InputInfo[]>([])
  const [inputName, setInputName] = useState('')
  const [incomeValues, setIncomeValues] = useState<{ [key: string]: number }>(
    {},
  )
  const [expenseValues, setExpenseValues] = useState<{ [key: string]: number }>(
    {},
  )
  const [total, setTotal] = useState(0)

  const handleInputNameChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputName(event.target.value)
  }

  const handleAddInput = (): void => {
    if (inputName) {
      setInputs([...inputs, { name: inputName }])
      setInputName('')
    }
  }

  const fixedIncome: string[] = ['Salaire', 'CAF', 'Autres']
  const fixedExpense: string[] = [
    'Loyer',
    'EDF',
    'Assurance',
    'Téléphone',
    'Crédit A',
    'Crédit B',
  ]

  const handleIncomeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string; value: string } = event.target
    const newValue: number = parseFloat(value) || 0
    setIncomeValues(
      (prevValues: { [name: string]: number }): { [name: string]: number } => ({
        ...prevValues,
        [name]: newValue,
      }),
    )
  }

  const handleExpenseChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string; value: string } = event.target
    const newValue: number = parseFloat(value) || 0
    setExpenseValues(
      (prevValues: { [name: string]: number }): { [name: string]: number } => ({
        ...prevValues,
        [name]: newValue,
      }),
    )
  }

  useEffect((): void => {
    const totalIncome: number = Object.values(incomeValues).reduce(
      (sum: number, value: number) => sum + value,
      0,
    )
    const totalExpense: number = Object.values(expenseValues).reduce(
      (sum: number, value: number) => sum + value,
      0,
    )
    setTotal(totalIncome - totalExpense)
  }, [incomeValues, expenseValues])

  return (
    <section className="calculator">
      <article className={'incomeInputs'}>
        <h2>Rentrée d'argent : </h2>
        <div className={'inputsWrapper'}>
          {fixedIncome.map((income: string, index: number) => (
            <div key={index} className="inputGroup">
              <label htmlFor={income}>{income} :</label>
              <div>
                <input
                  type="number"
                  name={income}
                  id={income}
                  placeholder={'0'}
                  onChange={handleIncomeChange}
                />
                <span>€</span>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="expenseInputs">
        <h2>Dépenses pour le mois :</h2>
        <div className={'inputsWrapper'}>
          {fixedExpense.map((expense: string, index: number) => (
            <div key={index} className="inputGroup">
              <label htmlFor={expense}>{expense} :</label>
              <div>
                <input
                  type="number"
                  name={expense}
                  id={expense}
                  placeholder={'0'}
                  onChange={handleExpenseChange}
                />
                <span>€</span>
              </div>
            </div>
          ))}
          {inputs.map((input: InputInfo, index: number) => (
            <div key={index} className="inputGroup">
              <label htmlFor={input.name}>{input.name} :</label>
              <div>
                <input
                  type="number"
                  name={input.name}
                  id={input.name}
                  placeholder={'0'}
                  onChange={handleExpenseChange}
                />
                <span>€</span>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className={'addExpense'}>
        <h2>Ajouter une dépense :</h2>
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
          <div className="inputWrapper">
            <label htmlFor="inputName">Nom :</label>
            <input
              id="inputName"
              value={inputName}
              onChange={handleInputNameChange}
              type="text"
              placeholder="Essence, Sac ..."
            />
            <button onClick={handleAddInput}>Ajouter</button>
          </div>
        </form>
      </article>

      <article className={'totalGroup'}>
        <h2>Reste après les dépenses : </h2>
        <p className={total >= 0 ? 'total positive' : 'total negative'}>
          {total.toFixed(2)}
          <span style={{ color: '#2b2a33' }}>€</span>
        </p>
      </article>
    </section>
  )
}
