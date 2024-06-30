echo "Starting Discord bot..."
echo "------------------------"

node .

if [ $? -ne 0 ]; then
  echo
  echo "[ERROR] Discord bot failed to start."
  echo
else
  echo
  echo "Discord bot started successfully!"
  echo
fi

read -p "Press any key to continue..."