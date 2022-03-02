// module.exports={
//     configurewebpack:{
//         resolve:{
//             alias:{
//                
//             }
//         }
//     }
// }
module.exports = {
  configureWebpack: {
      resolve: {
          alias: {
              'assets': '@/assets',
              'components': '@/components',
              'network': '@/network',
              'views': '@/views'
          }
      }
  },
}