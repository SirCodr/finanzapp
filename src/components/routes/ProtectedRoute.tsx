import { useLanguagesStore } from '@src/store/languages'
import { Outlet } from 'react-router-dom'
import { getAllLanguages } from '@src/services/languages'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import Layout from '../Layout'

const ProtectedRoute = () => {
  const [languages, setLanguages] = useLanguagesStore(state => [state.languages, state.setLanguages])
  const { i18n } = useTranslation()

  const handleLoad = async () => {
    let languagesFound

    if (!languages.length) {
      const languagesFound = await getAllLanguages(i18n.language)
      setLanguages(languagesFound)
    }

    return languagesFound ?? languages
  }

  const { isLoading, error } = useQuery({
    queryKey: ['languages'],
    queryFn: handleLoad
  })

  if (error) return <span>Error</span>

  if (isLoading) return <span>Loading</span>

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
export default ProtectedRoute
