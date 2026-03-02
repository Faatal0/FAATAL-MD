#!/data/data/com.termux/files/usr/bin/bash

while true; do
  if [ "$1" = "up" ]; then
    echo "🔄 Atualizando bot..."
    git pull
    npm install
    echo "✅ Atualizado!"
  fi

  node index.js
  sleep 1
done