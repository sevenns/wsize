import $ from 'weery'

export default class Size {
  constructor(el) {
    this._el = $(el)
    this._w = this._el.outerWidth()
    this._h = this._el.outerHeight()

    this.update()
  }

  update () {
    this._w = this._el.outerWidth()
    this._h = this._el.outerHeight()
  }

  get w () {
    return this._w
  }

  get h () {
    return this._h
  }

  get size () {
    return `${this._w} x ${this._h}`
  }
}
