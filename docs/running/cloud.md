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
    "name": "Rules__0__Rules__0__IfState",
    "value": "To Do",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Rules__0__NotParentStates__0",
    "value": "Done",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Rules__0__NotParentStates__1",
    "value": "Removed",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Rules__0__SetParentStateTo",
    "value": "New",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Rules__0__All",
    "value": "true",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Rules__1__IfState",
    "value": "In Progress",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Rules__1__NotParentStates__0",
    "value": "Done",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Rules__1__NotParentStates__1",
    "value": "Removed",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Rules__1__SetParentStateTo",
    "value": "Committed",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Rules__1__All",
    "value": "false",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Rules__2__IfState",
    "value": "Done",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Rules__2__NotParentStates__0",
    "value": "Removed",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Rules__2__SetParentStateTo",
    "value": "Done",
    "slotSetting": false
  },
  {
    "name": "Rules__0__Rules__2__All",
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
  "Rules__0__Rules__0__IfState": "To Do",
  "Rules__0__Rules__0__NotParentStates__0": "Done",
  "Rules__0__Rules__0__NotParentStates__1": "Removed",
  "Rules__0__Rules__0__SetParentStateTo": "New",
  "Rules__0__Rules__0__All": true,
  "Rules__0__Rules__1__IfState": "In Progress",
  "Rules__0__Rules__1__NotParentStates__0": "Done",
  "Rules__0__Rules__1__NotParentStates__1": "Removed",
  "Rules__0__Rules__1__SetParentStateTo": "Committed",
  "Rules__0__Rules__1__All": false,
  "Rules__0__Rules__2__IfState": "Done",
  "Rules__0__Rules__2__NotParentStates__0": "Removed",
  "Rules__0__Rules__2__SetParentStateTo": "Done",
  "Rules__0__Rules__2__All": true
}
```