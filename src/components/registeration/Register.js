import React from 'react'
import { Box, TextField, Button, InputLabel, Typography } from '@mui/material'

const Register = () => {
	return (
		<Box component={'div'} className='login-main'>
			<Box component={'div'} maxWidth='600px' width={550}>
				<Typography
					gutterBottom
					className='register-title'
					textAlign={'center'}
				>
					Register Your Store
				</Typography>
				<form>
					<InputLabel>Enter Shopify Store Address:</InputLabel>
					<TextField
						placeholder='Shopify Store Address'
						size='small'
						margin='dense'
						fullWidth
					/>
					<InputLabel sx={{ marginTop: '15px' }}>Enter Email:</InputLabel>
					<TextField
						placeholder='Enter Email'
						size='small'
						margin='dense'
						fullWidth
					/>
					<Box sx={{ textAlign: 'center' }}>
						<Button
							variant='contained'
							sx={{ mt: 2, mb: 1, color: '#fff', textTransform: 'capitalize' }}
							size='large'
						>
							Register
						</Button>
						<Button
							variant='outlined'
							sx={{ mt: 2, mb: 1, ml: 2, textTransform: 'capitalize' }}
							size='large'
						>
							Go Back
						</Button>
					</Box>
				</form>
			</Box>
		</Box>
	)
}

export default Register
