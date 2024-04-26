Q1. So i forked a repo - only main branch got forked , develop branch is not there how can i get develop branch in local ?? 

```
If the develop branch exists in the original repository but not in your forked repository, you can still fetch and create a local copy of the develop branch. Here are the steps to do that:

1. Add the Original Repository as a Remote:
git remote add upstream <original_repository_url>

2. Fetch Branches from the Original Repository:
git fetch upstream

3. Create a Local Branch Tracking the Develop Branch:
git checkout -b develop upstream/develop

This command creates a new local branch named develop tracking the develop branch from the original repository.

4. Push the Develop Branch to Your Forked Repository:
git push origin develop

This step is optional. If you want to contribute changes to the develop branch in your forked repository, you can push the newly created local develop branch to your fork.
After following these steps, you should have the develop branch locally in your forked repository. Remember that you'll need to fetch updates from the original repository periodically to stay up-to-date with changes made to the develop branch there. You can do this by repeating step 2 whenever you want to fetch the latest changes from the original repository.
```


Q2. Git cmds to rebase newbranch to develop in local 
```
To rebase a branch named newbranch onto the develop branch in your local repository, you can follow these steps:

1. Checkout the Develop Branch:
Ensure you are on the develop branch:
git checkout develop

2. Fetch Latest Changes from Remote:
git fetch origin develop

3. Rebase Newbranch onto Develop:
Once you have the latest changes from the develop branch, you can rebase newbranch onto it:
git rebase develop newbranch
This command will replay the changes in newbranch on top of the latest develop branch, resolving any conflicts along the way.

4. Resolve Conflicts (if any):
If there are conflicts during the rebase process, Git will pause and ask you to resolve them. After resolving conflicts, you need to continue the rebase:
# After resolving conflicts
git add .  # Add the resolved files
git rebase --continue
git push origin newbranch

Q3. Commit with no code changes:  git commit —only —allow -empty -m “test”


Git - Squash all commits:

git checkout yourBranch
git reset $(git merge-base master $(git branch --show-current))
git add -A
git commit -m "one commit on yourBranch"