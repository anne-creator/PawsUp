// ref: https://umijs.org/config/
// NOTE: umirc.js是监听npx umi g page class/index时候才会发生的改变。手动添加的文件不会被监听并且自动修改
export default {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       {
  //         path: '/demo',
  //         component: './demo',
  //       },
  //       {
  //         path: '/class/index',
  //         component: './class/index',
  //       },
  //       {
  //         path: '/',
  //         component: '../pages/index',
  //       },
  //     ],
  //   },
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'PawsUp',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
