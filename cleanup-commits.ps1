# PowerShell script to clean up commit messages
# This script helps automate the commit message cleanup process

Write-Host "Git Commit History Cleanup Script" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
Write-Host ""

# Show current problematic commit messages
Write-Host "Current problematic commit messages:" -ForegroundColor Yellow
git log --oneline -20 | ForEach-Object {
    if ($_ -match "can you|make it|use your|how to|Try fixing|see the|this is|align the|where is|name my|for element|IN README|use a activity") {
        Write-Host $_ -ForegroundColor Red
    } else {
        Write-Host $_ -ForegroundColor White
    }
}

Write-Host ""
Write-Host "Options to clean up your commit history:" -ForegroundColor Cyan
Write-Host "1. RECOMMENDED: Reset and create a clean single commit" -ForegroundColor Green
Write-Host "2. Interactive rebase to edit each commit message individually" -ForegroundColor Yellow
Write-Host "3. Create a new repository with clean history" -ForegroundColor Blue

Write-Host ""
$choice = Read-Host "Enter your choice (1, 2, or 3)"

switch ($choice) {
    "1" {
        Write-Host "Creating backup branch..." -ForegroundColor Yellow
        git branch backup-before-cleanup
        
        Write-Host "Resetting to create clean history..." -ForegroundColor Yellow
        git reset --soft HEAD~74
        
        Write-Host "Please enter a clean commit message for your project:"
        $commitMessage = Read-Host "Commit message"
        
        if ([string]::IsNullOrWhiteSpace($commitMessage)) {
            $commitMessage = "Initial version of Jal Shakti water quality monitoring app

Features:
- Water quality assessment dashboard
- HMPI calculation and visualization
- Pollution mapping
- Historical data tracking
- PWA functionality
- AI-powered analysis"
        }
        
        git commit -m $commitMessage
        
        Write-Host "Clean commit created! Run 'git push --force-with-lease origin main' to update remote repository" -ForegroundColor Green
        Write-Host "WARNING: This will rewrite history. Make sure you have a backup!" -ForegroundColor Red
    }
    "2" {
        Write-Host "Starting interactive rebase..." -ForegroundColor Yellow
        Write-Host "In the editor that opens, change 'pick' to 'reword' for commits you want to edit" -ForegroundColor Cyan
        git rebase -i --root
    }
    "3" {
        Write-Host "To create a new repository:" -ForegroundColor Cyan
        Write-Host "1. Create a new GitHub repository" -ForegroundColor White
        Write-Host "2. Remove the existing .git folder: Remove-Item -Recurse -Force .git" -ForegroundColor White
        Write-Host "3. Initialize new repository: git init" -ForegroundColor White
        Write-Host "4. Add and commit: git add .; git commit -m 'Initial commit'" -ForegroundColor White
        Write-Host "5. Connect to new remote and push" -ForegroundColor White
    }
}