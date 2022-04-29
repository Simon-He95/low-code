import { uuid } from '../utils'

export interface IProject {
  name: string
  description: string
  pages: IPage[]
}

export interface IPage {
  name: string
  description: string
  elements: IElement[]
}

export interface IElement {
  id: string
  name: string
  mId: number
  mVersion: string
}

export class Project implements IProject {
  public static create(p?: IProject) {
    const project = new Project(p);
    const page = Page.create();
    project.addPage(page)
    return project
  }
  public name: string = 'New Project'
  public description: string = 'New Project Description'
  public pages: Page[] = []

  constructor(p?: IProject) {
    if (p) {
      this.name = p.name
      this.description = p.description
      this.pages = p.pages.map(page => Page.create(page))
    }
  }
  public addPage(page: Page) {
    this.pages.push(page)
  }
  public removePage(page: Page) {
    const index = this.pages.indexOf(page)
    if (index >= 0) {
      this.pages.splice(index, 1)
    }
  }
  public insertPage(index: number, page: Page) {
    this.pages.splice(index, 0, page)
  }
  public getJson() {
    return {
      name: this.name,
      description: this.description,
      pages: this.pages.map(page => page.getJson())
    }
  }
}

export class Page implements IPage {
  public static create(p?: IPage) {
    return new Page(p)
  }
  public name: string;
  public description: string;
  public elements: PageElement[] = []
  constructor(p?: IPage) {
    if (p) {
      this.name = p.name
      this.description = p.description
      this.elements = p.elements.map(element => PageElement.create(element))
    }
  }
  public addElement(element: PageElement) {
    this.elements.push(element)
  }
  public removeElement(element: PageElement) {
    const index = this.elements.indexOf(element)
    if (index >= 0) {
      this.elements.splice(index, 1)
    }
  }
  public insertElement(index: number, element: PageElement) {
    this.elements.splice(index, 0, element)
  }
  public getJson() {
    return {
      name: this.name,
      description: this.description,
      elements: this.elements.map(element => element.getJson())
    }
  }
}

export class PageElement implements IElement {
  public static create(e?: IElement) {
    const element = new PageElement(e)
    return element
  }
  public id: string = uuid()
  public name: string = 'New Element'
  public mId: number = 0
  public mVersion: string = ''
  constructor(e?: IElement) {
    if (e) {
      this.mId = e.mId
      this.mVersion = e.mVersion
      this.name = e.name
      this.id = e.id
    }
  }
  public getJson() {
    return {
      id: this.id,
      name: this.name,
      mId: this.mId,
      mVersion: this.mVersion
    }
  }
}