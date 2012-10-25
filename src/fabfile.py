from fabric.api import local


def cleanup():
    """
    Removes .pyc files from the project root, recursively.
    """
    local('find . -name \*.pyc -delete')
