class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
    }


    add(item) {
      this.items.push(item);
      this.items.sort(function(a, b) {
        return a-b;
      });
      this.length++;
    }

    get(pos) {
      if(pos > this.length) throw new Error('OutOfBounds');
      // this.length--;
      return this.items[pos];
    }

    max() {
      if(this.length === 0) throw new Error('EmptySortedList');
      else return Math.max.apply(null, this.items);
    }

    min() {
      if(this.length === 0) throw new Error('EmptySortedList');
      else return Math.min.apply(null, this.items);
    }

    average() {
      if(this.length === 0) throw new Error('EmptySortedList');

      let sum = 0;
      for(let i = 0; i < this.length; i++) {
        sum += this.items[i];
      }
      return sum / this.length;
      
    }

    sum() {
      if(this.length === 0) return this.length;

      let sum = 0;
      for(let i = 0; i < this.length; i++) {
        sum += this.items[i];
      }
      return sum;
    }
  };
  
  const newList = new SortedList({
    
  });

  module.exports = SortedList;


