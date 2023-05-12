/* eslint-disable react-hooks/rules-of-hooks */
import DashboardIcon from '@mui/icons-material/Dashboard'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import AddBoxIcon from '@mui/icons-material/AddBox'
import CategoryIcon from '@mui/icons-material/Category'
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
		icon: AddBoxIcon,
	},
	{
		text: 'About',
		key: 'about',
		sub: false,
		icon: CategoryIcon,
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
