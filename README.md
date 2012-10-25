The CMG Digital Developer Skills Test
=====================================

Attention [Developers](http://bit.ly/XVcCqa),

This is a test designed to gauge your skills and attention to detail, and to give our team some insight into your coding style and habits.

Objective
---------

Deliver a simple web application which provides the following 3 features:

1.  Simple user registration and sign in functionality
2.  An unbeatable tic-tac-toe game that authenticated users can lose against the computer via the web interface
3.  A simple game stats page for users to view their rank among fellow tic-tac-toe losers

Design Principles
-----------------

1.  The web interface of your application must be [responsive](http://en.wikipedia.org/wiki/Responsive_web_design)
2.  Your game interface should use Ajax, but must also work without JavaScript enabled (i.e., [progressive enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement))
3.  Make your templates and JavaScript as dumb as possible, but no dumber (keep logic on the server)
4.  PEP-8
5.  `>>> import this`

Rules
-----

1.  All templates in your application must inherit from the provided `base.html` template
2.  The provided jQuery (1.8.2) is the only JavaScript library permitted

Getting Started
---------------

The application structure provided works as-is, so you'll just need to begin work on your app(s) in `devtest/apps`, templates in `devtest/templates`, and media files (JS, CSS, etc.) in `devtest/media`.

    mkvirtualenv devtest
    git clone [forked repo] devtest
    cd devtest/src/
    pip install -r ../requirements.txt

    python manage.py syncdb
    python manage.py runserver 8080

Upon Completion
---------------

Send [coxmediagroup](https://github.com/coxmediagroup) a pull request, just to let us know you're finished (we won't actually pull your code).
