WebPong
=======

Introduction
------------

WebPong is a really simple HTML5 and django implementation of multiplayer pong.
The cool features are:

* Pong simulator written in Python and translated to JavaScript with [pyjs][0]
* Time rewinding and resimulation to attempt to deal with the lag associated with http.

[0] http://pyjs.org/

Building
--------

The django stuff is just normal django stuff, so install it like normal.
Building the pong simulator for javascript is slightly more complicated.
Assuming you have at least version 0.7~+pre2 of pyjs installed, building
the simulator goes something like this:

    $ cd sim/
    $ pyjsbuild -m pong.py

After the build is done, you have to add "'static' +" (without the double quotes)
to line 159 of bootstrap.py. You should use manage.py to collect the new static
files:

    $ cd ..
    $ python manage.py collectstatic

That should be it!
