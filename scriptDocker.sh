#!/bin/bash
sudo apt-get update
sudo curl -sSL https://get.docker.com | sudo sh

curl -L "https://github.com/docker/compose/releases/download/1.9.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

sudo mkdir /home/vagrant/mongodb

cd /vagrant
sudo docker-compose up -d
