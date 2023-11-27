docker build --no-cache -f SQL\Dockerfile.PostgreSql -t russkaya_zernovachya_kompaniya/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t russkaya_zernovachya_kompaniya/app ../..
