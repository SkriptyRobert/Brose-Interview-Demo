# Brose_Job_Interview Demo

#Short Desription

A simple web application builded in React that demonstrates containerized service deployment using Ansible, which sets up Podman, systemd, firewall, and SELinux, Haproxy. The application is hosted in a Podman container, running under a non-root user with automatic start-up on system boot. The setup includes a load balancer and multi-server configuration for High availability, with a PostgreSQL database for storing user data whats also run in container.

#OCI Compatibility

The application is designed to be OCI-friendly, ensuring compatibility with container standards for easy portability and integration. It is optimized for seamless integration into Kubernetes and cloud environments, making it a flexible solution for modern infrastructure.

![{420218B9-8CA5-4B98-BAE5-F7424A67BEE7}](https://github.com/user-attachments/assets/77aa1b05-22ae-4c4b-9121-264c1a25bf92)

# Project structure 

Frontend (Dockerfile.frontend)
Dvoufázový build:
Node.js pro sestavení aplikace.
Apache pro její obsluhu.
Optimalizovaný produkční build React aplikace.
Aplikace běží na portu 80.
Backend (Dockerfile.backend)
Node.js server poskytující API.
Připraven pro komunikaci s PostgreSQL.
Server běží na portu 3001.
Database (Dockerfile.db)
PostgreSQL verze 15.
Inicializační skript pro vytvoření tabulky.
Perzistentní úložiště pomocí Docker volume.
Docker Compose
Všechny služby běží v jedné síti.
Správné pořadí spouštění kontejnerů (využívá depends_on).
Perzistentní data pro databázi.
Správná konfigurace prostředí pro různé služby.
Aplikace
Dynamické API URL podle prostředí (development/production).
