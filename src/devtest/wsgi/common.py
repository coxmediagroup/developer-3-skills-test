import os

from django.core import wsgi


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'devtest.conf.common')

application = wsgi.get_wsgi_application()
