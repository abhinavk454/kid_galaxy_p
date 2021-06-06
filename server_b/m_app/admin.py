from django.contrib import admin
from .models import Data_m


class DataAdmin(admin.ModelAdmin):
    lis_d = ('datas')


admin.site.register(Data_m, DataAdmin)
