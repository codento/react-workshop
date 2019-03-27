// npm install --save-dev react-testing-library jest-dom
// CI=true npm test -- --colors --noStackTrace

import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup, wait, fireEvent } from 'react-testing-library'

afterEach(cleanup)

const mockData = [
  {
  "id": 8534,
  "url": "https://rekkurescue.com/koirat/martta/",
  "title": "Martta",
  "imageUrl": "https://rekkurescue.com/wp-content/uploads/2019/03/marttapää-1.jpg"
  },
  {
    "id": 0,
    "url": "mock",
    "title": "mock",
    "imageUrl": "mock"
  }
]

const mockUseState = jest.fn()
const mockSetState = jest.fn()
let usesArrayAsState = false
let latestEffectVals = null
beforeAll(() => {
  // Mock React hooks
  jest.mock('react', () => {
    const r = jest.requireActual('react')
    return {
      ...r,
      useState: initial => {
        const [ a, b ] = r.useState(initial)
        if (Array.isArray(initial)) {
          usesArrayAsState = true
        }
        mockUseState(a)
        const bWrapper = (param) => {
          mockSetState(param)
          b(param)
        }
        return [ a, bWrapper ]
      },
      useEffect: (fn, vals) => {
        latestEffectVals = vals
        return r.useEffect(fn, vals)
      }
   }
  })
  
  // Hide possible console logs from output to look prettier to user
  global.console.log = () => null
  global.console.error = () => null

  // Mock fetch api
  global.fetch = () => Promise.resolve({ json: () => Promise.resolve(mockData) })
})

beforeEach(() => {
  mockSetState.mockClear()
  mockUseState.mockClear()
  usesArrayAsState = false
  latestEffectVals = null
})

describe('Harjoitus 1', () => {
  it('renders app component', async () => {
    const { default: App } = await import('./App')
    const appComponent = render(
      <App />
    )
    expect(appComponent.container.firstChild).not.toBe(null)
  })
})

describe('Harjoitus 2', () => {
  it('renders app component as a functional component', async () => {
    const { default: App } = await import('./App')
    expect(App.prototype).toBe(undefined)
  })
})

describe('Harjoitus 3', () => {
  it('has Header and Footer components', async () => {
    const Header = await import('./Header')
    const Footer = await import('./Footer')
    expect(Header).not.toBe(null)
    expect(Footer).not.toBe(null)
  })

  it('renders Header', async () => {
    const { default: Header } = await import('./Header')
    const headerComponent = render(
      <Header />
    )
    expect(headerComponent.container.querySelectorAll('header').length).toBe(1)
    expect(headerComponent.container.querySelectorAll('h1').length).toBe(1)
  })

  it('renders Footer', async () => {
    const { default: Footer } = await import('./Footer')
    const headerComponent = render(
      <Footer />
    )
    expect(headerComponent.container.querySelectorAll('footer').length).toBe(1)
  })

  it('renders Header and Footer in right order', async () => {
    const { default: App } = await import('./App')
    const appComponent = render(
      <App />
    )
    const header = appComponent.container.querySelector('header')
    const footer = appComponent.container.querySelector('footer')
    const appChildren = appComponent.container.firstChild.childNodes
    expect(appChildren[0]).toEqual(header)
    expect(appChildren[appChildren.length - 1]).toEqual(footer)
  })
})

describe('Harjoitus 4', () => {
  it('has Button component', async () => {
    const { default: Button } = await import('./Button')
    expect(Button).not.toBe(null)
  })

  it('renders Button', async () => {
    const { default: Button } = await import('./Button')
    const buttonComponent = render(
      <Button />
    )
    expect(buttonComponent.container.querySelector('div')).not.toBe(null)
  })

  it('has prop icon', async () => {
    const { default: Button } = await import('./Button')
    const buttonComponent = render(
      <Button icon='test' />
    )
    expect(buttonComponent.container.querySelector('div').className).toContain('test')
  })

  it('shows 2 buttons in footer', async () => {
    const { default: App } = await import('./App')
    const appComponent = render(
      <App />
    )
    const footerComponent = appComponent.container.querySelector('footer')
    const buttons = footerComponent.querySelectorAll('div')
    expect(buttons.length).toBe(2)
    expect(footerComponent.querySelector('.heart')).not.toBe(null)
    expect(footerComponent.querySelector('.heart-broken')).not.toBe(null)
  })
})

describe('Harjoitus 5', () => {
  it('uses container className in app component', async () => {
    const { default: App } = await import('./App')
    const app = render(
      <App />
    ).container.firstChild
    expect(app.className).toBe('container')
  })

  it('uses content className in app component', async () => {
    const { default: App } = await import('./App')
    const appComponent = render(
      <App />
    )
    expect(appComponent.container.querySelector('.content')).not.toBe(null)
  })

  it('uses header className in header component', async () => {
    const { default: Header } = await import('./Header')
    const header = render(
      <Header />
    ).container.firstChild
    expect(header.className).toBe('header')
  })

  it('uses footer className in footer component', async () => {
    const { default: Footer } = await import('./Footer')
    const footer = render(
      <Footer />
    ).container.firstChild
    expect(footer.className).toBe('footer')
  })

  it('uses button className in button component and renders an icon', async () => {
    const { default: Button } = await import('./Button')
    const buttonComponent = render(
      <Button icon='heart' />
    )
    const buttonClasses = buttonComponent.container.childNodes[0].className
    expect(buttonClasses).toContain('heart')
    expect(buttonClasses).toContain('button')

    const icon = buttonComponent.container.querySelector('i')
    expect(icon).not.toBe(null)
    expect(icon.className).toContain('fa-heart')
    expect(icon.className).toContain('fas')
  })
})

describe('Harjoitus 6', () => {
  it('has empty array as app component\'s state', async () => {
    const { default: App } = await import('./App')
    const component = render(
      <App />
    )
    component.rerender(<App />)

    await wait(() => null, { timeout: 10 })

    expect(usesArrayAsState).toBe(true)
  })
})

describe('Harjoitus 7', () => {
  it('has useEffect that\'s only called once', async () => {
    const { default: App } = await import('./App')
    render(
      <App />
    )
    expect(latestEffectVals).toEqual([])
  })
})

describe('Harjoitus 8', () => {
  it('fetches data and calls setState', async () => {
    const { default: App } = await import('./App')
    render(
      <App />
    )
    // Required because fetchPets is async
    await wait(() => null, { timeout: 10 })
    expect(mockSetState.mock.calls.length).toBe(1)
    expect(mockSetState.mock.calls[0][0]).toEqual(mockData)
  })
})

describe('Harjoitus 9', () => {
  const titleVal = 'titleTest'
  const imageUrlVal = 'imageUrlTest'

  it('has Content component', async () => {
    const { default: Content } = await import('./Content')
    expect(Content).not.toBe(null)
  })

  it('renders Content component', async () => {
    const { default: Content } = await import('./Content')
    const contentComponent = render(
      <Content title={titleVal} imageUrl={imageUrlVal} />
    )
    const img = contentComponent.container.querySelector('img')
    const h2 = contentComponent.container.querySelector('h2')
    expect(img.getAttribute('src')).toBe(imageUrlVal)
    expect(h2.textContent).toBe(titleVal)
  })

  it('uses correct styles', async () => {
    const { default: Content } = await import('./Content')
    const contentComponent = render(
      <Content title={titleVal} imageUrl={imageUrlVal} />
    )
    expect(contentComponent.container.firstChild.className).toBe('content')
    expect(contentComponent.container.firstChild.firstChild.className).toBe('card-container')
    expect(contentComponent.container.querySelector('img').className).toBe('card-image')
    expect(contentComponent.container.querySelector('h2').className).toBe('card-title')
  })

  it('shows Content component between header and footer and renders an image of first doggo', async () => {
    const { default: App } = await import('./App')
    const { default: Content } = await import('./Content')
    const appComponent = render(
      <App />
    )
    const contentComponent = render(
      <Content title={mockData[0].title} imageUrl={mockData[0].imageUrl} />
    )
    // Required because fetchPets is async
    await wait(() => null, { timeout: 10 })
    expect(appComponent.container.firstChild.childNodes.length).toBe(3)
    expect(appComponent.container.firstChild.childNodes[1]).toEqual(contentComponent.container.firstChild)
    expect(appComponent.container.querySelector('.card-title').textContent).toBe('Martta')
    expect(appComponent.container.querySelector('.card-image').getAttribute('src')).toBe('https://rekkurescue.com/wp-content/uploads/2019/03/marttapää-1.jpg')
  })
})

describe('Harjoitus 10', () => {
  it('has function onClick prop and calls it when clicked', async () => {
    const { default: Button } = await import('./Button')
    const onClickMock = jest.fn()
    const buttonComponent = render(
      <Button icon='test' onClick={onClickMock} />
    )
    expect(onClickMock.mock.calls.length).toBe(0)
    fireEvent.click(buttonComponent.container.firstChild)
    expect(onClickMock.mock.calls.length).toBe(1)
  })

  it('changes the doggo to be shown when clicked in app component', async () => {
    const { default: App } = await import('./App')
    const appComponent = render(
      <App />
    )
    // Required because fetchPets is async
    await wait(() => null, { timeout: 10 })
    const button = appComponent.container.querySelector('.button')
    fireEvent.click(button)
    expect(appComponent.container.querySelector('.card-title').textContent).toBe('mock')
    expect(appComponent.container.querySelector('.card-image').getAttribute('src')).toBe('mock')
  })
})
