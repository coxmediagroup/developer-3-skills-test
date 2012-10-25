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
2.  Your tic-tac-toe game's web interface must use Ajax, but also work for browsers without JavaScript enabled (i.e., [progressive enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement))
3.  PEP-8
4.  `>>> import this`

Rules
-----

1.  All templates in your application must inherit from the provided `base.html` template
2.  The provided jQuery (1.8.2) is the only JavaScript library permitted
3.  Any apps must reside in the `devtest/apps` directory

Getting Started
---------------

    mkvirtualenv devtest
    git clone [forked repo] devtest
    cd devtest/src/
    pip install -r requirements.txt

    python manage.py syncdb
    python manage.py runserver 8080

Upon Completion
---------------

Send coxmediagroup a pull request - we won't accept your pull request, but our team will clone your fork and test out your application locally, as well as examine your code.
