import { describe, expect, it } from 'vitest'
import { PageElement } from '../src'
const element = PageElement.create()

describe('page.element', () => {
  it('PageElement name', () => {
    expect(element.name).toBe('New Element')

  })
  it('PageElement mId', () => {
    expect(element.getJson()).toMatchInlineSnapshot(`
      {
        "id": "59abd592-1659-4abe-8ab5-7cd8b3e636ae",
        "mId": 0,
        "mVersion": "",
        "name": "New Element",
      }
    `)
  })

})