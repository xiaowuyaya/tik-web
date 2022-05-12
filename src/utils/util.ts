// 获取图片url地址
export const getImageUrl = (imgPath: string) => {
  return new URL(`../assets/${imgPath}`, import.meta.url).href
}
