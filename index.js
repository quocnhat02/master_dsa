class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function removeNthNodeFromEnd(head, n) {
  let tempList = new ListNode(0);
  tempList.next = head;

  let slow = tempList;
  let fast = tempList;

  for (let idx = 0; idx < n; idx++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return tempList.next;
}

function printList(head) {
  let res = [];
  while (head) {
    res.push(head.value);
    head = head.next;
  }
  console.log(res.join(' -> '));
}

let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
printList(removeNthNodeFromEnd(head, 2));
