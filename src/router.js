import { lazy } from 'react'
// import { NotepadIcon, SearchFileIcon, MoneyIcon, TruckIcon } from './assets'

const Login = lazy(() =>
  import('./modules/authentication/login/login.container')
)

const ListUsers = lazy(() =>
  import('./modules/users/list-users/list-users.container')
)
const AddUser = lazy(() =>
  import('./modules/users/add-user/add-user.container')
)
const EditUser = lazy(() =>
  import('./modules/users/edit-user/edit-user.container')
)

export const routersAuth = [
  { path: '/login', component: Login, exact: true },
]

export const routersAuthenticated = [
  { path: '/', component: ListUsers, exact: true },
  { path: '/usuarios', component: ListUsers, exact: true },
  { path: '/usuario/adicionar', component: AddUser },
  { path: '/usuario/editar/:id', component: EditUser },
  // { path: '/cotacoes', component: Quotation, exact: true },
  // { path: '/cotacoes/create', component: CreateQuotation },
  // { path: '/cotacoes/details', component: DetailsQuotation },
  // { path: '/pedidos', component: Request },
]

export const sideBarRoutes = [
  // { path: '/solicitacoes', label: 'Solicitaçoes', icon: NotepadIcon },
  // { path: '/cotacoes', label: 'Cotações', icon: SearchFileIcon },
  // { path: '/pedidos', label: 'Pedidos', icon: MoneyIcon },
  // { path: '/fornecedores', label: 'Fornecedores', icon: TruckIcon },
]
