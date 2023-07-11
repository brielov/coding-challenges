import { describe, expect, it } from "vitest";
import { LinkedList } from "./linked-list";

describe("LinkedList", () => {
  describe("#empty", () => {
    it("returns an empty linked list", () => {
      expect(LinkedList.empty()).toBeInstanceOf(LinkedList);
      expect(LinkedList.empty().size).toBe(0);
    });
  });

  describe("#from", () => {
    it("returns a linked list from an iterable", () => {
      const list = LinkedList.from([1, 2, 3]);
      expect(list.size).toBe(3);
    });

    it("returns a linked list from an array-like object", () => {
      const list = LinkedList.from({ length: 3, 0: 1, 1: 2, 2: 3 });
      expect(list.size).toBe(3);
    });
  });

  describe("Symbol.iterator", () => {
    it("allows you to iterate a linked list using `for ... of` syntax", () => {
      const list = LinkedList.from([1, 2, 3]);
      const values = [];

      for (const value of list) {
        values.push(value);
      }

      expect(values).toEqual([1, 2, 3]);
    });
  });

  describe(".append", () => {
    it("adds an element to the end of a linked list", () => {
      const list = LinkedList.empty<number>().append(1).append(2).append(3);
      expect(list.size).toBe(3);
      expect([...list]).toEqual([1, 2, 3]);
    });
  });

  describe(".prepend", () => {
    it("adds an element to the beginning of a linked list", () => {
      const list = LinkedList.empty<number>().prepend(1).prepend(2).prepend(3);
      expect(list.size).toBe(3);
      expect([...list]).toEqual([3, 2, 1]);
    });
  });

  describe(".first", () => {
    it("returns the first element of a linked list", () => {
      const list = LinkedList.from([1, 2, 3]);
      expect(list.first()).toBe(1);
    });

    it("returns undefined if the linked list is empty", () => {
      const list = LinkedList.empty<number>();
      expect(list.first()).toBeUndefined();
    });
  });

  describe(".last", () => {
    it("returns the last element of a linked list", () => {
      const list = LinkedList.from([1, 2, 3]);
      expect(list.last()).toBe(3);
    });

    it("returns undefined if the linked list is empty", () => {
      const list = LinkedList.empty<number>();
      expect(list.last()).toBeUndefined();
    });
  });

  describe(".removeAt", () => {
    it("removes an element at the given index", () => {
      const list = LinkedList.from([1, 2, 3]).removeAt(1);
      expect(list.size).toBe(2);
      expect([...list]).toEqual([1, 3]);
    });

    it("returns the same linked list if the index is out of bounds", () => {
      const list = LinkedList.from([1, 2, 3]).removeAt(3);
      expect(list.size).toBe(3);
      expect([...list]).toEqual([1, 2, 3]);
    });
  });
});
