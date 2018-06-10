/*eslint no-undef: "error"*/
const HashTableIterator = {
  [Symbol.iterator]: table => {
    let currentBucket = 0;
    let listItr = 0;

    function nextIterator() {
      listItr = 0;
      for (; currentBucket < table.size; currentBucket++) {
        // Pass the empty bucket
        if (table.buckets[currentBucket].empty()) continue;
        // Generate new iterator for the current position
        listItr = table.buckets[currentBucket].begin();

        return true;
      }
      return {
        done: true
      };
    }
    return {
      next: () => {
        // If we are in a bucket then we'll iterate through list iterator
        // But ,if that list has ended, then we should get the next iterator
        if (listItr && listItr.current().next !== null && listItr.next()) {
          return {
            value: listItr.current(),
            done: false
          };
        }
        currentBucket++;
        return nextIterator();
      },
      current: () => {
        if (listItr === 0)
          return {
            done: true
          };
        return {
          value: listItr.current(),
          done: false
        };
      },
      reset: () => {
        currentBucket = 0;
        nextIterator();
      },
      init: () => {
        nextIterator();
      }
    };
  }
};

export default HashTableIterator;
