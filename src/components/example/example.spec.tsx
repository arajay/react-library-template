import { cleanup, render, RenderResult, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ExampleComponent } from './example.component'

describe('The ExampleComponent', () => {

  let comp: RenderResult
  let el: HTMLButtonElement
  const mockFunction = jest.fn()

  const mockProps = {
    text: 'Lorem'
  }

  const mockPropsAlt = {
    text: 'Ipsum'
  }

  beforeEach(() => {
    comp = render(<ExampleComponent text={mockProps.text} onClick={mockFunction} />)
    el = screen.getByRole('button') as HTMLButtonElement
  })

  // sometimes needed to prevent memory leak
  afterEach(cleanup)

  it('should be', () => {
    // log testing playground for debugging
    screen.logTestingPlaygroundURL()

    expect(el).toBeTruthy()
  })

  describe('text prop', () => {
    it('should display the provided string in the component', () => {
      expect(el).toHaveTextContent(mockProps.text)
    })
  })

  describe('event testing', () => {
    it('should trigger the mock function', () => {
      el.click()
      expect(mockFunction).toHaveBeenCalled()
    })
  })

  describe('alternate version of component', () => {
    it('should be different', () => {
      comp.rerender(<ExampleComponent text={mockPropsAlt.text} onClick={mockFunction} />)
      el = screen.getByRole('button') as HTMLButtonElement
      expect(el).toHaveTextContent(mockPropsAlt.text)
      expect(el).not.toHaveTextContent(mockProps.text)
    })
  })
})