import { useLanguagesStore } from '@src/store/languages'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { getAllLanguages } from '@src/services/languages'
import { useTranslation } from 'react-i18next'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Layout from '../Layout'
import { useEffect } from 'react'
import useAuth from '@src/hooks/useAuth'

const ProtectedRoute = () => {
  const [languages, setLanguages] = useLanguagesStore((state) => [
    state.languages,
    state.setLanguages
  ])
  const { i18n } = useTranslation()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const location = useLocation()
  const { getUserSession } = useAuth()

  const handleLoad = async () => {
    let languagesFound

    if (!languages.length) {
      const languagesFound = await getAllLanguages(i18n.language)
      setLanguages(languagesFound)
    }

    return languagesFound ?? languages
  }

  const { isLoading: userSessionLoading, error: userSessionError, data: userSession } = useQuery({
    queryKey: ['userSession'],
    queryFn: getUserSession
  })
  const { isLoading, error } = useQuery({
    queryKey: ['languages'],
    queryFn: handleLoad,
    enabled: Boolean(userSession)
  })

  useEffect(() => {
    if (!userSessionLoading && !userSession?.session && location.pathname !== '/login') navigate('/login')

    return () => queryClient.cancelQueries(['languages'])
  }, [userSession])

  if (error) return <span>Error</span>

  if (isLoading || userSessionLoading) return <span>Loading</span>

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
export default ProtectedRoute
