import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Avatar, Badge, Drawer, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { BrowserView, MobileView } from 'react-device-detect'
import './sidebar.scss'
import NavItem from './NavItem'
import { makeStyles, useTheme } from '@mui/styles'
const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	paper: {
		background: '#5579F7',
	},
})

const drawer = (
	<>
		<BrowserView>
			<NavItem />
		</BrowserView>
		<MobileView>
			<NavItem />
		</MobileView>
	</>
)

export default function Sidebar({ children }, props) {
	const { window } = props
	const theme = useTheme()
	const classes = useStyles()
	const [mobileOpen, setMobileOpen] = useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const container =
		window !== undefined ? () => window().document.body : undefined

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar
					variant='dense'
					sx={{ minHeight: '92px', background: theme.palette.secondary.main }}
				>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{
							fontWeight: 700,
							fontSize: '28px',
							lineHeight: '28px',
							color: '#333333',
						}}
					>
						Registration
					</Typography>

					{/* <Box>
						<IconButton sx={{ p: 0 }}>
							<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
						</IconButton>
						<Badge color='secondary' badgeContent={1}></Badge>
					</Box> */}
				</Toolbar>
			</AppBar>
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'
			>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					classes={{ paper: classes.paper }}
					PaperProps={{
						sx: {
							background: '#5579F7',
							borderRadius: '20px',
						},
					}}
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				{children}
			</Box>
		</Box>
	)
}
