# Azure Devops Configuration

---

## State Rules

- Create a new Service Hook in azure devops of type `Web Hook`
- The trigger should be `Work item updated`
  - Area Path: `[Any]` or a specific area path based on your needs
  - Work item type: `[Any]`
  - Tag: Leave it empty or fill it based on your needs
  - Field: `State`
- Url: `https://<URL_OF_SERVICE>/api/state`

---

### Image walk-through

![web-hook](/img/web-hook.png)
![web-hook](/img/web-hook2.png)

---

## Area Rules

- Create a new Service Hook in azure devops of type `Web Hook`
- The trigger should be `Work item created`
  - Area Path: Specific area path based on your needs
  - Work item type: `[Any]`
  - Tag: Leave it empty or fill it based on your needs
- Url: `https://<URL_OF_SERVICE>/api/area`