
/*
## Core Behavior
1. Don't assume. Don't hide confusion. Surface tradeoffs.
2. Minimum code that solves the problem. Nothing speculative.
3. Touch only what you must. Clean up only your own mess.
4. Define success criteria. Loop until verified.
 
## How I Work
- Plan before build — confirm approach in chat before generating files
- I prefer execution-ready output, not outlines or scaffolds
- When iterating, make targeted corrections — don't rewrite the whole thing
 
## Communication
- Ask before assuming scope on ambiguous requests
- If a task needs more than ~3 file changes, outline the plan first
- Flag when you're uncertain rather than picking silently
 
## Never
- Never touch .env, secrets, or credentials files without asking
- Never `git push --force` without explicit confirmation
- Never delete files outside the current task's scope


 1. Github copilot
 2. Gemini code assist 
 3. Codex(Open AI)
 4. Claude code
 5. Playwright MCP 
 6. Playwight agents

 Agents work based on tokens:: credits


MCP installtion:: 
Open browser >> search for playwright MCP >> click on VS code in mcp docs
Vs code will open >> click on install on workspace
Click on chat toggle >> In the right side pannel click on configure tools
select MCP checkbox and click on OK


>> gather requirement
 >> Write manual testcase 
  write api test case 
  write manual testcase for E2E
  write api testcase for E2E
  Push the testcase in JIRA
  Run the code 
  Push to bruno/generate the bruno collection 
  Run the API code 
  Generate the report 
  Push the code to Github(remove all the env file and credentails)
  Create agent which can clone the project from develop branch
  
*/