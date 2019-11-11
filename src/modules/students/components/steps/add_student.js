module.exports.add_student = {
  title: 'Novo aluno',
  steps: [
    {
      name: 'Aluno',
      type: 'common',
      questions: [
        {
          type: 'describe',
          title: 'Nome',
          name: 'name',
          value: '',
        },
        {
          type: 'date',
          title: 'Data de Nascimento',
          name: 'date_birth',
          value: '',
        },
        {
          type: 'unique',
          title: 'Genêro',
          name: 'gender',
          options: [
            { label: 'Masculino', value: 'male' },
            { label: 'Faminino', value: 'female'}
          ],
          value: '',
        },
      ]
    },
    {
      name: 'Escola',
      type: 'common',
      questions: [
        {
          type: 'describe',
          title: 'Nome da Escola',
          name: 'school',
          value: '',
        },
        {
          type: 'describe',
          title: 'Professora',
          name: 'teacher',
          value: '',
        },
        {
          type: 'describe',
          title: 'Série',
          name: 'grade',
          value: '',
        },
      ]
    },
    {
      name: 'Responsáveis',
      type: 'common',
      questions: [
        {
          type: 'describe',
          title: 'Nome da Mãe',
          name: 'name_mother',
          value: '',
        },
        {
          type: 'describe',
          title: 'Telefone da Mãe',
          name: 'phone_mother',
          value: '',
        },
        {
          type: 'describe',
          title: 'Nome do Pai',
          name: 'name_father',
          value: '',
        },
        {
          type: 'describe',
          title: 'Telefone  do Pai',
          name: 'phone_father',
          value: '',
        },
      ]
    },
    {
      name: 'Endereço',
      type: 'common',
      questions: [
        {
          type: 'describe',
          title: 'CEP',
          name: 'zip_code',
          value: '',
        },
        {
          type: 'describe',
          title: 'Estado',
          name: 'state',
          value: '',
        },
        {
          type: 'describe',
          title: 'Cidade',
          name: 'city',
          value: '',
        },
        {
          type: 'describe',
          title: 'Bairro',
          name: 'neighborhood',
          value: '',
        },
        {
          type: 'describe',
          title: 'Rua',
          name: 'street',
          value: '',
        },
      ]
    }
  ]
}

