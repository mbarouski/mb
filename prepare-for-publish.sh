rm -rf dist
yarn build
# to resolve any unmatched path with index.html
# https://github.com/isaacs/github/issues/408#issuecomment-114326735
cp dist/index.html dist/200.html
