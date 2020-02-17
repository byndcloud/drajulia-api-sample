cd ./cordova
cp ../src/assets/drajulia-foreground.png icon.foreground.png
cp ../src/assets/drajulia-background.png icon.background.png
cp ../src/assets/drajulia.png icon.png
echo $(app-icon generate)
echo $(cordova-icon)
# echo $(cordova-splash --splash=splash.png)
# Generate adaptive icons
echo $(app-icon generate -i icon.foreground.png --adaptive-icons --platforms android)
cd ..
yarn cordova-build-android
cd ./cordova
cordova build android --release -- --keystore=../../drajulia-api-sample.keystore --storePassword=drajuliaapisample --alias=drajulia-api-sample --password=drajuliaapisample
