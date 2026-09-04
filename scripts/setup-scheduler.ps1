# 設定 Windows 工作排程：每月 1 日 凌晨 3:00 自動更新題庫
# 請以系統管理員身分執行：右鍵 → 以系統管理員身分執行

$TaskName = "會考模擬題庫每月更新"
$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$BatchFile = Join-Path $ProjectRoot "update-monthly.bat"

if (-not (Test-Path $BatchFile)) {
    Write-Error "找不到 update-monthly.bat"
    exit 1
}

schtasks /Delete /TN $TaskName /F 2>$null | Out-Null
schtasks /Create /TN $TaskName /TR "`"$BatchFile`"" /SC MONTHLY /D 1 /ST 03:00 /F /RL LIMITED

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "已建立排程工作「$TaskName」" -ForegroundColor Green
    Write-Host "  時間：每月 1 日 凌晨 3:00"
    Write-Host "  檔案：$BatchFile"
    Write-Host ""
    Write-Host "手動更新：雙擊 update-monthly.bat"
    Write-Host "更新紀錄：logs\monthly-update.log"
} else {
    Write-Error "排程建立失敗，請以系統管理員身分執行"
}
