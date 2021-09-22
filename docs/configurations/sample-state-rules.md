# Example State Rules

---

**N.B: Each rule should contain only the following structure:**

```json
{
  "IfState": "...",
  "NotParentStates": [
    "..."
  ],
  "SetParentStateTo": "...",
  "All": boolean
}
```

**or**

```json
{
  "IfState": "...",
  "SetChildrenStateTo": "..."
}
```

---

**Manage a Product Backlog Item given a Task state change *(with explanation!)***

<details>
    <summary>Expand</summary>

```json
{
  "Type": "Task",
  // Rules applied when a "Task" state changes
  "Rules": [
    {
      "IfState": "To Do",
      // If the "Task" goes to "To Do"
      "NotParentStates": [
        // And the parent is not in "Done" or "Removed"
        "Done",
        "Removed"
      ],
      "SetParentStateTo": "New",
      // Set the parent state to "New"
      "All": true
      // Only apply this rule if all "Tasks" are in the "To Do" state
    },
    {
      "IfState": "In Progress",
      // If the "Task" goes to "In Progress"
      "NotParentStates": [
        // And the parent is not in "Done" or "Removed"
        "Done",
        "Removed"
      ],
      "SetParentStateTo": "Committed",
      // Set the parent state to "Committed"
      "All": false
      // Apply this rule even if not all "Tasks" are in the "In Progress" state
    },
    {
      "IfState": "Done",
      // If the "Task" goes to "Done"
      "NotParentStates": [
        // And the parent is not in or "Removed"
        "Removed"
      ],
      "SetParentStateTo": "Done",
      // Set the parent state to "Done"
      "All": true
      // Only apply this rule if all "Tasks" are in the "Done" state
    }
  ]
}
```

</details>

**Manage a Feature state given its Product Backlog Items**

<details>
    <summary>Expand</summary>

```json
{
  "Type": "Product Backlog Item",
  "Rules": [
    {
      "IfState": "New",
      "NotParentStates": [
        "Done",
        "Removed"
      ],
      "SetParentStateTo": "New",
      "All": true
    },
    {
      "IfState": "Committed",
      "NotParentStates": [
        "Done",
        "Removed"
      ],
      "SetParentStateTo": "In Progress",
      "All": false
    },
    {
      "IfState": "Done",
      "NotParentStates": [
        "Removed"
      ],
      "SetParentStateTo": "Done",
      "All": true
    }
  ]
}
```

</details>

**Manage the tasks of a PBI given its state**

<details>
    <summary>Expand</summary>

```json
{
  "Type": "Product Backlog Item",
  // When a PBI changes
  "Rules": [
    {
      "IfState": "Done",
      // If the PBI state is "Done"
      "SetChildrenStateTo": "Done"
      // Set all childrens (Tasks) to "Done" 
    }
  ]
}
```

</details>