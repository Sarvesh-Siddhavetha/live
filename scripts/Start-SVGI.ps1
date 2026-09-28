param(
  [switch]$NoBrowser
)

$ErrorActionPreference = 'Stop'

$projectRoot = 'D:\Siddhavetha\.run\siddha-shop'
$siteUrl = 'http://127.0.0.1:4300/home'
$runtimeDirectory = Join-Path $env:LOCALAPPDATA 'SVGI'
$outputLog = Join-Path $runtimeDirectory 'server-output.log'
$errorLog = Join-Path $runtimeDirectory 'server-error.log'

function Test-SvgiSite {
  try {
    $response = Invoke-WebRequest -Uri $siteUrl -UseBasicParsing -TimeoutSec 2
    return $response.StatusCode -eq 200 -and $response.Content -match 'Siddhavetha'
  }
  catch {
    return $false
  }
}

if (-not (Test-Path -LiteralPath $runtimeDirectory)) {
  New-Item -ItemType Directory -Path $runtimeDirectory | Out-Null
}

if (-not (Test-SvgiSite)) {
  $listener = Get-NetTCPConnection -LocalPort 4300 -State Listen -ErrorAction SilentlyContinue

  if ($listener) {
    Add-Type -AssemblyName PresentationFramework
    [System.Windows.MessageBox]::Show(
      'Port 4300 is already being used by another application. Close that application and double-click SVGI again.',
      'SVGI could not start'
    ) | Out-Null
    exit 1
  }

  Start-Process `
    -FilePath 'npm.cmd' `
    -ArgumentList @('start', '--', '--host', '127.0.0.1', '--port', '4300') `
    -WorkingDirectory $projectRoot `
    -RedirectStandardOutput $outputLog `
    -RedirectStandardError $errorLog `
    -WindowStyle Hidden

  $siteReady = $false
  for ($attempt = 0; $attempt -lt 90; $attempt++) {
    Start-Sleep -Milliseconds 500
    if (Test-SvgiSite) {
      $siteReady = $true
      break
    }
  }

  if (-not $siteReady) {
    Add-Type -AssemblyName PresentationFramework
    [System.Windows.MessageBox]::Show(
      "The SVGI server did not become ready. Check the log files in $runtimeDirectory.",
      'SVGI startup timed out'
    ) | Out-Null
    exit 1
  }
}

if (-not $NoBrowser) {
  Start-Process $siteUrl
}

