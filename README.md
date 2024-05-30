# Nginx and Nodejs Docker Challenge Fullcycle

# How to run the project
1. navigate to app
```bash
npm i
```

2. Start Containers
   
```bash
docker-compose up -d --build
```

3. Create Table
   
```bash
docker exec -it db bash
```

```bash
mysql -u root -p
```

```sql
USE app;
```

```sql
CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(50), last_name VARCHAR(50));
```

4. Call localhost

```
http://localhost:8080
```

## Remove The Containers and volumes

```bash
docker-compose down -v
```