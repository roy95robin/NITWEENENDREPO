
// Understanding Github 

/*
Github/bitbucket/gitlab -- these are used for version control 

git is a distributed version control allow multiple people to store their code,
it store the changes, track the history etc...
bitbucket is a webbased version control , used for storing the codebase. 
Gitlab is a web based devops tool , that helps in version control. 

// Download git from the browser and install in your system:: 
// You should have one account created on the github. 

// Local branch >> Develop >> Main branch

** Assume there is no account created in the github ::
1. Login to github. 
2. Create the branch.repository in the github. 
In terminal provide the below command in same manner:: 
>> git init
>> git add .
>> git commit -m "First message"
>> git branch -M main
>> git remote add origin <rporistory URL>
>> git push -u origin

// When repo is already created in the github. 
1. Clone the repository inside your local system 
    git clone <repositoryUrl>
    git clone https://github.com/roy95robin/NITWEENENDREPO.git
2. After clone is done, install the below details 
    npm install
    npm init playwright
3. Now make some changes to the code inside the local branch. 
 create the local branch
    git checkout -b TestLogin
4. verify which branch you're in 
    git branch
5. Make changes to the local file and push the changes 
6. git status 
7. git add . 
8. git commit -m "new changes"
9. git push 
    here you might see error for first time with suggested command 
    copy the command and push it 
    git push --set-upstream origin TestLogin

*/

// Create the PR:: 
/*
After the changes are push to the branch , open the github. 
1. Goto repository >> click on pull request 
2. Open the new PR
3. Provide all the mandatory details like reviewer, assignee etc
4. Click on Pull Request. 
5. If there is any review comment work on it and create new PR


*/