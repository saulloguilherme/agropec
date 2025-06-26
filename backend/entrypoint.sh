#!/bin/sh
until pg_isready -h db -p 5432 -U user; do
  echo "Esperando o banco de dados ficar pronto..."
  sleep 2
done

npx prisma migrate dev --name init

npx prisma migrate deploy && npx prisma generate

npm run seed

npm run dev