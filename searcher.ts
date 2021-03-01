interface BaseSearch {
  array: number[];
  num: number;
  search(array: number[], num: number): string;
}

class linealSearch implements BaseSearch {
  array: number[];
  num: number;
  constructor(array: number[], num: number) {
    this.array = array;
    this.num = num;
  }
  public search(array: number[], num: number): string {
    let i: number;
    for (i = 0; i < this.array.length; i++) {
      if (this.num === this.array[i]) {
        i += 1;
        return this.num + " fue hallado en la posicion " + i + " del arreglo";
      }
    }
    return "El numero no fue hallado";
  }
}

class binarySearch implements BaseSearch {
  array: number[];
  num: number;
  constructor(array: number[], num: number) {
    this.array = array;
    this.num = num;
  }
  public search(array: number[], num: number): string {
    this.array.sort(function (prev, next) {
      return prev - next;
    });
    let left: number = 0;
    let right: number = this.array.length;
    while (left <= right) {
      let mid: number = left + (right - left) / 2;
      if (this.array[mid] === this.num) {
        mid += 1;
        return "El numero " + this.num + " fue hallado en la posicion " + mid;
      }
      if (this.array[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return "el numero no fue hallado";
  }
}

class searcher implements BaseSearch {
  array: number[];
  num: number = 0;
  aux: number;
  constructor(array: number[], num: number) {
    this.array = array;
    this.num = num;
    this.aux = array.length;
  }
  public search(array: number[], num: number): string {
    if (this.aux > 3) {
      const bs: binarySearch = new binarySearch(this.array, this.num);
      return bs.search(this.array, this.num);
    } else {
      const ls: linealSearch = new linealSearch(this.array, this.num);
      return ls.search(this.array, this.num);
    }
  }
}
const s: searcher = new searcher([1, 2, 6, 4, 5, 3], 6);
console.log(s.search([1, 2, 6, 4, 5, 3], 6));
