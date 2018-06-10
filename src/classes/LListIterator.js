// Iterator implementation
const LListIterator = {
    [Symbol.iterator]: (node, llist) => {
        let current = node;
        if (node === null) current = llist.header;
        return {
            next: () => {
                if (current === null || current.getNext() === null) {
                    return {
                        done: true
                    };
                }
                current = current.getNext();
                return {
                    value: current,
                    done: false
                };
            },
            current: () => {
                return current;
            },
            reset: () => {
                current = llist.header;
            }
        };
    }
};

export default LListIterator;