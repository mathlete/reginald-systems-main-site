# setup node and compile
npm install --prefix ./main.vue > /dev/null 2>&1 && npm run build --prefix ./main-vue > /dev/null 2>&1
# copy build to nginx folder
cp -r main-vue/dist/* /var/www/html/
# clean the current working directory of build artifacts
git checkout .
