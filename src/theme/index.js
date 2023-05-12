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

	// components: {
	// 	MuiToolbar: {
	// 		styleOverrides: {
	// 			dense: {
	// 				height: 32,
	// 				minHeight: 32,
	// 			},
	// 		},
	// 	},
	// },
})
