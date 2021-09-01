---
sidebar_position: 1
---

# Local Environment

- Copy and paste the `appsettings.sample.json` file and rename it to `appsettings.json`
- Replace the `Azure.Uri` and `Azure.Pat` variables
- Edit the Rules as you like, or leave it like it is already
- Run
- ??
- Profit

Then use ngrok or equivalents to be able to access the service and configure it in azure as shown in [Azure Devops Configuration](/docs/configurations/azure-devops)

### Or with docker

Duplicate the file env.example.list and rename it to env.list, fill out the Azure Vars and run:

```bash
docker build -t azure-boards-pbi-autorule:latest .

docker run --env-file env.list -p 5000:80 azure-boards-pbi-autorule:latest
```