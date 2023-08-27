import { ProgressSpinner } from 'primereact/progressspinner'

const FloatLoader = () => {
  return (
    <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
  )
}
export default FloatLoader
