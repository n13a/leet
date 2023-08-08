class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    const mergedListHead = new ListNode(0);
    let currentNode = mergedListHead;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            currentNode.next = list1;
            currentNode = currentNode.next;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            currentNode = currentNode.next;
            list2 = list2.next;
        }
    }
    if (list1 == null) {
        currentNode.next = list2;
    } else {
        currentNode.next = list1;
    }
    return mergedListHead.next;
}
