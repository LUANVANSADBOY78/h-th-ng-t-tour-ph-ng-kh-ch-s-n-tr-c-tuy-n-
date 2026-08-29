# Bước 1: Build ứng dụng React/Vite
FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Bước 2: Chạy ứng dụng bằng Nginx
FROM nginx:alpine
# Copy file cấu hình nginx (nếu có) hoặc dùng mặc định
# COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
