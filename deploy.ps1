# Text-to-Speech App Deployment Script
Write-Host "🚀 Deploying Text-to-Speech App..." -ForegroundColor Green

# Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    
    # Check if serve is installed
    $serveInstalled = Get-Command serve -ErrorAction SilentlyContinue
    if (-not $serveInstalled) {
        Write-Host "📥 Installing serve..." -ForegroundColor Yellow
        npm install -g serve
    }
    
    # Start production server
    Write-Host "🌐 Starting production server on port 3002..." -ForegroundColor Yellow
    Write-Host "📍 Access your app at: http://localhost:3002" -ForegroundColor Cyan
    Write-Host "🛑 Press Ctrl+C to stop the server" -ForegroundColor Red
    
    # Change to build directory and start server
    Set-Location build
    serve -p 3002
} else {
    Write-Host "❌ Build failed! Please check the errors above." -ForegroundColor Red
}
