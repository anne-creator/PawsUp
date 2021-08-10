// NOTE:采用键值配对的模式，key就是api地址
// NOTE：关于http相关请求，都会放在sercive下面
export default {
  //支持请求类型'Get /api/getLists'value值支持Json和 函数类型
  'GET /api/getLists': {
    lists: ['a', 'b', 'c'],
  }, //JSON类型
  // FIXME:req.query.value是啥
  'GET /api/getListsAsync': (req, res) => {
    setTimeout(() => {
      res.json({ lists: Array(10).fill(req.query.value) });
    }, 1000);
  },
};
