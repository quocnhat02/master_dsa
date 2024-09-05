#!/bin/sh

set -e

host="$1"
shift
cmd="$@"

until nc -z "$host" 27017; do
  >&2 echo "MongoDB is unavailable - sleeping"
  sleep 1
done

until nc -z redis 6379; do
  >&2 echo "Redis is unavailable - sleeping"
  sleep 1
done

>&2 echo "MongoDB and Redis are up - executing command"
exec $cmd