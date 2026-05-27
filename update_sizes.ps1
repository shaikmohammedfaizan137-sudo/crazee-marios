$file = 'c:\Users\LENOVO\Desktop\websites\crazy mario\src\data\menu.js'
$content = Get-Content $file -Raw

# Replace sizes arrays for all pizza items - convert string arrays to objects with price diffs
# The base price listed is for 10", then +$2.99 for 12", +$4.99 for 14", +$6.99 for 16"
$content = $content -replace 'sizes: \["10\\""  , "12\\"", "14\\"", "16\\""\]', 'sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}]'
$content = $content -replace 'sizes: \["10\\"", "12\\"", "14\\"", "16\\""\]', 'sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}]'

Set-Content $file -Value $content -NoNewline
Write-Host "Done updating sizes"
