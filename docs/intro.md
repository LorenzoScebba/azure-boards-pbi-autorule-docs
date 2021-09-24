---
sidebar_position: 1
title: Wait what is this?
---

[![.NET](https://github.com/LorenzoScebba/azure-boards-pbi-autorule/actions/workflows/dotnet-test.yml/badge.svg)](https://github.com/LorenzoScebba/azure-boards-pbi-autorule/actions/workflows/dotnet-test.yml)
[![Docker Image CI](https://github.com/LorenzoScebba/azure-boards-pbi-autorule/actions/workflows/docker-image.yml/badge.svg)](https://github.com/LorenzoScebba/azure-boards-pbi-autorule/actions/workflows/docker-image.yml)
[![Docker hub](https://res.cloudinary.com/dsb3vmg4x/image/upload/b_rgb:dae8fd,c_fit,h_20,w_100,c_pad/v1629815565/azure-boards-pbi-autorule/docker.png)](https://hub.docker.com/r/lorenzoscebba/azure-boards-pbi-autorule)

This ~~demonic creation~~ project should help users of azure boards to automatically move a Work Item parent or childrens to a particular
state based on the Work Item state updates. It can also automatically put work items under a certain area path on the work item creation.

<details>
<summary>State rules</summary>

Each rule can be customized and consists of the following variables (when updating a parent):

```json
{
  "Type": "Task",
  "Rules": [
    {
      "IfState": "In Progress",
      "NotParentStates": [
        "Done",
        "Removed"
      ],
      "SetParentStateTo": "Committed",
      "All": false
    }
  ]
}
```

_The above rule is triggered each time a **Task** moves from any state to **In Progress** (`IfState`), the rule also
checks that the parent state is not **Done** or **Removed** (`NotParentState`) and if that's the case it modifies the
parent state to **Committed** (`SetParentStateTo`). For this rule to work it is not necessary that all childrens are
**In Progress** (`All`)_

Or the following ones (when updating the childrens)

```json
{
  "Type": "Product Backlog Item", // When a PBI changes
  "Rules": [
    {
      "IfState": "Done", // If the PBI state is "Done",
      "SetChildrenStateTo": "Done" // Set all childrens (Tasks) to "Done" 
    }
  ]
}
```

_The above rule is triggered each time a **Product Backlog Item** moves from any state to **Done** (`IfState`), and it modifies the
childrens state to **Done** (`SetChildrenStateTo`)._

</details>

<details>
<summary>Area rules</summary>

Each rule can be customized and consists of the following variables:

```json
{
  "AreaRules": [
    {
      "Type": ["Custom Task", "Custom Bug"], // When a custom task or a custom bug is created
      "Rule": {
        "SetAreaPathTo":"lorenzoscebba\\Area2" // Set its area path to lorenzoscebba\Area2
      }
    }
  ]
}
```

_The above rule is triggered each time a **Custom Task** or a **Custom Bug** is created. It then automatically assign that work item to the area path `lorenzoscebba\Area2`._

</details>