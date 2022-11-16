dropdb --if-exists curateddocs
psql -d postgres -c "DROP USER IF EXISTS curateddocs_app"
createdb curateddocs
psql -d curateddocs -c "ALTER DATABASE curateddocs SET TIMEZONE TO 'Etc/UTC';"
psql -d curateddocs -c "CREATE USER curateddocs_app WITH PASSWORD 'greenbullsucks@2023';"
psql -d curateddocs -c "GRANT ALL PRIVILEGES ON DATABASE curateddocs TO curateddocs_app;"
psql -d curateddocs -c "ALTER USER curateddocs_app WITH SUPERUSER"
