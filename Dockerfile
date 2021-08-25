FROM postgres

RUN cd /home && mkdir pgdata && cd pgdata mkdir data
WORKDIR /home/pgdata/data

ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin
ENV POSTGRES_DB=notify
ENV PGDATA=/home/pgdata/data

COPY ./Dockerfiles/database/data /home/pgdata/data/