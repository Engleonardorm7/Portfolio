    #!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py migrate
python manage.py shell -c "exec(open('projectslist.py').read())"
# python manage.py dumpdata --exclude auth.permission --exclude contenttypes > data.json
# python manage.py loaddata data.json

