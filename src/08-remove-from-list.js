/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let head = l;
  while (head && head.value === k) {
    head = head.next;
  }
  let current = head;
  if (current !== null) {
    while (current.next) {
      if (current.next.value === k) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }
  // let current = l;
  // let next = [current.next];
  // let prev = l;
  // while (current) {
  //   if (current.value === k) {
  //     if (prev) {
  //       prev.next = next;
  //       current = next;
  //       next = current.next;
  //     } else if (!prev) {
  //       current = next;
  //       next = current.next;
  //     } else if (!next) {
  //       current = null;
  //     }
  //   } else {
  //     prev = current;
  //     current = next;
  //     if (current) {
  //       next = current.next;
  //     }
  //   }
  // }
  // return l;
  return head;
}

module.exports = removeKFromList;
