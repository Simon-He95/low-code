import App from './App.vue'


export default {
  render: App,
  editorProps: {
    src: {
      type: 'string',
      defaultValue: 'https://www.baidu.com/img/bd_logo1.png'
    }
  }
}