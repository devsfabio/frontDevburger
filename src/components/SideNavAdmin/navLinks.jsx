import { Receipt, ListPlus, List } from '@phosphor-icons/react';

export const navLink = [
  {
    id: 1,
    label: 'Pedidos',
    path: '/admin/pedidos',
    icon: <Receipt />,
  },
  {
    id: 2,
    label: 'Produtos',
    path: '/admin/produtos',
    icon: <List />,
  },
  {
    id: 3,
    label: 'Adicionar Produto',
    path: '/admin/novo-produto',
    icon: <ListPlus />,
  },
];
