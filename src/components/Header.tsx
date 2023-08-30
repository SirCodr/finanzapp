import { useState, useEffect } from 'react'
import { useLanguagesStore } from '@src/store/languages'
import { Dropdown } from 'primereact/dropdown'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { i18n } = useTranslation()
  const languages = useLanguagesStore((state) => state.languages)
  const [selectedLanguage, setSelectedLanguage] = useState(null)

  useEffect(() => {
    const languageFound = languages.find((language) => language.code === i18n.language)
    setSelectedLanguage(languageFound)
  }, [languages, i18n.language])

  return (
    <div>
      <Dropdown
        value={selectedLanguage}
        options={languages}
        optionLabel='code'
        placeholder='Select a language'
        onChange={async (e) => { i18n.changeLanguage(e.value.code) }}
        className='uppercase'
      />
    </div>
  )
}

export default Header
