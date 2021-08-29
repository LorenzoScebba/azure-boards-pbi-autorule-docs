# Azure Devops Configuration

- Create a new Service Hook in azure devops of type `Web Hook`
- The trigger should be `Work item updated`
    - Area Path: `[Any]` or a specific area path based on your needs
    - Work item type: `[Any]`
    - Tag: Leave it empty or fill it based on your needs
    - Field: `State`
- Url: `https://<URL_OF_SERVICE>/api/receive`

---

## Image walk-through

![web-hook](/img/web-hook.png)
![web-hook](/img/web-hook2.png)
