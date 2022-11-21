import './App.css'
import Header from './components/Header'
import Filters from './components/Filters'
import Contents from './components/Contents'
import React from 'react'
import { useTheme } from './styles-components/themesContext'
import { CountriesCacheProvider } from './data/cacheCountries'
// import {ErrorBoundary} from 'react-error-boundary'

const App = () => {
	const [theme] = useTheme()

	const [search, setSearch] = React.useState('')
	const [region, setRegion] = React.useState('All')

	const handleSearchChange = (value) => {
		setSearch(value)
	}

	const handleRegion = (value) => {
		setRegion(value)
	}

	return (
		<div
		className='min-h-screen'
			style={{ backgroundColor: theme.backgroundP, color: theme.foreground }}>
			<Header />
			<Filters
				search={search}
				region={region}
				handleRegion={handleRegion}
				handleSearchChange={handleSearchChange}
			/>
			<CountriesCacheProvider>
				<Contents
					search={search}
					region={region}
				/>
			</CountriesCacheProvider>
		</div>
	)
}

export default App
