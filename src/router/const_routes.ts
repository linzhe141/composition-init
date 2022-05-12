export default [
  {
    name: 'list',
    label: '列表页',
    index: 'list',
    children: [
      {
        name: 'baseList',
        label: '基础列表页',
        index: 'baseList',
        children: [
          {
            name: 'baseTable',
            label: '基础表格页',
            index: 'baseTable',
            children: [],
          },
          {
            name: 'baseTable01',
            label: '基础表格页01',
            index: 'baseTable01',
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'demo',
    label: 'demo',
    index: 'demo',
    children: [
      {
        name: 'demo1',
        label: 'demo1',
        index: 'demo1',
        children: [],
      },
      {
        name: 'demo2',
        label: 'demo2',
        index: 'demo2',
        children: [],
      },
    ],
  },
  {
    name: 'test',
    label: 'test',
    index: 'test',
    children: [],
  }
]