if (Get-Process node -ErrorAction SilentlyContinue) {
    Get-Process node | Stop-Process -Force
    Write-Host 'Node-Prozesse wurden beendet.'
} else {
    Write-Host 'Keine Node-Prozesse gefunden.' -ForegroundColor Yellow
}