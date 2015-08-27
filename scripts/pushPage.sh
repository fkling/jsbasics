#!/bin/sh

TARGETPATH="../jsbasics_pages" 

if [ ! -d "$TARGETPATH" ]; then
  git clone ./ "$TARGETPATH"
  cd "$TARGETPATH"
  git checkout gh-pages
  git remote set-url --push origin https://github.com/fkling/jsbasics.git
  cd -
fi

echo "Building..."
npm run build
cp -R out/ $TARGETPATH
echo "Updating..."
cd $TARGETPATH
git add .
git commit -m"Update site"
echo "done"
