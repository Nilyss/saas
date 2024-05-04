// styles
import './popUp.scss'

// types
import { ReactElement } from 'react'

interface PopUpProps {
  message: string
  onConfirm: () => void
  onCancel: () => void
}

export default function PopUp({
  message,
  onConfirm,
  onCancel,
}: PopUpProps): ReactElement {
  return (
    <section className={'popUp'}>
      <p>{message}</p>
      <div>
        <button className={'confirm'} onClick={onConfirm}>
          Valider
        </button>
        <button className={'cancel'} onClick={onCancel}>
          Annuler
        </button>
      </div>
    </section>
  )
}
