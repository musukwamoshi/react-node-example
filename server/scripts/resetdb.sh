dropdb --if-exists briefdocs
psql -d postgres -c "DROP USER IF EXISTS briefdocs_app"
createdb briefdocs
psql -d briefdocs -c "ALTER DATABASE briefdocs SET TIMEZONE TO 'Etc/UTC';"
psql -d briefdocs -c "CREATE USER briefdocs_app WITH PASSWORD 'greenbullsucks@2023';"
psql -d briefdocs -c "GRANT ALL PRIVILEGES ON DATABASE curateddocs TO briefdocs_app;"
psql -d briefdocs -c "ALTER USER briefdocs_app WITH SUPERUSER"
