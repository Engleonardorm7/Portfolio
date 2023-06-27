    #!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py migrate
python manage.py dumpdata --exclude auth.permission --exclude contenttypes > data.json
python manage.py loaddata data.json

python manage.py shell
from django.contrib.auth.models import User

# Crea un nuevo usuario
user = User.objects.create_user(username='Leonardo', password='1234')
user.is_superuser = True
user.save()