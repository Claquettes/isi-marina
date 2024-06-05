pm2 stop marina-back.js &&
rm ./marina-back &&
nano marina_back.js &&
pm2 start marina_back.js &&
echo "Marina back updated and restarted"