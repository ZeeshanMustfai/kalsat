import { Card } from '@mui/material'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Page404 from './components/404page'
import Dashboard from './components/dashboard/Dashboard'
import Sidebar from './layout/Sidebar'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={
						<Sidebar>
							<Dashboard />
						</Sidebar>
					}
				/>{' '}
				<Route
					path='/dashboard'
					element={
						<Sidebar>
							<Dashboard />
						</Sidebar>
					}
				/>{' '}
				<Route
					path='*'
					element={
						<Sidebar>
							<Page404 />
						</Sidebar>
					}
				/>
			</Routes>
		</div>
	)
}

export default App
