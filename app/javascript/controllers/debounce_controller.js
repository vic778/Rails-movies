import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("debounce_controller.js: connect()")
  }

  static targets = ["form"]

  search() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.formTarget.submit()
    }, 500)
  }
}
