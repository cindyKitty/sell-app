/**
 * 解析url参数
 * @example ?id=1223&a=b
 * @return Object {id:1223, a: b}
 */
export function urlParse() {
  let url = window.location.search
  let obj = {}
  // 包含?或者&字符，这个字符后面跟着一个或多个非?或者&的字符，然后中间用等号连接，等号后面也跟着一个或多个非?或者&的字符，然后全局匹配
  let reg = /[?&][^?&]+=[^?&]+/g
  let arr = url.match(reg)
  // ['?id=1223', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=')
      let key = decodeURIComponent(tempArr[0])
      let val = tempArr[1]
      obj[key] = val
    })
  }
  return obj
}
