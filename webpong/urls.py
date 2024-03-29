from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'webpong.views.home', name='home'),
    # url(r'^webpong/', include('webpong.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^pong/', include('pong.urls')),
    url(r'^accounts/', include('registration.backends.default.urls')),

    url(r'', include('home.urls')),
)

urlpatterns += staticfiles_urlpatterns()
