[CmdletBinding()]
param()

Trace-VstsEnteringInvocation $MyInvocation

try {
    Import-VstsLocStrings "$PSScriptRoot\task.json"

    # Get task variables.
    [bool]$debug = Get-VstsTaskVariable -Name System.Debug -AsBool

    Write-Host "Debug mode: $($debug)"
} finally {
    Trace-VstsLeavingInvocation $MyInvocation
}