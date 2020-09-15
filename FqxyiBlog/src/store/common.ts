import {observable} from 'mobx'

const commonStore = observable({
  loading: false,
  time: 0,
  showLoading(time: number) {
    this.time = time
    this.loading = true
  },
  hideLoading(time: number) {
    if (time && time === this.time) {
      this.loading = false
    }
  }
})

export default commonStore
