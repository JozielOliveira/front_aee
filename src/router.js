import { lazy } from 'react'
// import { NotepadIcon, SearchFileIcon, MoneyIcon, TruckIcon } from './assets'

const Login = lazy(() =>
  import('./modules/authentication/login/login.container')
)
const Register = lazy(() =>
  import('./modules/authentication/register/register.container')
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

const ListStudents = lazy(() =>
  import('./modules/students/list-students/list-students.container')
)
const Attend = lazy(() =>
  import('./modules/students/attend/attend.container')
)
const Referral = lazy(() =>
  import('./modules/students/referral/referral.container')
)

const AddStudent = lazy(() =>
  import('./modules/students/add-student/add-student.container')
)
const EditStudent = lazy(() =>
  import('./modules/students/edit-student/edit-student.container')
)

export const routersAuth = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

export const routersAuthenticated = [
  { path: '/', component: ListUsers, exact: true },
  { path: '/usuarios', component: ListUsers, exact: true },
  { path: '/usuario/adicionar', component: AddUser },
  { path: '/usuario/editar/:id', component: EditUser },

  { path: '/alunos', component: ListStudents, exact: true },
  { path: '/aluno/adicionar', component: AddStudent },
  { path: '/aluno/editar/:id', component: EditStudent },
  { path: '/aluno/atender/:id', component: Attend },
  { path: '/encaminhamento/:id', component: Referral },
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
