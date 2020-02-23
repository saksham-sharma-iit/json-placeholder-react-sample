npm run build
cp -r build/* ./docs/
git add --all
git commit -m "Changes"
git push origin master
