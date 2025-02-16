# Brose Interview Demo

#Short Desription

A simple web application built with React, demonstrating containerized service deployment using Ansible. The setup automates the installation and configuration of Podman, Docker, systemd, firewall, SELinux, and HAProxy. The application runs inside a Docker container with automatic startup on system boot.

Docker Compose is used for efficient and FAST deployment, specifying service dependencies, container hostnames & IPs, networking, and persistent volumes to retain data after restarts. The architecture includes a load balancer and a multi-server configuration for high availability, with a PostgreSQL database running in a container to store user data.

#OCI Compatibility

The application is designed to be OCI-friendly, ensuring compatibility with container standards for easy portability and integration. It is optimized for seamless integration into Kubernetes and cloud environments, making it a flexible solution for modern infrastructure.

![{420218B9-8CA5-4B98-BAE5-F7424A67BEE7}](https://github.com/user-attachments/assets/77aa1b05-22ae-4c4b-9121-264c1a25bf92)

# Project structure 

### Frontend (Dockerfile.frontend)
- Two-phase build:
  - Node.js for building the application.
  - Apache for serving it.
- Optimized production build of the React application.
- The application runs on port 80.

### Backend (Dockerfile.backend)
- Node.js server providing the API.
- Prepared for communication with PostgreSQL.
- The server runs on port 3001.

### Database (Dockerfile.db)
- PostgreSQL version 15.
- Initialization script to create the table.
- Persistent storage using Docker volume.

### Docker Compose
- All services run in the same network.
- Correct container startup order (uses `depends_on`).
- Persistent data for the database.
- Proper environment configuration for various services.

### Application
- Simple React app. what send data from web form in to the PSQL. Dynamic API request between frontend and backend.

# Infrastructure diagram 

![image](https://github.com/user-attachments/assets/a6a354f0-84c1-4312-aba8-33b6b26e08a2)


