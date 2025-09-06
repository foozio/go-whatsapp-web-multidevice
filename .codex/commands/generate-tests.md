Use the `golang-test-writer` agent to create or extend unit tests for a target package or file.

Instructions:
- Propose a test file path ending with `_test.go`.
- Use table-driven tests; avoid flaky timing.
- Stub interfaces rather than real WhatsApp/DB when possible.

Examples:
- Add tests: src/pkg/utils/environment.go
- Add validation tests: src/validations/message_validation.go

