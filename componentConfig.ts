import Button from './materials/Button'
import Container from './materials/Container'
import Page from './materials/Page'

const componentConfig: Record<string, any> = {
  Container: {
    name: 'Container',
    defaultProps: {},
    component: Container,
  },
  Button: {
    name: 'Button',
    defaultProps: {
      type: 'primary',
      text: '按钮',
    },
    component: Button,
  },
  Page: {
    name: 'Page',
    defaultProps: {},
    component: Page,
  },
}

export default componentConfig
