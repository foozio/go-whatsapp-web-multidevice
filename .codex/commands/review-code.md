Use the `golang-code-reviewer` agent to review the staged diff or specified files.

Instructions:
- If a diff is available, analyze only the changes and their call sites.
- If files are specified, focus on those paths.
- Produce the sectioned output defined by the agent.

Examples:
- Review REST handler changes: src/ui/rest/app.go src/ui/rest/message.go
- Review infra changes: src/infrastructure/whatsapp/init.go

