# authMySQL
#Instruction for install MySQL for windows
# First step download mySQL from the link below :
 https://www.mysql.com/fr/downloads/

![mysql 1](https://user-images.githubusercontent.com/96472173/216312749-23c34394-22b6-42da-ba94-09b234eb5132.png)

# Click MySQL Community (GPL) Downloads »

![Inkedmysql 2](https://user-images.githubusercontent.com/96472173/216312887-e762daa0-62df-45d0-8eab-47f6375dda22.jpg)

# Click MySQL Installer for Windows

![Inkedmysql 3](https://user-images.githubusercontent.com/96472173/216313056-d50c4eae-db1f-44d3-8cc5-ff4ae39df3d5.jpg)
 
 # Click download
 
 ![Inkedmysql 4](https://user-images.githubusercontent.com/96472173/216313303-6dd99b0c-05dd-4b34-86a2-b3c36f7ba958.jpg)

# It is not necessary to create an account in the  Oracle. Just click "No thanks", then start my download. Or You can go to create account if you want :) 

![Inkedmysql 5](https://user-images.githubusercontent.com/96472173/216313604-9ca8e973-d4f6-4ecd-932c-6f479e5b10b3.jpg)

# Go ahead and follow the installation steps:

![Inkedmysql 6](https://user-images.githubusercontent.com/96472173/216313828-bd06d6a1-6ec0-42db-9220-10f654c2173b.jpg)
![Inkedmysql 7](https://user-images.githubusercontent.com/96472173/216313843-4b90ae15-0f5b-4fca-adfa-8d27fd67d3c5.jpg)
# You need to create a password but you need to be sure that  you will not forget this password 
![Inkedmysql 8](https://user-images.githubusercontent.com/96472173/216313846-dde3d044-2261-4fd5-b3a6-3d31324c1d94.jpg)

# You need to write your password to connect to the server 

![Inkedmysql 9](https://user-images.githubusercontent.com/96472173/216314358-0fb43cf7-0d83-48fa-996c-018ff7d05d31.jpg)

# After you complete the install check the system environment variables. Go to search and type env 

![Capture d’écran 2023-02-02 125938](https://user-images.githubusercontent.com/96472173/216319266-ace4c2a2-fc63-44d0-b584-fbad2634c5a9.png)

# Click on the environment variables 

![env 2](https://user-images.githubusercontent.com/96472173/216367565-1e8edf13-7545-4412-bbce-d2f2f67e8aef.png)

# Select path and Click "modifier" / "modify" 

![env 3](https://user-images.githubusercontent.com/96472173/216368516-6ef22f67-1530-4f24-84cd-b083e6add004.png)

# Click NEW and add this path => C:\Program Files\MySQL\MySQL Server 8.0\bin


![env 4](https://user-images.githubusercontent.com/96472173/216368854-a41535dd-4a81-4c96-b544-7c79da08cf25.png)
# Save and then you have to restart your PC
# Start creating your backend server (index.js)
# Create file schema.sql that contain the  creation of your database and tables, 
# then  create config file to add a configuration and connection to your database : check the "./configurationMySQL/cinfig.js "

# Then run in the terminal "mysql -u root -p <schema.sql"  then run your server 

PS : these slides will help you to manage the workshop, 
You can enhance your knowledge by seeking information in the internet
# Intro to DBMS  database base mangment system https://docs.google.com/presentation/d/1ZZ2RHQOkQlBpTzQt1VBCMSqPEdYMiEU8_6zHflDPETA/embed?slide=id.gd9c406d18b_0_0



