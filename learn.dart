void printList<T>(List<T> arr) {
  for (int i = 0; i < arr.length; i++) {
    T elm = arr[i];
    print("$elm");
  }
}

void main() {
  List<String> names = ["a", "b"];
  List<int> numbers = [1, 2];

  printList(numbers);
}
