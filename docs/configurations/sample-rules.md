# Example Rules

---

Manage a Product Backlog Item given a Task state change *(with explanation!)*

<details>
    <summary>Expand</summary>

```json
{ 
  "Type": "Task",                     // Rules applied when a "Task" state changes
  "Rules": [
    {
      "IfChildState": "To Do",        // If the "Task" goes to "To Do"
      "NotParentStates": [            // And the parent is not in "Done" or "Removed"
        "Done",
        "Removed"
      ],
      "SetParentStateTo": "New",      // Set the parent state to "New"
      "AllChildren": true             // Only apply this rule if all "Tasks" are in the "To Do" state
    },
    {
      "IfChildState": "In Progress",  // If the "Task" goes to "In Progress"
      "NotParentStates": [            // And the parent is not in "Done" or "Removed"
        "Done",
        "Removed"
      ],
      "SetParentStateTo": "Committed", // Set the parent state to "Committed"
      "AllChildren": false             // Apply this rule even if not all "Tasks" are in the "In Progress" state
    },
    {
      "IfChildState": "Done",          // If the "Task" goes to "Done"
      "NotParentStates": [             // And the parent is not in or "Removed"
        "Removed"
      ],
      "SetParentStateTo": "Done",      // Set the parent state to "Done"
      "AllChildren": true              // Only apply this rule if all "Tasks" are in the "Done" state
    }
  ]
}
```

</details>

Manage a Feature state given its Product Backlog Items

<details>
    <summary>Expand</summary>

```json
{
  "Type": "Product Backlog Item",
  "Rules": [
    {
      "IfChildState": "New",
      "NotParentStates": [
        "Done",
        "Removed"
      ],
      "SetParentStateTo": "New",
      "AllChildren": true
    },
    {
      "IfChildState": "Committed",
      "NotParentStates": [
        "Done",
        "Removed"
      ],
      "SetParentStateTo": "In Progress",
      "AllChildren": false
    },
    {
      "IfChildState": "Done",
      "NotParentStates": [
        "Removed"
      ],
      "SetParentStateTo": "Done",
      "AllChildren": true
    }
  ]
}
```

</details>