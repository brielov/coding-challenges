type Node<T> = {
  readonly value: T;
  next?: Node<T>;
};

function createNode<T>(value: T): Node<T> {
  return { value };
}

export class LinkedList<T> implements Iterable<T> {
  // An internal property that keeps track of the size of the linked list.
  // This variable should be incremented / decremented when elements are added / removed.
  #size = 0;

  private constructor(private head?: Node<T>) {}

  /**
   * A static method that returns an empty linked list.
   * @example
   * ```ts
   * const list = LinkedList.empty<number>(); // LinkedList<number>
   * ```
   */
  static empty<T>(): LinkedList<T> {
    return new LinkedList<T>();
  }

  /**
   * A static method that returns a linked list from an iterable or array-like object.
   * @example
   * ```ts
   * const list = LinkedList.from([1, 2, 3]); // LinkedList<number>
   * ```
   */
  static from<T>(iterable: Iterable<T> | ArrayLike<T>): LinkedList<T> {
    const list = LinkedList.empty<T>();
    for (const item of Array.from(iterable).reverse()) {
      list.prepend(item);
    }
    return list;
  }

  get size(): number {
    return this.#size;
  }

  /**
   * Allows you to iterate a linked list using `for ... of` syntax.
   */
  *[Symbol.iterator](): Iterator<T> {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  /**
   * Add an element to the end of a linked list.
   */
  append(value: T): LinkedList<T> {
    const node = createNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = current;
      current.next = node;
    }
    this.#size++;
    return this;
  }

  /**
   * Add an element to the beginning of a linked list.
   */
  prepend(value: T): LinkedList<T> {
    const node = createNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.#size++;
    return this;
  }

  /**
   * Returns the first element of a linked list, or `undefined` if the linked list is empty.
   */
  first(): T | undefined {
    return this.head?.value;
  }

  /**
   * Returns the last element of a linked list, or `undefined` if the linked list is empty.
   */
  last(): T | undefined {
    let current = this.head;
    while (current?.next) {
      current = current.next;
    }
    return current?.value;
  }

  /**
   * Removes an element at a given index from a linked list.
   */
  removeAt(index: number): LinkedList<T> {
    if (index < 0 || index >= this.size) return this;
    if (index === 0) {
      this.head = this.head?.next;
    } else {
      let previous: Node<T> | undefined;
      let current = this.head;
      let currentIndex = 0;
      while (currentIndex < index) {
        previous = current;
        current = current?.next;
        currentIndex++;
      }
      previous!.next = current?.next;
    }
    this.#size--;
    return this;
  }
}
