import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Modulos',
    title: true
  },
  {
    name: 'Tablas',
    url: '/dashboard/setup',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Cliente',
        url: '/dashboard/setup/client'
      },
      {
        name: 'Categoria',
        url: '/dashboard/setup/categori'
      },
      {
        name: 'Producto',
        url: '/dashboard/setup/product'
      },
      {
        name: 'Pedido',
        url: '/dashboard/setup/pedid'
      },
      {
        name: 'Pago',
        url: '/dashboard/setup/pag'
      }
    ]
  },

];
