export function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const sc = document.createElement('script')
    function onLoad() {
      resolve(src)
      sc.onload = sc.onerror = null
    }
    sc.src = src
    sc.crossOrigin = 'anonymous'
    sc.onload = onLoad
    sc.onerror = reject
    document.head.append(sc)
  })
}