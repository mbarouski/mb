rm -rf dist
cp -r docs dist
# to resolve any unmatched path with 200.html which is a copy of index.html :D
# https://surge.sh/help/adding-a-200-page-for-client-side-routing
cp dist/index.html dist/200.html
