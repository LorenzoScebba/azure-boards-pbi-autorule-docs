---
sidebar_position: 2
---

# Cloud Environment

On Azure Web App, use the following variables

```json
[
  {
    "name": "Azure__Pat",
    "value": "****************************************************",
    "slotSetting": false
  },
  {
    "name": "Azure__Uri",
    "value": "https://dev.azure.com/*****",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Type",
    "value": "Task",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__0__IfState",
    "value": "To Do",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__0__NotParentStates__0",
    "value": "Done",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__0__NotParentStates__1",
    "value": "Removed",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__0__SetParentStateTo",
    "value": "New",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__0__All",
    "value": "true",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__1__IfState",
    "value": "In Progress",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__1__NotParentStates__0",
    "value": "Done",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__1__NotParentStates__1",
    "value": "Removed",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__1__SetParentStateTo",
    "value": "Committed",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__1__All",
    "value": "false",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__2__IfState",
    "value": "Done",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__2__NotParentStates__0",
    "value": "Removed",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__2__SetParentStateTo",
    "value": "Done",
    "slotSetting": false
  },
  {
    "name": "StateRules__0__Rules__2__All",
    "value": "true",
    "slotSetting": false
  }
]
```

#### Reference variables as JSON

```json
{
  "Azure__Pat": "****************************************************",
  "Azure__Uri": "https://dev.azure.com/*****",
  "Rules__0__Type": "Task",
  "StateRules__0__Rules__0__IfState": "To Do",
  "StateRules__0__Rules__0__NotParentStates__0": "Done",
  "StateRules__0__Rules__0__NotParentStates__1": "Removed",
  "StateRules__0__Rules__0__SetParentStateTo": "New",
  "StateRules__0__Rules__0__All": true,
  "StateRules__0__Rules__1__IfState": "In Progress",
  "StateRules__0__Rules__1__NotParentStates__0": "Done",
  "StateRules__0__Rules__1__NotParentStates__1": "Removed",
  "StateRules__0__Rules__1__SetParentStateTo": "Committed",
  "StateRules__0__Rules__1__All": false,
  "StateRules__0__Rules__2__IfState": "Done",
  "StateRules__0__Rules__2__NotParentStates__0": "Removed",
  "StateRules__0__Rules__2__SetParentStateTo": "Done",
  "StateRules__0__Rules__2__All": true
}
```