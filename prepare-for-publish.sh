rm -rf docs
yarn build
mv dist docs
# to resolve any unmatched path with index.html
# https://github.com/isaacs/github/issues/408#issuecomment-114326735
cp docs/index.html docs/200.html
