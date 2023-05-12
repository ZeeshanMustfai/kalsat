import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	palette: {
		primary: {
			main: '#5579F7',
		},
		secondary: {
			main: '#F0F3FF',
		},
	},
	typography: {
		allVariants: {
			fontFamily: 'DM Sans',
		},
	},

	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					background: '#ffffff',
					borderRadius: '6px',
					border: '1px solid #fff',
				},
			},
		},
	},
})
