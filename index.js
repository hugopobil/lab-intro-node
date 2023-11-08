class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function (a, b) {
      return a - b
    })
    this.length = this.items.length
  }

  get(pos) {
    if (pos < this.length){
      return this.items[pos]
    } else {
      throw new Error("OutOFBounds")
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedlist")
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedlist")
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    if (this.length === 0) {
      return 0
    } else {
      let total_sum = 0
      for (let item of this.items) {
        total_sum += item
      }
      return total_sum
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      let total_sum = 0
      for (let item of this.items) {
        total_sum += item
      }
      return total_sum / this.length
    }
  }
}

module.exports = SortedList;
