import { lazy } from 'react'
// import { NotepadIcon, SearchFileIcon, MoneyIcon, TruckIcon } from './assets'

const Login = lazy(() =>
  import('./modules/authentication/login/login.container')
)

const ListUsers = lazy(() =>
  import('./modules/users/list-users/list-users.container')
)

export const routersAuth = [
  { path: '/login', component: Login, exact: true },
]

export const routersAuthenticated = [
  { path: '/', component: ListUsers, exact: true },
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
