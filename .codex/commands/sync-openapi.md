Use the `openapi-sync` agent to compare implemented routes with `docs/openapi.yaml` and suggest minimal diffs.

Instructions:
- List handler routes, params, and response envelope (`utils.ResponseData`).
- Compare with OpenAPI; highlight mismatches with proposed patches.

Examples:
- Compare App routes: src/ui/rest/app.go vs docs/openapi.yaml

