# Развертывание через docker

Наиболее простой способ, это запустить через docker-compose
Нужно зайти в папку с файлами изапустить `docker-compose up`

По умолчанию client (приложение React) сидит на порту 3000, а server (express) на 5000

# Развертывание без докера

* nodejs version v16.14.0
* npm version 8.3.1
* npx version 8.3.1
* mongodb 5.0.6

Прописать настройки mongodb нужно в папке `server/db.js`
Зайти в папку server и запустить `npm run start`
Зайти в папку client и запустить `npm run start`
