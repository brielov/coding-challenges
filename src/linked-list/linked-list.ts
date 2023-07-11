import { notImplemented } from "../util";

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
    notImplemented();
  }

  /**
   * A static method that returns a linked list from an iterable or array-like object.
   * @example
   * ```ts
   * const list = LinkedList.from([1, 2, 3]); // LinkedList<number>
   * ```
   */
  static from<T>(iterable: Iterable<T> | ArrayLike<T>): LinkedList<T> {
    notImplemented();
  }

  get size(): number {
    return this.#size;
  }

  /**
   * Allows you to iterate a linked list using `for ... of` syntax.
   */
  *[Symbol.iterator](): Iterator<T> {
    notImplemented();
  }

  /**
   * Add an element to the end of a linked list.
   */
  append(value: T): LinkedList<T> {
    notImplemented();
  }

  /**
   * Add an element to the beginning of a linked list.
   */
  prepend(value: T): LinkedList<T> {
    notImplemented();
  }

  /**
   * Returns the first element of a linked list, or `undefined` if the linked list is empty.
   */
  first(): T | undefined {
    notImplemented();
  }

  /**
   * Returns the last element of a linked list, or `undefined` if the linked list is empty.
   */
  last(): T | undefined {
    notImplemented();
  }

  /**
   * Removes an element at a given index from a linked list.
   */
  removeAt(index: number): LinkedList<T> {
    notImplemented();
  }
}
