/* eslint-disable react-hooks/rules-of-hooks */
import {
	AboutIcon,
	ContactIcon,
	DashboardIcon,
	LogoutIcon,
	SettingIcon,
} from '../assets'
export const sidebarTabsList = [
	{
		text: 'Dashboard',
		key: 'dashboard',
		sub: false,
		icon: DashboardIcon,
	},
	{
		text: 'Contact',
		key: 'contact',
		sub: false,
		icon: ContactIcon,
	},
	{
		text: 'About',
		key: 'about',
		sub: false,
		icon: AboutIcon,
	},
]

export const sidebarBottomList = [
	{
		text: 'Setting',
		key: 'setting',
		sub: false,
		icon: SettingIcon,
	},
	{
		text: 'Logout',
		key: 'logout',
		sub: false,
		icon: LogoutIcon,
	},
]

function uploadAdapter(loader) {
	return {
		upload: () => {
			return new Promise((resolve, reject) => {
				const body = new FormData()
				loader.file.then((file) => {
					body.append('name', Date.now() + file.name)
					body.append('image', file)
					fetch(`${process.env.REACT_APP_BASE_URL}/api/upload`, {
						method: 'post',
						body: body,
						// mode: "no-cors"
					})
						.then((res) => res.json())
						.then((res) => {
							console.log('res', process.env.REACT_APP_PF + res.imgName)
							resolve({
								default: res
									? process.env.REACT_APP_PF + res.imgName
									: 'https://www.whatsappimages.in/wp-content/uploads/2021/01/Feeling-Very-Sad-Images-Photo-Download-3.jpg',
							})
						})
						.catch((err) => {
							reject(err)
						})
				})
			})
		},
	}
}
export function uploadPlugin(editor) {
	editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
		return uploadAdapter(loader)
	}
}
