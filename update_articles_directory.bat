dir articles /b /a-d > js/directory.txt
echo [ > js/directory.json
for /F "tokens=*" %%A in (js/directory.txt) DO echo "%%A", >> js/directory.json
echo "end" >> js/directory.json
echo ] >> js/directory.json
