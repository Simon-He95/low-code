import { IMaterial } from 'simon-shared'
import { createApp } from 'vue'
import App from './App.vue'
// import { Project } from 'simon-shared'
import { loadScript } from './utils'

const materialList: IMaterial[] = [
  {
    id: 1,
    type: 'component',
    version: "0.01",
    source: "/lc-image.umd.js",
    name: "LcImage",
    title: "图片",
    thumbnail: "https://img.alicdn.com/tfs/TB1.X.X.X.png",
    category: {
      name: "基础组件"
    },
    data: [
      {
        version: "0.01",
        source: '/lc-image.umd.js'
      }
    ]
  }
]

Promise.all(materialList.map(material => loadScript(material.source))).then(() => {
  const app = createApp(App)
  materialList.forEach(material => {
    const { render, editorProps } = (window as any)[material.name]
    app.component(material.name, render)
  })
  app.mount('#app')
})
