# to resolve any unmatched path with 200.html which is a copy of index.html :D
# https://surge.sh/help/adding-a-200-page-for-client-side-routing
cp docs/index.html docs/200.html

yarn surge $PWD/docs https://maksim-barouski.surge.sh
