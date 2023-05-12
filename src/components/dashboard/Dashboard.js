import { Grid, Typography } from '@mui/material'
import React from 'react'
import Register from '../registeration/Register'

const Dashboard = () => {
	return (
		<>
			<Grid container width={'100%'} rowGap={2}>
				<Grid item xs={12} md={12}>
					<Register />
				</Grid>
			</Grid>
		</>
	)
}

export default Dashboard
