import $ from 'weery'

import Size from './Size'
import Preloader from './Preloader'

export default class Main {
  constructor () {
    this._$size = $('._size')
    this._windowSize = new Size(window)

    this._preloader = new Preloader({ el: '.preloader' })
  }

  loaded () {
    this._$size.text(this._windowSize.size)
  }

  resized () {
    this._windowSize.update()
    this._$size.text(this._windowSize.size)
  }

  beforeLoaded () {
    this._preloader.init()
  }
}
