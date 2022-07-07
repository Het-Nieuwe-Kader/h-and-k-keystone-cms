#!/usr/bin/python3.9
#

dbuser = 'handkkeystonecmsadmin@h-and-k-keystone-cms-database'
dbpass = '4239fabb0eA#6ba42d8a6a1be94f29a49'
host = 'h-and-k-keystone-cms-database.postgres.database.azure.com'
port = '5432'
resourcename = 'postgres'

from time import sleep
import psycopg2
try:
    print('connection string:', f"dbname='{resourcename}' user='{dbuser}' host='{host}' password='{dbpass}'")
    db = psycopg2.connect(f"dbname='{resourcename}' user='{dbuser}' host='{host}' password='{dbpass}'")
except:
    exit(1)

exit(0)