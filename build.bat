echo "Installing Angular CLI"
npm install -g @angular/cli@7.0.6
echo "Running npm install"
npm install
echo "Running build command"
npm run build
echo "Installing electron"
npm install -g electron@6.0.4
echo "Installing electron packager"
npm install -g electron-packager@14.0.4
echo "Compiling for win32"
npm run build-win32