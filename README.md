# Run test via command line

Run all test cases
```npx playwright test```

Run single test case
```npx playwright test --headed -g "<test-case-title>"```

Run test with allure-playwright report
```npx playwright test --reporter=line,allure-playwright```

To generate report
```npx allure generate ./allure-results --clean ```

To Open HTML report on a browser using the command
```npx allure open ./allure-report```