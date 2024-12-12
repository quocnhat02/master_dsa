function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0); // Danh sách kết quả bắt đầu từ node giả
  let current = dummyHead; // Con trỏ để duyệt danh sách mới
  let carry = 0; // Biến lưu số dư khi tổng >= 10

  while (l1 !== null || l2 !== null || carry > 0) {
    const val1 = l1 ? l1.val : 0; // Giá trị từ l1 (hoặc 0 nếu l1 null)
    const val2 = l2 ? l2.val : 0; // Giá trị từ l2 (hoặc 0 nếu l2 null)

    const sum = val1 + val2 + carry; // Tổng của hai giá trị và carry
    carry = Math.floor(sum / 10); // Tính carry mới
    const digit = sum % 10; // Chữ số cần lưu trong node mới

    current.next = new ListNode(digit); // Tạo node mới cho danh sách kết quả
    current = current.next; // Di chuyển con trỏ

    // Di chuyển l1 và l2 sang node tiếp theo (nếu có)
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummyHead.next; // Bỏ qua node giả và trả về kết quả
}

// Số 342 (2 -> 4 -> 3)
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// Số 465 (5 -> 6 -> 4)
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const result = addTwoNumbers(l1, l2);
// Kết quả: 807 (7 -> 0 -> 8)

console.log(result);
